import {
  StateInterface,
} from './../../models';

import { createSelector } from 'reselect';

import {
  selectMainState,
} from './main.selectors';

export const selectScoreState = createSelector(
  selectMainState,
  (mainState) => mainState.scoreSelection,
);

export const selectCurrentActivityIds = createSelector(
  selectScoreState,
  (scoreState) => scoreState.selectedActivityTypeIds,
);

export const selectCurrentCostRangeId = createSelector(
  selectScoreState,
  (scoreState) => scoreState.selectedCostRangeId,
);

export const selectCurrentFlightTimeId = createSelector(
  selectScoreState,
  (scoreState) => scoreState.selectedFlightTimeId,
);

export const selectCurrentFoodImportanceId = createSelector(
  selectScoreState,
  (scoreState) => scoreState.selectedFoodImportanceId,
);

export const selectCurrentMonthNumber = createSelector(
  selectScoreState,
  (scoreState) => scoreState.selectedMonthNumber,
);

export const selectCurrentTemperatureId = createSelector(
  selectScoreState,
  (scoreState) => scoreState.selectedTemperatureId,
);
