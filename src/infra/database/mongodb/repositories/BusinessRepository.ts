import IBusinessRepository from "../../../../data/protocols/db/IBusinessRepository";
import { BusinessModel } from "../../../../domain/models/Business";
import { CreateBusinessParams } from "../../../../domain/useCases/CreateBusiness";
import { MongoHelper } from "../helpers/mongoHelper";

class BusinessRepository implements IBusinessRepository {
  async findAll(): Promise<BusinessModel[]> {
    const businessCollection = await MongoHelper.getCollection("business");
    const business = await businessCollection.find().toArray();
    return business;
  }
  async findById(id: string): Promise<BusinessModel> {
    const businessCollection = await MongoHelper.getCollection("business");
    const business = await businessCollection.findOne({ id });
    return business;
  }
  async findByCode(code: number): Promise<BusinessModel> {
    const businessCollection = await MongoHelper.getCollection("business");
    const business = await businessCollection.findOne({ code });
    return business;
  }
  async create(data: CreateBusinessParams[]): Promise<BusinessModel[]> {
    const businessCollection = await MongoHelper.getCollection("business");
    const result = await businessCollection.insertMany(data);
    const [business] = result.ops;
    return MongoHelper.map<BusinessModel[]>(business);
  }
}

export { BusinessRepository };
