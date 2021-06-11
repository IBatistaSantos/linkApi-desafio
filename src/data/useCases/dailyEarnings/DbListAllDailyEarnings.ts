import { IListAllDailyEarnings } from "../../../domain/useCases/ListAllDailyEarnings";
import { IPaginatedDailyEarnings } from "../../protocols/dailyEarning/pagination/IPaginatedDailyEarnings";
import IPagination from "../../protocols/dailyEarning/pagination/IPagination";
import IDailyEarningsRepository from "../../protocols/db/IDailyEarningsRepository";

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
