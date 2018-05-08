import { ThunkAction } from 'redux-thunk';

import { push } from 'react-router-redux';

import {
  ActionCreator,
  Dispatch,
} from 'redux';

import {
  Action,
  selectScoreState,
  setHolidayResults,
  setHolidayResultsIsLoading,
} from './../../store/';

import {
  StateInterface,
} from './../../models';

import {
  RetrieveDataService,
} from './../../services';

export const updateScoresThunk: ActionCreator<
ThunkAction<Promise<Action>, StateInterface, void>
> = (
  holidayId: string,
) => {
  return (
    dispatch: Dispatch<StateInterface>, getState,
  ): Promise<Action> => {
    const retrieveDataService = new RetrieveDataService();
    const userInput = selectScoreState(getState());
    dispatch(setHolidayResultsIsLoading());
    return retrieveDataService.getHolidayResults(userInput).then((results) => {
      return dispatch(setHolidayResults(results));
    });
  };
};
