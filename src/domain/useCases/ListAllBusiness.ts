import { BusinessModel } from "../models/Business";

interface IListAllBusiness {
  listAllBusiness(): Promise<BusinessModel[]>;
}

export { IListAllBusiness };
