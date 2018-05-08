import { Action } from './../actions';

import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  SET_HOLIDAY_RESULTS,
  SET_HOLIDAY_RESULTS_IS_LOADING,
  SetHolidayResultsAction,
} from './../';

import {
  HolidayResultsStateInterface,
} from './../../models';

const getDefaultState = (): HolidayResultsStateInterface => {
  return {
    isLoading: false,
    results: [],
  };
};

export function holidayResultsReducer(
  state = getDefaultState(),
  action: Action,
): HolidayResultsStateInterface {
  switch (action.type) {
    case SET_HOLIDAY_RESULTS:
      return {
        ...state,
        isLoading: false,
        results: (action as SetHolidayResultsAction).results,
      };
    case SET_HOLIDAY_RESULTS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
