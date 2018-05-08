import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface HolidayResultsStateInterface {
  isLoading: boolean;
  results: HolidayInterface[];
}
