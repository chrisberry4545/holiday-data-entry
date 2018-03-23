import {
  Action,
} from './';

import {
  AllDataInterface,
} from './../../models';

export interface SetDataAction extends Action {
  data: AllDataInterface;
}
export const SET_DATA = 'SET_DATA';
export function setData(
  data: AllDataInterface,
): SetDataAction {
  return {
    data,
    type: SET_DATA,
  };
}

export const PRINT_HOLIDAY_DATA = 'PRINT_DATA';
export function printHolidayData(): Action {
  return {
    type: PRINT_HOLIDAY_DATA,
  };
}
