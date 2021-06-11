import { DailyEarningsModel } from "../../../domain/models/DailyEarnings";

interface IPaginatedDailyEarnings {
  data: DailyEarningsModel[];
  page: number;
  limit: number;
  totalCount: number;
}

export { IPaginatedDailyEarnings };
