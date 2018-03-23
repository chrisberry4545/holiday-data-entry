import * as uuidv1 from 'uuid/v1';

import {
  Action,
  ADD_BLANK_HOLIDAY_ACTIVITY,
  ADD_BLANK_HOLIDAY_HIGHLIGHT,
  AddBlankHolidayActivityAction,
  AddBlankHolidayHighlightAction,
  PRINT_HOLIDAY_DATA,
  UPDATE_HOLIDAY_ACTIVITY,
  UPDATE_HOLIDAY_COUNTRY,
  UPDATE_HOLIDAY_DATA,
  UPDATE_HOLIDAY_FLIGHT_TIME,
  UPDATE_HOLIDAY_HIGHLIGHT,
  UpdateHolidayActivityAction,
  UpdateHolidayCountryAction,
  UpdateHolidayDataAction,
  UpdateHolidayFlightAction,
  UpdateHolidayHighlightAction,
} from './../actions';

import {
  AllDataInterface,
} from './../../models';

const getDefaultState = (): AllDataInterface => {
  return {
    activityCategories: [],
    continents: [],
    costRanges: [],
    countries: [],
    flightTimes: [],
    foodImportance: [],
    holidays: [],
    temperature: [],
  };
};

export function dataReducer(
  state = getDefaultState(), action: Action,
): AllDataInterface {
  switch (action.type) {
    case PRINT_HOLIDAY_DATA:
      const holidaysWithNames = state.holidays.map((holiday) => ({
        holiday,
        name: holiday.name.toUpperCase().replace(' ', '_'),
      }));
      const holidayMap = {};
      holidaysWithNames.forEach(({ holiday, name }) => {
        holidayMap[name] = holiday;
      });
      // tslint:disable-next-line
      console.log(JSON.stringify(holidayMap));
      return state;
    case UPDATE_HOLIDAY_DATA:
      const updateHolidayDataAction = action as UpdateHolidayDataAction;
      return {
        ...state,
        holidays: state.holidays.map((holiday) => (
          holiday._id === updateHolidayDataAction.holidayId
          ?
          {
            ...holiday,
            ...updateHolidayDataAction.newData,
          }
          :
          holiday
        )),
      };
    case UPDATE_HOLIDAY_COUNTRY:
      const updateHolidayCountryAction = action as UpdateHolidayCountryAction;
      const newCountry = state.countries.find((country) => (
        country._id === updateHolidayCountryAction.newCountryId
      ));
      return {
        ...state,
        holidays: state.holidays.map((holiday) => (
          holiday._id === updateHolidayCountryAction.holidayId
          ?
          {
            ...holiday,
            country: newCountry,
          }
          :
          holiday
        )),
      };
    case UPDATE_HOLIDAY_FLIGHT_TIME:
      const updateHolidayFlightAction = action as UpdateHolidayFlightAction;
      const newFlightTime = state.flightTimes.find((flightTime) => (
        flightTime._id === updateHolidayFlightAction.newFlightTimeId
      ));
      return {
        ...state,
        holidays: state.holidays.map((holiday) => (
          holiday._id === updateHolidayFlightAction.holidayId
          ?
          {
            ...holiday,
            flight: {
              ...holiday.flight,
              flightTime: newFlightTime,
            },
          }
          :
          holiday
        )),
      };
    case ADD_BLANK_HOLIDAY_ACTIVITY:
      const addBlankHolidayActivityAction =
        action as AddBlankHolidayActivityAction;
      return {
        ...state,
        holidays: state.holidays.map((holiday) => (
          holiday._id === addBlankHolidayActivityAction.holidayId
          ?
          {
            ...holiday,
            activities: [
              ...holiday.activities,
              {
                _id: uuidv1(),
                name: '',
              },
            ],
          }
          :
          holiday
        )),
      };
    case ADD_BLANK_HOLIDAY_HIGHLIGHT:
      const addBlankHolidayHighlightAction =
        action as AddBlankHolidayHighlightAction;
      return {
          ...state,
          holidays: state.holidays.map((holiday) => (
            holiday._id === addBlankHolidayHighlightAction.holidayId
            ?
            {
              ...holiday,
              highlights: [
                ...holiday.highlights,
                {
                  _id: uuidv1(),
                  title: '',
                },
              ],
            }
            :
            holiday
          )),
        };

    case UPDATE_HOLIDAY_ACTIVITY:
        const updateHolidayActivityAction =
          action as UpdateHolidayActivityAction;
        const newHolidayActivity = state.activityCategories.find((activity) => (
          activity._id === updateHolidayActivityAction.newActivityId
        ));
        return {
          ...state,
          holidays: state.holidays.map((holiday) => (
            holiday._id === updateHolidayActivityAction.holidayId
            ?
            {
              ...holiday,
              activities: holiday.activities.map((activity, index) => (
                index === updateHolidayActivityAction.activityIndex
                ?
                newHolidayActivity
                :
                activity
              )),
            }
            :
            holiday
          )),
        };
    case UPDATE_HOLIDAY_HIGHLIGHT:
      const updateHolidayHighlightAction =
        action as UpdateHolidayHighlightAction;
      return {
        ...state,
        holidays: state.holidays.map((holiday) => (
          holiday._id === updateHolidayHighlightAction.holidayId
          ?
          {
            ...holiday,
            highlights: holiday.highlights.map((holidayHighlight) => (
              holidayHighlight._id === updateHolidayHighlightAction.highlightId
              ?
              {
                ...holidayHighlight,
                ...updateHolidayHighlightAction.newHighlightData,
              }
              :
              holidayHighlight
            )),
          }
          :
          holiday
        )),
      };

    default:
      return state;
  }
}
