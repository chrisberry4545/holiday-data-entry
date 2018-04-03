import { ThunkAction } from 'redux-thunk';

import {
  ActionCreator,
  Dispatch,
} from 'redux';

import {
  Action,
} from './../../store/';

import {
  StateInterface,
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
    const retrieveDataService = new RetrieveDataService();
    return retrieveDataService.createNewHoliday();
  };
};
