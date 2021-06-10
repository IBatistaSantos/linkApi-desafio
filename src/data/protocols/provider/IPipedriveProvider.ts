import { IPipedrive } from "../../../domain/models/Pipedrivre";

interface IResponsePipedrive {
  toSave: IPipedrive[];
  saved: IPipedrive[];
}

export default interface IPipedriveProvider {
  listAll(): Promise<IResponsePipedrive>;
}
export { IPipedriveProvider, IResponsePipedrive };
