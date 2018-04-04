import * as uuidv4 from 'uuid/v4';

import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  Action,
  ADD_BLANK_HOLIDAY_ACTIVITY,
  ADD_BLANK_HOLIDAY_HIGHLIGHT,
  ADD_NEW_HOLIDAY_LOCALLY,
  AddBlankHolidayActivityAction,
  AddBlankHolidayHighlightAction,
  AddNewHolidayLocallyAction,
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
    case ADD_NEW_HOLIDAY_LOCALLY:
      return {
        ...state,
        holidays: [
          ...state.holidays,
          {
            _id: (action as AddNewHolidayLocallyAction).holidayId,
            activities: [],
            flight: {},
            highlights: [],
            name: 'Untitled',
          } as HolidayInterface,
        ],
      };
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
                _id: uuidv4(),
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
                  _id: uuidv4(),
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
