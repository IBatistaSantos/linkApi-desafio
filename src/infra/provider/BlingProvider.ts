import IBlingProvider from "../../data/protocols/provider/IBlingProvider";
import { CreateBusinessParams } from "../../domain/useCases/CreateBusiness";
import { createXML } from "../../main/app/utils/helpers/createXML";
import configBling from "../../main/config/bling";

export default class BlingProvider implements IBlingProvider {
  public async createBusiness(data: CreateBusinessParams[]): Promise<void> {
    await Promise.all([
      ...data.map((d) =>
        fetch(
          `${configBling.blingUrl}/pedido/json/?apikey=${
            configBling.blingKey
          }&xml=${createXML(d)}`,
          { method: "POST" }
        )
      ),
    ]).catch(console.error);
  }
}
