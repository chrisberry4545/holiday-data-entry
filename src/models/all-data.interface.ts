import {
  ActivityCategoryInterface,
  ContinentInterface,
  CostRangeInterface,
  CountryInterface,
  FlightTimesInterface,
  FoodImportanceInterface,
  HolidayInterface,
  TemperatureInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface AllDataInterface {
  activityCategories: ActivityCategoryInterface[];
  continents: ContinentInterface[];
  costRanges: CostRangeInterface[];
  countries: CountryInterface[];
  flightTimes: FlightTimesInterface[];
  foodImportance: FoodImportanceInterface[];
  holidays: HolidayInterface[];
  temperature: TemperatureInterface[];
}
