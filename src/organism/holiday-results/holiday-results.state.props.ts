import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface HolidayResultsStateProps {
  isLoading: boolean;
  results: HolidayInterface[];
}
