import { ThunkAction } from 'redux-thunk';

import { push } from 'react-router-redux';

import {
  ActionCreator,
  Dispatch,
} from 'redux';

import {
  Action,
  selectHolidayWithId,
} from './../../store/';

import {
  StateInterface,
  URLS,
} from './../../models';

import {
  RetrieveDataService,
} from './../../services';

export const addNewHolidayThunk: ActionCreator<
ThunkAction<Promise<Action>, StateInterface, void>
> = (
  holidayId: string,
) => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Promise<Action> => {
    const holidayToSave = selectHolidayWithId(holidayId)(getState());
    const retrieveDataService = new RetrieveDataService();
    return retrieveDataService.createNewHoliday(holidayToSave).then(() => {
      return dispatch(push(`/${URLS.HOLIDAYS_LIST}`));
    });
  };
};
