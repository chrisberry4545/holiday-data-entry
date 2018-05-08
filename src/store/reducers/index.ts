import { combineReducers } from 'redux';

import {
  MainStateInterface,
} from './../../models';

import {
  dataReducer,
} from './data.reducer';

import {
  holidayResultsReducer,
} from './holiday-results.reducer';

import {
  scoreSelectionReducer,
} from './score-selection.reducer';

export const reducer = combineReducers<MainStateInterface>({
  data: dataReducer,
  holidayResults: holidayResultsReducer,
  scoreSelection: scoreSelectionReducer,
});
