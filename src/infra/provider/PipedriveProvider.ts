import IBusinessRepository from "../../data/protocols/db/IBusinessRepository";
import IPipedriveProvider, {
  IResponsePipedrive,
} from "../../data/protocols/provider/IPipedriveProvider";
import { BusinessModel } from "../../domain/models/Business";
import { IPipedrive } from "../../domain/models/Pipedrivre";
import configPipedrive from "../../main/config/pipedrive";

export default class PipedriveProvider implements IPipedriveProvider {
  private businessRepositor: IBusinessRepository;

  constructor(businessRepositor: IBusinessRepository) {
    this.businessRepositor = businessRepositor;
  }

  public async listAll(): Promise<IResponsePipedrive> {
    const { data } = await (
      await fetch(
        `${configPipedrive.pipedriveUrl}/deals?api_token=${configPipedrive.pipedriveToken}`,
        {
          method: "GET",
        }
      )
    ).json();
    if (!data) {
      throw new Error("Erro no Acesso ao Pipedrivre");
    }

    const dealsInDatabase: BusinessModel[] = await Promise.all(
      data.map((d: IPipedrive) => this.businessRepositor.findByCode(d.id))
    );

    const dealsToSave: IPipedrive[] = [];
    const dealsSaved: IPipedrive[] = [];

    data.forEach((deal: IPipedrive) => {
      if (deal.status === "won") {
        if (!dealsInDatabase.find((d) => d && d.code === deal.id)) {
          dealsToSave.push(deal);
        } else {
          dealsSaved.push(deal);
        }
      }
    });

    return { saved: dealsSaved, toSave: dealsToSave };
  }
}
