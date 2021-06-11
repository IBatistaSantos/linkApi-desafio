import { DbCreateBusiness } from "../../../data/useCases/business/DbCreateBusiness";
import { BusinessRepository } from "../../../infra/database/mongodb/repositories/BusinessRepository";
import { DailyEarningsRepository } from "../../../infra/database/mongodb/repositories/DailyEarningsRepository";
import BlingProvider from "../../../infra/provider/BlingProvider";
import PipedriveProvider from "../../../infra/provider/PipedriveProvider";
import { CreateBusinessController } from "../../../presentation/controller/CreateBusinessController";

export const makeCreateBusinessUseCase = (): DbCreateBusiness => {
  const business = new BusinessRepository();
  const pipedriveProvider = new PipedriveProvider(business);
  const blingProvider = new BlingProvider();
  const dailyEarningsRepository = new DailyEarningsRepository();

  const createBusinessUseCase = new DbCreateBusiness(
    pipedriveProvider,
    business,
    blingProvider,
    dailyEarningsRepository
  );

  return createBusinessUseCase;
};

export const makeCreateBusinessController = (): CreateBusinessController => {
  const createPodcastController = new CreateBusinessController(
    makeCreateBusinessUseCase()
  );

  return createPodcastController;
};
