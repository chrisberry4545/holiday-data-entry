import {
  Action,
} from './';

import {
  CountryInterface,
} from '@chrisb-dev/holiday-shared-models';

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

export interface UpdateCountryDataAction extends Action {
  countryId: string;
  newData: CountryInterface;
}
export const UPDATE_COUNTRY_DATA = 'UPDATE_COUNTRY_DATA';
export function updateCountryData(
  countryId: string,
  newData: CountryInterface,
): UpdateCountryDataAction {
  return {
    countryId,
    newData,
    type: UPDATE_COUNTRY_DATA,
  };
}

export interface UpdateCountryContinentAction extends Action {
  countryId: string;
  newContinentId: string;
}
export const UPDATE_COUNTRY_CONTINENT = 'UPDATE_COUNTRY_CONTINENT';
export function updateCountryContinent(
  countryId: string,
  newContinentId: string,
): UpdateCountryContinentAction {
  return {
    countryId,
    newContinentId,
    type: UPDATE_COUNTRY_CONTINENT,
  };
}

export interface UpdateCountryTemperature extends Action {
  countryId: string;
  temperatureMonthIndex: number;
  newTemperatureId: string;
}
export const UPDATE_COUNTRY_TEMPERATURE = 'UPDATE_COUNTRY_TEMPERATURE';
export function updateCountryTemperature(
  countryId: string,
  temperatureMonthIndex: number,
  newTemperatureId: string,
): UpdateCountryTemperature {
  return {
    countryId,
    newTemperatureId,
    temperatureMonthIndex,
    type: UPDATE_COUNTRY_TEMPERATURE,
  };
}

export interface UpdateCountryLat extends Action {
  countryId: string;
  newLat: string;
}
export const UPDATE_COUNTRY_LAT = 'UPDATE_COUNTRY_LAT';
export function updateCountryLat(
  countryId: string,
  newLat: string,
): UpdateCountryLat {
  return {
    countryId,
    newLat,
    type: UPDATE_COUNTRY_LAT,
  };
}

export interface UpdateCountryLng extends Action {
  countryId: string;
  newLng: string;
}
export const UPDATE_COUNTRY_LNG = 'UPDATE_COUNTRY_LNG';
export function updateCountryLng(
  countryId: string,
  newLng: string,
): UpdateCountryLng {
  return {
    countryId,
    newLng,
    type: UPDATE_COUNTRY_LNG,
  };
}
