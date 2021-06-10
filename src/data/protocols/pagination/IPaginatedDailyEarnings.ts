import { DailyEarningsModel } from "../../../domain/models/DailyEarnings";

export default interface IPaginatedDailyDTO {
  data: DailyEarningsModel[];
  page: number;
  limit: number;
  totalCount: number;
}
