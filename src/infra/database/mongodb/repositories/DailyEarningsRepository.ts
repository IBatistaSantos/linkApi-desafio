import { IPaginatedDailyEarnings } from "@/data/protocols/dailyEarning/pagination/IPaginatedDailyEarnings";
import IPagination from "@/data/protocols/dailyEarning/pagination/IPagination";

import {
  ICreateDailyEarning,
  ICreateOrUpdateDailyEarning,
} from "../../../../data/protocols/dailyEarning/CreateDailyEarning";
import IDailyEarningsRepository from "../../../../data/protocols/db/IDailyEarningsRepository";
import { DailyEarningsModel } from "../../../../domain/models/DailyEarnings";
import { map, mapCollection } from "../helpers/mongoHelper";
import { DailyEarnings } from "../schemas/DailyEarnings";

class DailyEarningsRepository implements IDailyEarningsRepository {
  async findAllPaginated({
    limit = 10,
    page = 1,
  }: IPagination): Promise<IPaginatedDailyEarnings> {
    const skip = (page - 1) * limit;
    const dailyEarnings = await DailyEarnings.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
    const totalCount = await DailyEarnings.find().countDocuments();

    return {
      page,
      limit,
      totalCount,
      data: mapCollection<DailyEarningsModel>(dailyEarnings),
    };
  }

  async findAll(): Promise<DailyEarningsModel[]> {
    const dailyEarnings = await DailyEarnings.find();

    return dailyEarnings
      ? mapCollection<DailyEarningsModel>(dailyEarnings)
      : null;
  }

  async findById(id: string): Promise<DailyEarningsModel> {
    const dailyEarnings = await DailyEarnings.findById(id);
    return dailyEarnings ? map<DailyEarningsModel>(dailyEarnings) : null;
  }
  async findByDate(date: Date): Promise<DailyEarningsModel> {
    const dailyEarnings = await DailyEarnings.findOne({ date });
    return dailyEarnings ? map<DailyEarningsModel>(dailyEarnings) : null;
  }
  async create(data: ICreateDailyEarning[]): Promise<DailyEarningsModel[]> {
    const dailyEarnings = await DailyEarnings.insertMany(data);
    return mapCollection<DailyEarningsModel>(dailyEarnings);
  }
  async createOrUpdate({
    id,
    total,
    day,
  }: ICreateOrUpdateDailyEarning): Promise<void> {
    if (id !== undefined) {
      await DailyEarnings.findByIdAndUpdate(id, {
        total,
        day,
      });
    } else {
      await DailyEarnings.create({ total, day });
    }
  }
}
export { DailyEarningsRepository };
