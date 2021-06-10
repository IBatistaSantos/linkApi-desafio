import IDailyEarningsRepository from "../../../../data/protocols/db/IDailyEarningsRepository";
import { DailyEarningsModel } from "../../../../domain/models/DailyEarnings";
import {
  ICreateDailyEarning,
  ICreateOrUpdateDailyEarnings,
} from "../../../../domain/useCases/CreateDailyEarning";
import { formatDate } from "../../../../main/utils/helpers/formatDate";
import { MongoHelper } from "../helpers/mongoHelper";

class DailyEarningsRepository implements IDailyEarningsRepository {
  async findAll(): Promise<DailyEarningsModel[]> {
    const dailyEarningsCollection = await MongoHelper.getCollection(
      "dailyEarnings"
    );
    const dailyEarnings = await dailyEarningsCollection.find().toArray();
    return dailyEarnings;
  }

  async findById(id: string): Promise<DailyEarningsModel> {
    const dailyEarningsCollection = await MongoHelper.getCollection(
      "dailyEarnings"
    );
    const dailyEarnings = await dailyEarningsCollection.findOne({ id });
    return dailyEarnings;
  }
  async findByDate(date: Date): Promise<DailyEarningsModel> {
    const dailyEarningsCollection = await MongoHelper.getCollection(
      "dailyEarnings"
    );
    const dailyEarnings = await dailyEarningsCollection.findOne({ date });
    return dailyEarnings;
  }
  async create(data: ICreateDailyEarning[]): Promise<DailyEarningsModel[]> {
    const dailyEarningsCollection = await MongoHelper.getCollection(
      "dailyEarnings"
    );
    const result = await dailyEarningsCollection.insertMany(data);
    const [dailyEarnings] = result.ops;
    return MongoHelper.map<DailyEarningsModel[]>(dailyEarnings);
  }
  async createOrUpdate({
    objectTotalPerDaySaved,
    objectTotalPerDayToSave,
  }: ICreateOrUpdateDailyEarnings): Promise<void> {
    const dailyEarningsCollection = await MongoHelper.getCollection(
      "dailyEarnings"
    );

    const totalPerDayCreated = Object.keys(objectTotalPerDayToSave).map(
      (key) => {
        const newTotalPerDay = dailyEarningsCollection.insert({
          day: objectTotalPerDayToSave[key].day,
          total: objectTotalPerDayToSave[key].total,
        });

        return newTotalPerDay;
      }
    );

    const promiseFindSaved = Object.keys(objectTotalPerDaySaved).map((key) => {
      const day = formatDate(objectTotalPerDaySaved[key].day);
      return dailyEarningsCollection.findOne({ day });
    });

    const promiseResolved = await Promise.all(promiseFindSaved);
    const days = Object.keys(objectTotalPerDaySaved);
    promiseResolved.forEach((daily) => {
      if (daily && days.includes(String(daily.day))) {
        const findDaily = promiseResolved.find((p) => p?.day === daily.day);
        if (findDaily) {
          totalPerDayCreated.push({
            ...findDaily,
            total: daily.total,
          });
        }
      }
    });

    await Promise.all(
      totalPerDayCreated.map((t) => dailyEarningsCollection.insert(t))
    );
  }
}

export { DailyEarningsRepository };
