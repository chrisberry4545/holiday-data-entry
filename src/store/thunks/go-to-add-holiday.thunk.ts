import { ThunkAction } from 'redux-thunk';

import { push } from 'react-router-redux';

import * as uuidv4 from 'uuid/v4';

import {
  ActionCreator,
  Dispatch,
} from 'redux';

import {
  Action,
  addNewHolidayLocally,
} from './../../store/';

import {
  StateInterface,
  URLS,
} from './../../models';

export const goToAddHolidayThunk: ActionCreator<
ThunkAction<Promise<Action>, StateInterface, void>
> = (
  holidayId: string,
) => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Promise<Action> => {
    const id = uuidv4();
    dispatch(addNewHolidayLocally(id));
    return dispatch(push(`${URLS.HOLIDAYS_CREATE}/${id}`));
  };
};
