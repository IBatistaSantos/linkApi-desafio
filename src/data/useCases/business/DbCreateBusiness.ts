import {
  CreateBusinessParams,
  ICreateBusiness,
} from "../../../domain/useCases/CreateBusiness";
import { IObjectTotalPerDayToSave } from "../../../domain/useCases/CreateDailyEarning";
import { formatDate } from "../../../main/app/utils/helpers/formatDate";
import IBusinessRepository from "../../protocols/db/IBusinessRepository";
import IDailyEarningsRepository from "../../protocols/db/IDailyEarningsRepository";
import IBlingProvider from "../../protocols/provider/IBlingProvider";
import IPipedriveProvider from "../../protocols/provider/IPipedriveProvider";

class DbCreateBusiness implements ICreateBusiness {
  constructor(
    private readonly pipedrive: IPipedriveProvider,
    private readonly businessRepository: IBusinessRepository,
    private readonly blingProvider: IBlingProvider,
    private readonly dailyEarningsRepository: IDailyEarningsRepository
  ) {}
  async create(): Promise<void> {
    const objectTotalPerDayToSave: IObjectTotalPerDayToSave = {};
    const objectTotalPerDaySaved: IObjectTotalPerDayToSave = {};
    const { saved, toSave } = await this.pipedrive.listAll();

    toSave.forEach((deal) => {
      const day = formatDate(new Date(deal.add_time));
      if (Object.keys(objectTotalPerDayToSave).includes(String(day))) {
        objectTotalPerDayToSave[`${day}`] = {
          day,
          total: objectTotalPerDayToSave[`${day}`].total + deal.value,
        };
      } else {
        objectTotalPerDayToSave[`${day}`] = {
          day,
          total: deal.value,
        };
      }
    });

    saved.forEach((deal) => {
      const day = formatDate(new Date(deal.add_time));
      if (Object.keys(objectTotalPerDayToSave).includes(String(day))) {
        objectTotalPerDaySaved[`${day}`] = {
          day,
          total:
            objectTotalPerDaySaved[`${day}`].total +
            objectTotalPerDayToSave[`${day}`].total,
        };

        delete objectTotalPerDayToSave[`${day}`];
      } else if (Object.keys(objectTotalPerDaySaved).includes(String(day))) {
        objectTotalPerDaySaved[`${day}`] = {
          day,
          total: objectTotalPerDaySaved[`${day}`].total + deal.value,
        };
      } else {
        objectTotalPerDaySaved[`${day}`] = {
          day,
          total: deal.value,
        };
      }
    });

    const serealizedDeals = toSave.map((deal) => {
      return {
        add_time: deal.add_time,
        client_email: deal.person_id.email[0].value,
        client_name: deal.person_id.name,
        client_phone: deal.person_id.phone[0].value,
        code: deal.id,
        creator_email: deal.creator_user_id.email,
        creator_name: deal.creator_user_id.name,
        creator_user_id: String(deal.creator_user_id.id),
        currency: deal.currency,
        status: deal.status,
        title: deal.title,
        value: deal.value,
      } as CreateBusinessParams;
    });

    await this.dailyEarningsRepository.createOrUpdate({
      objectTotalPerDayToSave,
      objectTotalPerDaySaved,
    });

    await this.businessRepository.create(serealizedDeals);

    await this.blingProvider.createBusiness(serealizedDeals);
  }
}

export { DbCreateBusiness };
