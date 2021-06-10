import { BusinessModel } from "../../../domain/models/Business";
import { CreateBusinessParams } from "../../../domain/useCases/CreateBusiness";

export default interface IBusinessRepository {
  findAll(): Promise<BusinessModel[] | undefined>;
  findById(id: string): Promise<BusinessModel | undefined>;
  findByCode(code: number): Promise<BusinessModel | undefined>;
  create(data: CreateBusinessParams[]): Promise<BusinessModel[]>;
}
