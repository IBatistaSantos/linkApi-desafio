import IDailyEarningsRepository from "../../../../data/protocols/db/IDailyEarningsRepository";
import { DailyEarningsModel } from "../../../../domain/models/DailyEarnings";
import {
  ICreateDailyEarning,
  ICreateOrUpdateDailyEarnings,
} from "../../../../domain/useCases/CreateDailyEarning";
import { formatDate } from "../../../../main/app/utils/helpers/formatDate";
import { map, mapCollection } from "../helpers/mongoHelper";
import { DailyEarnings } from "../schemas/DailyEarnings";

class DailyEarningsRepository implements IDailyEarningsRepository {
  async findAll(): Promise<DailyEarningsModel[]> {
    const dailyEarnings = await DailyEarnings.find();
    return mapCollection<DailyEarningsModel>(dailyEarnings);
  }

  async findById(id: string): Promise<DailyEarningsModel> {
    const dailyEarnings = await DailyEarnings.findById(id);
    return dailyEarnings ? map<DailyEarningsModel>(dailyEarnings) : undefined;
  }
  async findByDate(date: Date): Promise<DailyEarningsModel> {
    const dailyEarnings = await DailyEarnings.findOne({ date });
    return dailyEarnings ? map<DailyEarningsModel>(dailyEarnings) : undefined;
  }
  async create(data: ICreateDailyEarning[]): Promise<DailyEarningsModel[]> {
    const dailyEarnings = await DailyEarnings.insertMany(data);
    return mapCollection<DailyEarningsModel>(dailyEarnings);
  }
  async createOrUpdate({
    objectTotalPerDaySaved,
    objectTotalPerDayToSave,
  }: ICreateOrUpdateDailyEarnings): Promise<void> {
    const totalPerDayCreated = Object.keys(objectTotalPerDayToSave).map(
      (key) => {
        const newTotalPerDay = DailyEarnings.create({
          day: objectTotalPerDayToSave[key].day,
          total: objectTotalPerDayToSave[key].total,
        });

        return map<DailyEarningsModel>(newTotalPerDay);
      }
    );

    const promiseFindSaved = Object.keys(objectTotalPerDaySaved).map((key) => {
      const day = formatDate(objectTotalPerDaySaved[key].day);
      return DailyEarnings.findOne({ day });
    });

    const promiseResolved = await Promise.all(promiseFindSaved).then(() => {
      return mapCollection<DailyEarningsModel>(promiseFindSaved);
    });

    const days = Object.keys(objectTotalPerDaySaved);
    promiseResolved.forEach((daily) => {
      if (daily && days.includes(String(daily.day))) {
        const findDaily = promiseResolved.find((p) => p.day === daily.day);
        if (findDaily) {
          totalPerDayCreated.push({
            ...findDaily,
            total: daily.total,
          });
        }
      }
    });

    await Promise.all(totalPerDayCreated.map((t) => DailyEarnings.create(t)));
  }
}

export { DailyEarningsRepository };
