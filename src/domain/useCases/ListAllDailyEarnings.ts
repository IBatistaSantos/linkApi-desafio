import { IPaginatedDailyEarnings } from "../../data/protocols/dailyEarning/pagination/IPaginatedDailyEarnings";
import IPagination from "../../data/protocols/dailyEarning/pagination/IPagination";

interface IListAllDailyEarnings {
  listAll({ limit, page }: IPagination): Promise<IPaginatedDailyEarnings>;
}
export { IListAllDailyEarnings };
