import { ThunkAction } from 'redux-thunk';

import { push } from 'react-router-redux';

import {
  ActionCreator,
  Dispatch,
} from 'redux';

import {
  Action,
} from './../../store/';

import {
  StateInterface,
  URLS,
} from './../../models';

import {
  RetrieveDataService,
} from './../../services';

export const addNewCountryThunk: ActionCreator<
ThunkAction<Promise<Action>, StateInterface, void>
> = (
  countryId: string,
) => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Promise<Action> => {
    const countryToSave =
      getState().main.data.countries
      .find((country) => country._id === countryId);
    const retrieveDataService = new RetrieveDataService();
    return retrieveDataService.createNewCountry(countryToSave).then(() => {
      return dispatch(push(`/${URLS.COUNTRIES_LIST}`));
    });
  };
};
