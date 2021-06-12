import { ICreateBusiness } from "../../../domain/useCases/CreateBusiness";
import { pipedriveToModel } from "../../../main/app/utils/helpers/serializedDeals";
import IBusinessRepository from "../../protocols/db/IBusinessRepository";
import IDailyEarningsRepository from "../../protocols/db/IDailyEarningsRepository";
import IBlingProvider from "../../protocols/provider/IBlingProvider";
import IPipedriveProvider from "../../protocols/provider/IPipedriveProvider";

class DbCreateBusiness implements ICreateBusiness {
  constructor(
    private readonly pipedrive: IPipedriveProvider,
    private readonly businessRepository: IBusinessRepository,
    private readonly blingProvider: IBlingProvider,
    private readonly dailyEarningsRepository: IDailyEarningsRepository
  ) {}
  async create(): Promise<void> {
    const { data } = await this.pipedrive.listAll();
    if (data.length === 0) {
      return;
    }

    data.forEach(async (deal) => {
      const dealsAlreadyExist = await this.businessRepository.findByCode(
        deal.id
      );
      if (dealsAlreadyExist === null && deal.status === "won") {
        await this.businessRepository.create(pipedriveToModel(deal));
        await this.blingProvider.createBusiness(pipedriveToModel(deal));

        const dealInDayAlreadyExists =
          await this.dailyEarningsRepository.findByDate(deal.add_time);

        if (dealInDayAlreadyExists) {
          dealInDayAlreadyExists.total += deal.value;
          await this.dailyEarningsRepository.createOrUpdate(
            dealInDayAlreadyExists
          );
        } else {
          await this.dailyEarningsRepository.createOrUpdate({
            day: deal.add_time,
            total: deal.value,
          });
        }
      }
    });
  }
}

export { DbCreateBusiness };
