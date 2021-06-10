import {
  ICreateDailyEarning,
  ICreateOrUpdateDailyEarnings,
} from "@/domain/useCases/CreateDailyEarning";

import { DailyEarningsModel } from "../../../domain/models/DailyEarnings";

export default interface IDailyEarningsRepository {
  findAll(): Promise<DailyEarningsModel[] | undefined>;
  findById(id: string): Promise<DailyEarningsModel | undefined>;
  findByDate(date: Date): Promise<DailyEarningsModel | undefined>;
  create(data: ICreateDailyEarning[]): Promise<DailyEarningsModel[]>;
  createOrUpdate(data: ICreateOrUpdateDailyEarnings): Promise<void>;
}
