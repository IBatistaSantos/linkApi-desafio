import { BusinessModel } from "../models/Business";

export type CreateBusinessParams = Omit<BusinessModel, "id">;

interface ICreateBusiness {
  create(): Promise<void>;
}
export { ICreateBusiness };
