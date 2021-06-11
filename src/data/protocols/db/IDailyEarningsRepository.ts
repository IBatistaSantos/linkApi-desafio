import {
  ICreateDailyEarning,
  ICreateOrUpdateDailyEarnings,
} from "@/domain/useCases/CreateDailyEarning";

import { DailyEarningsModel } from "../../../domain/models/DailyEarnings";
import { IPaginatedDailyEarnings } from "../pagination/IPaginatedDailyEarnings";
import IPagination from "../pagination/IPagination";

export default interface IDailyEarningsRepository {
  findAll(): Promise<DailyEarningsModel[] | undefined>;
  findById(id: string): Promise<DailyEarningsModel | undefined>;
  findByDate(date: Date): Promise<DailyEarningsModel | undefined>;
  findAllPaginated({
    limit,
    page,
  }: IPagination): Promise<IPaginatedDailyEarnings>;
  create(data: ICreateDailyEarning[]): Promise<DailyEarningsModel[]>;
  createOrUpdate(data: ICreateOrUpdateDailyEarnings): Promise<void>;
}
