import axios from "axios";

import IBlingProvider from "../../data/protocols/provider/IBlingProvider";
import { CreateBusinessParams } from "../../domain/useCases/CreateBusiness";
import { createXML } from "../../main/app/utils/helpers/createXML";
import configBling from "../../main/config/bling";

export default class BlingProvider implements IBlingProvider {
  public async createBusiness(deal: CreateBusinessParams): Promise<void> {
    await axios
      .post(
        `${configBling.blingUrl}/pedido/json/?apikey=${
          configBling.blingKey
        }&xml=${createXML(deal)}`
      )
      .catch((err) => console.log(err));
  }
}
