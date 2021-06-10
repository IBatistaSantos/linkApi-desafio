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
interface ICreateOrUpdateDailyEarnings {
  objectTotalPerDayToSave: IObjectTotalPerDayToSave;
  objectTotalPerDaySaved: IObjectTotalPerDayToSave;
}

export {
  ICreateDailyEarning,
  IObjectTotalPerDayToSave,
  ICreateOrUpdateDailyEarnings,
};
