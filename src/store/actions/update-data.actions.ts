import {
  ActivityCategoryInterface,
  HolidayHighlightInterface,
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  Action,
} from './';

import {
  AllDataInterface,
} from './../../models';

export interface UpdateHolidayDataAction extends Action {
  holidayId: string;
  newData: HolidayInterface;
}
export const UPDATE_HOLIDAY_DATA = 'UPDATE_HOLIDAY_DATA';
export function updateHolidayData(
  holidayId: string,
  newData: HolidayInterface,
): UpdateHolidayDataAction {
  return {
    holidayId,
    newData,
    type: UPDATE_HOLIDAY_DATA,
  };
}

export interface UpdateHolidayCountryAction extends Action {
  holidayId: string;
  newCountryId: string;
}
export const UPDATE_HOLIDAY_COUNTRY = 'UPDATE_HOLIDAY_COUNTRY';
export function updateHolidayCountry(
  holidayId: string,
  newCountryId: string,
): UpdateHolidayCountryAction {
  return {
    holidayId,
    newCountryId,
    type: UPDATE_HOLIDAY_COUNTRY,
  };
}

export interface UpdateHolidayFlightAction extends Action {
  holidayId: string;
  newFlightTimeId: string;
}
export const UPDATE_HOLIDAY_FLIGHT_TIME = 'UPDATE_HOLIDAY_FLIGHT_TIME';
export function updateHolidayFlightTime(
  holidayId: string,
  newFlightTimeId: string,
): UpdateHolidayFlightAction {
  return {
    holidayId,
    newFlightTimeId,
    type: UPDATE_HOLIDAY_FLIGHT_TIME,
  };
}

export interface AddBlankHolidayActivityAction extends Action {
  holidayId: string;
}
export const ADD_BLANK_HOLIDAY_ACTIVITY = 'ADD_BLANK_HOLIDAY_ACTIVITY';
export function addBlankHolidayActivity(
  holidayId: string,
): AddBlankHolidayActivityAction {
  return {
    holidayId,
    type: ADD_BLANK_HOLIDAY_ACTIVITY,
  };
}

export interface AddBlankHolidayHighlightAction extends Action {
  holidayId: string;
}
export const ADD_BLANK_HOLIDAY_HIGHLIGHT = 'ADD_BLANK_HOLIDAY_HIGHLIGHT';
export function addBlankHolidayHighlight(
  holidayId: string,
): AddBlankHolidayHighlightAction {
  return {
    holidayId,
    type: ADD_BLANK_HOLIDAY_HIGHLIGHT,
  };
}

export interface UpdateHolidayActivityAction extends Action {
  holidayId: string;
  activityIndex: number;
  newActivityId: string;
}
export const UPDATE_HOLIDAY_ACTIVITY = 'UPDATE_HOLIDAY_ACTIVITY';
export function updateHolidayActivity(
  holidayId: string,
  activityIndex: number,
  newActivityId: string,
): UpdateHolidayActivityAction {
  return {
    activityIndex,
    holidayId,
    newActivityId,
    type: UPDATE_HOLIDAY_ACTIVITY,
  };
}

export interface UpdateHolidayHighlightAction extends Action {
  holidayId: string;
  highlightId: string;
  newHighlightData: HolidayHighlightInterface;
}
export const UPDATE_HOLIDAY_HIGHLIGHT = 'UPDATE_HOLIDAY_HIGHLIGHT';
export function updateHolidayHighlight(
  holidayId: string,
  highlightId: string,
  newHighlightData: HolidayHighlightInterface,
): UpdateHolidayHighlightAction {
  return {
    highlightId,
    holidayId,
    newHighlightData,
    type: UPDATE_HOLIDAY_HIGHLIGHT,
  };
}

export interface AddNewHolidayLocallyAction extends Action {
  holidayId: string;
}
export const ADD_NEW_HOLIDAY_LOCALLY = 'ADD_NEW_HOLIDAY_LOCALLY';
export function addNewHolidayLocally(
  holidayId: string,
): AddNewHolidayLocallyAction {
  return {
    holidayId,
    type: ADD_NEW_HOLIDAY_LOCALLY,
  };
}

export interface AddNewCountryLocallyAction extends Action {
  countryId: string;
}
export const ADD_NEW_COUNTRY_LOCALLY = 'ADD_NEW_COUNTRY_LOCALLY';
export function addNewCountryLocally(
  countryId: string,
): AddNewCountryLocallyAction {
  return {
    countryId,
    type: ADD_NEW_COUNTRY_LOCALLY,
  };
}
