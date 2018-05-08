import {
  Action,
} from './';

import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface SetHolidayResultsAction extends Action {
  results: HolidayInterface[];
}
export const SET_HOLIDAY_RESULTS = 'SET_HOLIDAY_RESULTS';
export function setHolidayResults(
  results: HolidayInterface[],
): SetHolidayResultsAction {
  return {
    results,
    type: SET_HOLIDAY_RESULTS,
  };
}

export const SET_HOLIDAY_RESULTS_IS_LOADING = 'SET_HOLIDAY_RESULTS_IS_LOADING';
export function setHolidayResultsIsLoading(): Action {
  return {
    type: SET_HOLIDAY_RESULTS_IS_LOADING,
  };
}
