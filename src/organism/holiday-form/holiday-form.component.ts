import * as React from 'react';
import { connect } from 'react-redux';

import {
  Dispatch,
} from 'redux';

import {
  ActivityCategoryInterface,
  HolidayHighlightInterface,
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

import { push } from 'react-router-redux';

import {
  Action,
  addBlankHolidayActivity,
  addBlankHolidayHighlight,
  saveHolidayDataThunk,
  updateHolidayActivity,
  updateHolidayCountry,
  updateHolidayData,
  updateHolidayFlightTime,
  updateHolidayHighlight,
} from './../../store';

import {
  HolidayFormDispatchProps,
  HolidayFormPresentation,
  HolidayFormStateProps,
} from './';

import {
  StateInterface,
  URLS,
} from './../../models';

import {
  getIdFromState,
} from './../../helpers';

const mapStateToProps = (
  state: StateInterface,
): HolidayFormStateProps => {
  return {
    allActivities: state.main.data.activityCategories,
    allCountries: state.main.data.countries,
    allFlights: state.main.data.flightTimes,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  test,
): HolidayFormDispatchProps => {
  return {
    holidayCountryChange: (holidayId: string, newCountryId: string) => {
      dispatch(updateHolidayCountry(
        holidayId,
        newCountryId,
      ));
    },
    holidayDescriptionChanged: (
      holidayId: string,
      newHolidayDescription: string,
    ) => {
      dispatch(updateHolidayData(
        holidayId,
        {
          description: newHolidayDescription,
        } as HolidayInterface,
      ));
    },
    holidayFlightCostChange: (holidayId: string, newFlightCost: number) => {
      dispatch(updateHolidayData(
        holidayId,
        {
          flight: {
            cost: newFlightCost,
          },
        } as HolidayInterface,
      ));
    },
    holidayFlightTimeChange: (holidayId: string, newFlightId: string) => {
      dispatch(updateHolidayFlightTime(
        holidayId,
        newFlightId,
      ));
    },
    holidayMainImageChange: (holidayId: string, newMainImageUrl: string) => {
      dispatch(updateHolidayData(
        holidayId,
        {
          mainImageUrl: newMainImageUrl,
        } as HolidayInterface,
      ));
    },
    holidayNameChange: (holidayId: string, newName: string) => {
      dispatch(updateHolidayData(
        holidayId,
        {
          name: newName,
        } as HolidayInterface,
      ));
    },
    onAddActivity: (holidayId: string) => {
      dispatch(addBlankHolidayActivity(holidayId));
    },
    onAddHighlight: (holidayId: string) => {
      dispatch(addBlankHolidayHighlight(holidayId));
    },
    onHolidayActivityChanged: (
      holidayId: string,
      activityIndex: number,
      newActivityId: string,
    ) => {
      dispatch(updateHolidayActivity(
        holidayId,
        activityIndex,
        newActivityId,
      ));
    },
    onHolidayHighlightDescriptionChanged: (
      holidayId: string,
      highlightId: string,
      newHighlightDescription: string,
    ) => {
      dispatch(updateHolidayHighlight(
        holidayId,
        highlightId,
        {
          description: newHighlightDescription,
        } as HolidayHighlightInterface,
      ));
    },
    onHolidayHighlightImageUrlChanged: (
      holidayId: string,
      highlightId: string,
      newHighlightImageUrl: string,
    ) => {
      dispatch(updateHolidayHighlight(
        holidayId,
        highlightId,
        {
          imageUrl: newHighlightImageUrl,
        } as HolidayHighlightInterface,
      ));
    },
    onHolidayHighlightTitleChanged: (
      holidayId: string,
      highlightId: string,
      newHighlightName: string,
    ) => {
      dispatch(updateHolidayHighlight(
        holidayId,
        highlightId,
        {
          title: newHighlightName,
        } as HolidayHighlightInterface,
      ));
    },
  };
};

export const HolidayFormComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HolidayFormPresentation);