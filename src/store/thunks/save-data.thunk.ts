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

export const saveHolidayDataThunk: ActionCreator<
ThunkAction<Promise<Action>, StateInterface, void>
> = (
  holidayId: string,
) => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Promise<Action> => {
    const retrieveDataService = new RetrieveDataService();
    const holidayToSave = getState().main.data
      .holidays.find((holiday) => holiday._id === holidayId);
    return retrieveDataService.saveHolidayData(holidayToSave).then(() => {
      return dispatch(push(`/${URLS.HOLIDAYS_LIST}`));
    });
  };
};
