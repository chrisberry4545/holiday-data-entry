import {
  Action,
} from './';

export interface SetSelectedFlightTimeAction extends Action {
  selectedFlightTimeId: string;
}
export const SET_SELECTED_FLIGHT_TIME = 'SET_SELECTED_FLIGHT_TIME';
export function setSelectedFlightTime(
  selectedFlightTimeId: string,
): SetSelectedFlightTimeAction {
  return {
    selectedFlightTimeId,
    type: SET_SELECTED_FLIGHT_TIME,
  };
}

export interface SetSelectedCostRangeAction extends Action {
  selectedCostId: string;
}
export const SET_SELECTED_COST_RANGE = 'SET_SELECTED_COST_RANGE';
export function setSelectedCostRange(
  selectedCostId: string,
): SetSelectedCostRangeAction {
  return {
    selectedCostId,
    type: SET_SELECTED_COST_RANGE,
  };
}

export interface SetSelectedTemperatureRange extends Action {
  selectedTemperatureId: string;
}
export const SET_SELECTED_TEMPERATURE_RANGE = 'SET_SELECTED_TEMPERATURE_RANGE';
export function setSelectedTemperature(
  selectedTemperatureId: string,
): SetSelectedTemperatureRange {
  return {
    selectedTemperatureId,
    type: SET_SELECTED_TEMPERATURE_RANGE,
  };
}

export interface SetSelectedFoodImportanceAction extends Action {
  selectedFoodImportanceId: string;
}
export const SET_SELECTED_FOOD_IMPORTANCE = 'SET_SELECTED_FOOD_IMPORTANCE';
export function setSelectedFoodImportance(
  selectedFoodImportanceId: string,
): SetSelectedFoodImportanceAction {
  return {
    selectedFoodImportanceId,
    type: SET_SELECTED_FOOD_IMPORTANCE,
  };
}

export interface ToggleSelectedActivityCategoryAction extends Action {
  selectedActivityCategoryId: string;
}
export const TOGGLE_SELECTED_ACTIVITY_CATEGORY =
  'TOGGLE_SELECTED_ACTIVITY_CATEGORY';
export function toggleSelectedActivityCategory(
  selectedActivityCategoryId: string,
): ToggleSelectedActivityCategoryAction {
  return {
    selectedActivityCategoryId,
    type: TOGGLE_SELECTED_ACTIVITY_CATEGORY,
  };
}
