import { BusinessModel } from "../../../domain/models/Business";
import { IListAllBusiness } from "../../../domain/useCases/ListAllBusiness";
import IBusinessRepository from "../../protocols/db/IBusinessRepository";

class DbListAllBusiness implements IListAllBusiness {
  constructor(private readonly businessRepository: IBusinessRepository) {}

  listAllBusiness(): Promise<BusinessModel[]> {
    const allBusiness = this.businessRepository.findAll();
    return allBusiness;
  }
}

export { DbListAllBusiness };
