import { BusinessModel } from "../models/Business";

export type CreateBusinessParams = Omit<BusinessModel, "id">;

interface ICreateBusiness {
  create(data: CreateBusinessParams): Promise<void>;
}
export { ICreateBusiness };
