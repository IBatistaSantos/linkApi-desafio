import { IPipedrive } from "../../../domain/models/Pipedrivre";

interface IResponsePipedrive {
  data: IPipedrive[];
}

export default interface IPipedriveProvider {
  listAll(): Promise<IResponsePipedrive>;
}
export { IPipedriveProvider, IResponsePipedrive };
