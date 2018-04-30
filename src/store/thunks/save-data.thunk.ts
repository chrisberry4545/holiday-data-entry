import { ThunkAction } from 'redux-thunk';

import { push } from 'react-router-redux';

import {
  ActionCreator,
  Dispatch,
} from 'redux';

import {
  Action,
  selectCountryWithId,
  selectHolidayWithId,
} from './../../store/';

import {
  StateInterface,
  URLS,
} from './../../models';

import {
  RetrieveDataService,
} from './../../services';

export const saveHolidayDataThunk: ActionCreator<
ThunkAction<Promise<Action>, StateInterface, void>
> = (
  holidayId: string,
) => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Promise<Action> => {
    const retrieveDataService = new RetrieveDataService();
    const holidayToSave = selectHolidayWithId(holidayId)(getState());
    return retrieveDataService.saveHolidayData(holidayToSave).then(() => {
      return dispatch(push(`/${URLS.HOLIDAYS_LIST}`));
    });
  };
};

export const saveCountryDataThunk: ActionCreator<
ThunkAction<Promise<Action>, StateInterface, void>
> = (
  countryId: string,
) => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Promise<Action> => {
    const retrieveDataService = new RetrieveDataService();
    const countryToSave = selectCountryWithId(countryId)(getState());
    return retrieveDataService.saveCountryData(countryToSave).then(() => {
      return dispatch(push(`/${URLS.COUNTRIES_LIST}`));
    });
  };
};
