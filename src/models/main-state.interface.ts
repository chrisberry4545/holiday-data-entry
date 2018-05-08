import {
  HolidayInterface,
  UserInputInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  AllDataInterface,
  HolidayResultsStateInterface,
} from './';

export interface MainStateInterface {
  data: AllDataInterface;
  holidayResults: HolidayResultsStateInterface;
  scoreSelection: UserInputInterface;
}
