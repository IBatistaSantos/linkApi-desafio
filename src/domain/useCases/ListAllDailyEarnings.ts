import { IPaginatedDailyEarnings } from "@/data/protocols/pagination/IPaginatedDailyEarnings";
import IPagination from "@/data/protocols/pagination/IPagination";

interface IListAllDailyEarnings {
  listAll({ limit, page }: IPagination): Promise<IPaginatedDailyEarnings>;
}
export { IListAllDailyEarnings };
