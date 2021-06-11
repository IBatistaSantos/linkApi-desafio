import { DbListAllDailyEarnings } from "../../../data/useCases/dailyEarnings/DbListAllDailyEarnings";
import { DailyEarningsRepository } from "../../../infra/database/mongodb/repositories/DailyEarningsRepository";
import { ListAllDailyEarningsController } from "../../../presentation/controller/ListAllDailyEarnings";

export const makeListAllDailyEarningsUseCase = (): DbListAllDailyEarnings => {
  const dailyEarningsRepository = new DailyEarningsRepository();

  const listAllDailyEarningsUseCase = new DbListAllDailyEarnings(
    dailyEarningsRepository
  );

  return listAllDailyEarningsUseCase;
};

export const makeListAllDailyEarningsController =
  (): ListAllDailyEarningsController => {
    const createPodcastController = new ListAllDailyEarningsController(
      makeListAllDailyEarningsUseCase()
    );

    return createPodcastController;
  };
