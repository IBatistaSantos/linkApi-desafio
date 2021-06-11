import IDailyEarningsRepository from "@/data/protocols/db/IDailyEarningsRepository";
import { IPaginatedDailyEarnings } from "@/data/protocols/pagination/IPaginatedDailyEarnings";
import IPagination from "@/data/protocols/pagination/IPagination";

import { IListAllDailyEarnings } from "../../../domain/useCases/ListAllDailyEarnings";

class DbListAllDailyEarnings implements IListAllDailyEarnings {
  constructor(
    private readonly dailyEarningsRepository: IDailyEarningsRepository
  ) {}
  async listAll({
    page,
    limit,
  }: IPagination): Promise<IPaginatedDailyEarnings> {
    const dailyEarnings = await this.dailyEarningsRepository.findAllPaginated({
      page,
      limit,
    });
    return dailyEarnings;
  }
}

export { DbListAllDailyEarnings };
