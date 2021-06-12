import IBusinessRepository from "../../../../data/protocols/db/IBusinessRepository";
import { BusinessModel } from "../../../../domain/models/Business";
import { CreateBusinessParams } from "../../../../domain/useCases/CreateBusiness";
import { map, mapCollection } from "../helpers/mongoHelper";
import { Business } from "../schemas/BusinessSchema";

class BusinessRepository implements IBusinessRepository {
  async findAll(): Promise<BusinessModel[]> {
    const business = await Business.find();
    return business ? mapCollection<BusinessModel>(business) : undefined;
  }
  async findById(id: string): Promise<BusinessModel> {
    const business = await Business.findById(id);
    return map<BusinessModel>(business);
  }
  async findByCode(code: number): Promise<BusinessModel> {
    const business = await Business.findOne({ code });
    return business ? map<BusinessModel>(business) : null;
  }
  async create(data: CreateBusinessParams): Promise<BusinessModel> {
    const business = await Business.create(data);
    return map<BusinessModel>(business);
  }
}

export { BusinessRepository };
