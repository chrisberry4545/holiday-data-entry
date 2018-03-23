import { combineReducers } from 'redux';

import {
  MainStateInterface,
} from './../../models';

import {
  dataReducer,
} from './data.reducer';

export const reducer = combineReducers<MainStateInterface>({
  data: dataReducer,
});
