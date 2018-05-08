import {
  selectMainState,
} from './main.selectors';

import { createSelector } from 'reselect';

export const selectHolidayResults = createSelector(
  selectMainState,
  (state) => state.holidayResults,
);

export const selectHolidayResultsList = createSelector(
  selectHolidayResults,
  (holidayResults) => holidayResults.results,
);

export const selectHolidayResultIsLoading = createSelector(
  selectHolidayResults,
  (holidayResults) => holidayResults.isLoading,
);
