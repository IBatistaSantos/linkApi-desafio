import { CreateBusinessParams } from "../../../domain/useCases/CreateBusiness";

export default interface IBlingProvider {
  createBusiness(data: CreateBusinessParams): Promise<void>;
}
