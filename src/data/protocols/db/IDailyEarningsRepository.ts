import {
  ICreateDailyEarning,
  ICreateOrUpdateDailyEarning,
} from "@/data/protocols/dailyEarning/CreateDailyEarning";

import { DailyEarningsModel } from "../../../domain/models/DailyEarnings";
import { IPaginatedDailyEarnings } from "../dailyEarning/pagination/IPaginatedDailyEarnings";
import IPagination from "../dailyEarning/pagination/IPagination";

export default interface IDailyEarningsRepository {
  findAll(): Promise<DailyEarningsModel[] | undefined>;
  findById(id: string): Promise<DailyEarningsModel | undefined>;
  findByDate(date: Date): Promise<DailyEarningsModel | undefined>;
  findAllPaginated({
    limit,
    page,
  }: IPagination): Promise<IPaginatedDailyEarnings>;
  create(data: ICreateDailyEarning[]): Promise<DailyEarningsModel[]>;
  createOrUpdate({
    id,
    day,
    total,
  }: ICreateOrUpdateDailyEarning): Promise<void>;
}
