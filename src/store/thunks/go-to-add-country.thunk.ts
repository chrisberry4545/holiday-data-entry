import { ThunkAction } from 'redux-thunk';

import { push } from 'react-router-redux';

import * as uuidv4 from 'uuid/v4';

import {
  ActionCreator,
  Dispatch,
} from 'redux';

import {
  Action,
  addNewCountryLocally,
} from './../../store/';

import {
  StateInterface,
  URLS,
} from './../../models';

export const goToAddCountryThunk: ActionCreator<
ThunkAction<Promise<Action>, StateInterface, void>
> = (
  holidayId: string,
) => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Promise<Action> => {
    const id = uuidv4();
    dispatch(addNewCountryLocally(id));
    return dispatch(push(`${URLS.COUNTRIES_CREATE}/${id}`));
  };
};
