import IBusinessRepository from "../../../../data/protocols/db/IBusinessRepository";
import { BusinessModel } from "../../../../domain/models/Business";
import { CreateBusinessParams } from "../../../../domain/useCases/CreateBusiness";
import { map, mapCollection } from "../helpers/mongoHelper";
import { Business } from "../schemas/BusinessSchema";

class BusinessRepository implements IBusinessRepository {
  async findAll(): Promise<BusinessModel[]> {
    const business = await Business.find();
    return mapCollection<BusinessModel>(business);
  }
  async findById(id: string): Promise<BusinessModel> {
    const business = await Business.findById(id);
    return map<BusinessModel>(business);
  }
  async findByCode(code: number): Promise<BusinessModel> {
    const business = await Business.findOne({ code });
    return map<BusinessModel>(business);
  }
  async create(data: CreateBusinessParams[]): Promise<BusinessModel[]> {
    const business = await Business.insertMany(data);
    return mapCollection<BusinessModel>(business);
  }
}

export { BusinessRepository };
