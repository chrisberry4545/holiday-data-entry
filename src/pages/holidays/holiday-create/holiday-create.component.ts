import * as React from 'react';
import { connect } from 'react-redux';

import {
  Dispatch,
} from 'redux';

import { push } from 'react-router-redux';

import {
  Action,
  addNewHolidayThunk,
} from './../../../store';

import {
  HolidayCreateDispatchProps,
  HolidayCreatePresentation,
  HolidayCreateStateProps,
} from './';

import {
  StateInterface,
} from './../../../models';

import {
  getIdFromState,
} from './../../../helpers';

import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

const mapStateToProps = (
  state: StateInterface,
): HolidayCreateStateProps => {
  return {
    holiday: state.main.data.holidays.find((holiday) => (
      holiday._id === getIdFromState(state)
    )),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  test,
): HolidayCreateDispatchProps => {
  return {
    createHoliday: (holidayId: string) => {
      dispatch(
        addNewHolidayThunk(holidayId) as any,
      );
    },
  };
};

export const HolidayCreateComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HolidayCreatePresentation);
