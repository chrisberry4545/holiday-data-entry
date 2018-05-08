import { Action } from './../actions';

import {
  UserInputInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  SET_SELECTED_COST_RANGE,
  SET_SELECTED_FLIGHT_TIME,
  SET_SELECTED_FOOD_IMPORTANCE,
  SET_SELECTED_TEMPERATURE_RANGE,
  SetSelectedCostRangeAction,
  SetSelectedFlightTimeAction,
  SetSelectedFoodImportanceAction,
  SetSelectedTemperatureRange,
  TOGGLE_SELECTED_ACTIVITY_CATEGORY,
  ToggleSelectedActivityCategoryAction,
} from './../';

const getDefaultState = (): UserInputInterface => {
  return {
    selectedActivityTypeIds: [],
    selectedCostRangeId: null,
    selectedFlightTimeId: null,
    selectedFoodImportanceId: null,
    selectedMonthNumber: null,
    selectedTemperatureId: null,
  };
};

export function scoreSelectionReducer(
  state = getDefaultState(), action: Action,
): UserInputInterface {
  switch (action.type) {
    case SET_SELECTED_FLIGHT_TIME:
      return {
        ...state,
        selectedFlightTimeId: (action as SetSelectedFlightTimeAction)
          .selectedFlightTimeId,
      };

    case SET_SELECTED_FOOD_IMPORTANCE:
      return {
        ...state,
        selectedFoodImportanceId: (action as SetSelectedFoodImportanceAction)
          .selectedFoodImportanceId,
      };

    case SET_SELECTED_COST_RANGE:
      return {
        ...state,
        selectedCostRangeId: (action as SetSelectedCostRangeAction)
          .selectedCostId,
      };

    case SET_SELECTED_TEMPERATURE_RANGE:
      return {
        ...state,
        selectedTemperatureId: (action as SetSelectedTemperatureRange)
          .selectedTemperatureId,
      };

    case TOGGLE_SELECTED_ACTIVITY_CATEGORY:
      const toggledActivityId = (action as ToggleSelectedActivityCategoryAction)
        .selectedActivityCategoryId;
      return state.selectedActivityTypeIds.indexOf(toggledActivityId) === -1
        ?
        {
          ...state,
          selectedActivityTypeIds: [
            ...state.selectedActivityTypeIds,
            toggledActivityId,
          ],
        }
        :
        {
          ...state,
          selectedActivityTypeIds: state.selectedActivityTypeIds
            .filter((activityId) => (
              activityId !== toggledActivityId
            )),
        };
    default:
      return state;
  }
}
