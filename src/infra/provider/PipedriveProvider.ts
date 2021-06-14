import axios from "axios";

import IPipedriveProvider, {
  IResponsePipedrive,
} from "../../data/protocols/provider/IPipedriveProvider";
import configPipedrive from "../../main/config/pipedrive";

export default class PipedriveProvider implements IPipedriveProvider {
  public async listAll(): Promise<IResponsePipedrive> {
    const { data } = await axios
      .get(
        `${configPipedrive.pipedriveUrl}/deals?api_token=${configPipedrive.pipedriveToken}`
      )
      .catch((e) => {
        throw new Error(e.message);
      });

    const payload = data.data;
    if (payload === null) {
      return {
        data: [],
      };
    }

    return {
      data: payload,
    };
  }
}
