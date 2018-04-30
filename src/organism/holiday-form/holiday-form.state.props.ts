import {
  ActivityCategoryInterface,
  CountryInterface,
  FlightTimesInterface,
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface HolidayFormStateProps {
  allActivities: ActivityCategoryInterface[];
  allCountries: CountryInterface[];
  allFlights: FlightTimesInterface[];
  holiday: HolidayInterface;
}
