import { DbCreateBusiness } from "../../../data/useCases/business/DbCreateBusiness";
import { DbListAllBusiness } from "../../../data/useCases/business/DbListAllBusiness";
import { BusinessRepository } from "../../../infra/database/mongodb/repositories/BusinessRepository";
import { DailyEarningsRepository } from "../../../infra/database/mongodb/repositories/DailyEarningsRepository";
import BlingProvider from "../../../infra/provider/BlingProvider";
import PipedriveProvider from "../../../infra/provider/PipedriveProvider";
import { CreateBusinessController } from "../../../presentation/controller/CreateBusinessController";
import { ListAllBusinessController } from "../../../presentation/controller/ListAllBusinessController";

export const makeCreateBusinessUseCase = (): DbCreateBusiness => {
  const business = new BusinessRepository();
  const pipedriveProvider = new PipedriveProvider();
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
export const makeListAllBusinessUseCase = (): DbListAllBusiness => {
  const businessRepository = new BusinessRepository();
  const listAllBusiness = new DbListAllBusiness(businessRepository);
  return listAllBusiness;
};
export const makeListAllBusinessController = (): ListAllBusinessController => {
  const listAllBusinessController = new ListAllBusinessController(
    makeListAllBusinessUseCase()
  );
  return listAllBusinessController;
};

export const makeCreateBusinessController = (): CreateBusinessController => {
  const createPodcastController = new CreateBusinessController(
    makeCreateBusinessUseCase()
  );

  return createPodcastController;
};
