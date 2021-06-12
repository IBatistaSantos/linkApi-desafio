interface ICreateDailyEarning {
  total: number;
  day: Date;
}

interface ITotalPerDay {
  day: Date;
  total: number;
}
interface IObjectTotalPerDayToSave {
  [key: string]: ITotalPerDay;
}

interface ICreateOrUpdateDailyEarning {
  id?: string;
  total: number;
  day: Date;
}

export {
  ICreateDailyEarning,
  IObjectTotalPerDayToSave,
  ICreateOrUpdateDailyEarning,
};
