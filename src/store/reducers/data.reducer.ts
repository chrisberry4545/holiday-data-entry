import * as uuidv4 from 'uuid/v4';

import {
  CountryInterface,
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  Action,
  ADD_BLANK_HOLIDAY_ACTIVITY,
  ADD_BLANK_HOLIDAY_HIGHLIGHT,
  ADD_NEW_COUNTRY_LOCALLY,
  ADD_NEW_HOLIDAY_LOCALLY,
  AddBlankHolidayActivityAction,
  AddBlankHolidayHighlightAction,
  AddNewCountryLocallyAction,
  AddNewHolidayLocallyAction,
  DELETE_HOLIDAY_ACTIVITY,
  DELETE_HOLIDAY_HIGHLIGHT,
  DeleteHolidayActivityAction,
  DeleteHolidayHighlightAction,
  UPDATE_COUNTRY_CONTINENT,
  UPDATE_COUNTRY_DATA,
  UPDATE_COUNTRY_LAT,
  UPDATE_COUNTRY_LNG,
  UPDATE_COUNTRY_TEMPERATURE,
  UPDATE_HOLIDAY_ACTIVITY,
  UPDATE_HOLIDAY_COUNTRY,
  UPDATE_HOLIDAY_DATA,
  UPDATE_HOLIDAY_FLIGHT_TIME,
  UPDATE_HOLIDAY_HIGHLIGHT,
  UpdateCountryContinentAction,
  UpdateCountryDataAction,
  UpdateCountryLat,
  UpdateCountryLng,
  UpdateCountryTemperature,
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
    case ADD_NEW_COUNTRY_LOCALLY:
      return {
        ...state,
        countries: [
          ...state.countries,
          {
            _id: (action as AddNewCountryLocallyAction).countryId,
            continent: {
              _id: undefined,
              name: undefined,
            },
            foodScore: 5,
            foodTypes: [],
            latLng: {
              lat: '55.3781',
              lng: '3.4360',
            },
            monthlyTemperatures: {
              0: {
                _id: undefined,
                minValue: 0,
                name: undefined,
              },
              1: {
                _id: undefined,
                minValue: 0,
                name: undefined,
              },
              2: {
                _id: undefined,
                minValue: 0,
                name: undefined,
              },
              3: {
                _id: undefined,
                minValue: 0,
                name: undefined,
              },
              4: {
                _id: undefined,
                minValue: 0,
                name: undefined,
              },
              5: {
                _id: undefined,
                minValue: 0,
                name: undefined,
              },
              6: {
                _id: undefined,
                minValue: 0,
                name: undefined,
              },
              7: {
                _id: undefined,
                minValue: 0,
                name: undefined,
              },
              8: {
                _id: undefined,
                minValue: 0,
                name: undefined,
              },
              9: {
                _id: undefined,
                minValue: 0,
                name: undefined,
              },
              10: {
                _id: undefined,
                minValue: 0,
                name: undefined,
              },
              11: {
                _id: undefined,
                minValue: 0,
                name: undefined,
              },
            },
            name: 'Untitled',
          },
        ],
      };
    case ADD_NEW_HOLIDAY_LOCALLY:
      return {
        ...state,
        holidays: [
          ...state.holidays,
          {
            _id: (action as AddNewHolidayLocallyAction).holidayId,
            activities: [],
            country: {},
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

    case DELETE_HOLIDAY_ACTIVITY:
        const deleteHolidayActivityAction =
          action as DeleteHolidayActivityAction;
        return {
          ...state,
          holidays: state.holidays.map((holiday) => (
            holiday._id === deleteHolidayActivityAction.holidayId
            ?
            {
              ...holiday,
              activities: holiday.activities.filter((activity) => (
                activity._id !== deleteHolidayActivityAction.activityId
              )),
            }
            :
            holiday
          )),
        };
    case DELETE_HOLIDAY_HIGHLIGHT:
      const deleteHolidayHighlightAction =
        action as DeleteHolidayHighlightAction;
      return {
        ...state,
        holidays: state.holidays.map((holiday) => (
          holiday._id === deleteHolidayHighlightAction.holidayId
          ?
          {
            ...holiday,
            highlights: holiday.highlights.filter((highlight) => (
              highlight._id !== deleteHolidayHighlightAction.highlightId
            )),
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

    case UPDATE_COUNTRY_DATA:
      const updateCountryDataAction = action as UpdateCountryDataAction;
      return {
        ...state,
        countries: state.countries.map((country) => (
          country._id === updateCountryDataAction.countryId
          ?
          {
            ...country,
            ...updateCountryDataAction.newData,
          }
          :
          country
        )),
      };
    case UPDATE_COUNTRY_CONTINENT:
      const updateCountryContinentAction =
        action as UpdateCountryContinentAction;
      const newCountryContinent = state.continents.find((continent) => (
        continent._id === updateCountryContinentAction.newContinentId
      ));
      return {
        ...state,
        countries: state.countries.map((country) => (
          country._id === updateCountryContinentAction.countryId
          ?
          {
            ...country,
            continent: newCountryContinent,
          }
          :
          country
        )),
      };
    case UPDATE_COUNTRY_TEMPERATURE:
      const updateCountryTemperatureAction =
        action as UpdateCountryTemperature;
      const newCountryTemperature = state.temperature.find((temperature) => (
        temperature._id === updateCountryTemperatureAction.newTemperatureId
      ));
      const newMonthlyTemperature = {
        [updateCountryTemperatureAction.temperatureMonthIndex]:
          newCountryTemperature,
      };
      return {
        ...state,
        countries: state.countries.map((country) => (
          country._id === updateCountryTemperatureAction.countryId
          ?
          {
            ...country,
            monthlyTemperatures: {
              ...country.monthlyTemperatures,
              ...newMonthlyTemperature,
            },
          }
          :
          country
        )),
    };
    case UPDATE_COUNTRY_LNG:
      const updateCountryLng = action as UpdateCountryLng;
      return {
        ...state,
        countries: state.countries.map((country) => (
          country._id === updateCountryLng.countryId
          ?
          {
            ...country,
            latLng: {
              ...country.latLng,
              lng: updateCountryLng.newLng,
            },
          }
          :
          country
        )),
      };
    case UPDATE_COUNTRY_LAT:
      const updateCountryLat = action as UpdateCountryLat;
      return {
        ...state,
        countries: state.countries.map((country) => (
          country._id === updateCountryLat.countryId
          ?
          {
            ...country,
            latLng: {
              ...country.latLng,
              lat: updateCountryLat.newLat,
            },
          }
          :
          country
        )),
      };

    default:
      return state;
  }
}
