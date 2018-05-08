import * as React from 'react';
import { connect } from 'react-redux';

import {
  Dispatch,
} from 'redux';

import { push } from 'react-router-redux';

import {
  Action,
  selectActivityCategories,
  selectCostRanges,
  selectCurrentActivityIds,
  selectCurrentCostRangeId,
  selectCurrentFlightTimeId,
  selectCurrentFoodImportanceId,
  selectCurrentMonthNumber,
  selectCurrentTemperatureId,
  selectFlightTimes,
  selectFoodImportance,
  selectTemperatures,
  setSelectedCostRange,
  setSelectedFlightTime,
  setSelectedFoodImportance,
  setSelectedTemperature,
  toggleSelectedActivityCategory,
} from './../../store';

import {
  HolidayScoreFormDispatchProps,
  HolidayScoreFormPresentation,
  HolidayScoreFormStateProps,
} from './';

import {
  StateInterface,
} from './../../models';

const mapStateToProps = (
  state: StateInterface,
): HolidayScoreFormStateProps => {
  return {
    possibleActivities: selectActivityCategories(state),
    possibleCostRanges: selectCostRanges(state),
    possibleFlightTimes: selectFlightTimes(state),
    possibleFoodImportantOptions: selectFoodImportance(state),
    possibleTemperatures: selectTemperatures(state),

    selectedActivityTypeIds: selectCurrentActivityIds(state),
    selectedCostRangeId: selectCurrentCostRangeId(state),
    selectedFlightTimeId: selectCurrentFlightTimeId(state),
    selectedFoodImportanceId: selectCurrentFoodImportanceId(state),
    selectedMonthNumber: selectCurrentMonthNumber(state),
    selectedTemperatureId: selectCurrentTemperatureId(state),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): HolidayScoreFormDispatchProps => {
  return {
    chooseCostRange: (costRangeId: string) => {
      dispatch(setSelectedCostRange(costRangeId));
    },
    chooseFlightTime: (flightTimeId: string) => {
      dispatch(setSelectedFlightTime(flightTimeId));
    },
    chooseFoodImportance: (foodImportanceId: string) => {
      dispatch(setSelectedFoodImportance(foodImportanceId));
    },
    chooseMonthNumber: (monthNumberId: string) => {
      return undefined;
    },
    chooseTemperatureId: (temperatureId: string) => {
      dispatch(setSelectedTemperature(temperatureId));
    },
    toggleActivityCategory: (activityId: string) => {
      dispatch(toggleSelectedActivityCategory(activityId));
    },
  };
};

export const HolidayScoreFormComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HolidayScoreFormPresentation);
