import { createSelector } from 'reselect';

import {
  StateInterface,
} from './../../models';

import {
  selectMainState,
} from './main.selectors';

import {
  selectIdFromState,
} from './route.selectors';

export const selectData = createSelector(
  selectMainState,
  (main) => main.data,
);

export const selectActivityCategories = createSelector(
  selectData,
  (data) => data.activityCategories,
);

export const selectContinents = createSelector(
  selectData,
  (data) => data.continents,
);

export const selectCostRanges = createSelector(
  selectData,
  (data) => data.costRanges,
);

export const selectCountries = createSelector(
  selectData,
  (data) => data.countries,
);

export const selectFlightTimes = createSelector(
  selectData,
  (data) => data.flightTimes,
);

export const selectFoodImportance = createSelector(
  selectData,
  (data) => data.foodImportance,
);

export const selectHolidays = createSelector(
  selectData,
  (data) => data.holidays,
);

export const selectTemperatures = createSelector(
  selectData,
  (data) => data.temperature,
);

export const selectHolidayWithId = (id: string) => (
  createSelector(
    selectHolidays,
    (holidays) => holidays.find((holiday) => holiday._id === id),
  )
);

export const selectCountryWithId = (id: string) => (
  createSelector(
    selectCountries,
    (countries) => countries.find((country) => country._id === id),
  )
);

export const selectSelectedHoliday = createSelector(
  selectIdFromState,
  selectHolidays,
  (id, holidays) => holidays.find((holiday) => holiday._id === id),
);

export const selectSelectedCountry = createSelector(
  selectIdFromState,
  selectCountries,
  (id, countries) => countries.find((country) => country._id === id),
);
