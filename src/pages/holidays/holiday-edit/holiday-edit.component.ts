import * as React from 'react';
import { connect } from 'react-redux';

import {
  Dispatch,
} from 'redux';

import { push } from 'react-router-redux';

import {
  Action,
  saveHolidayDataThunk,
  selectSelectedHoliday,
} from './../../../store';

import {
  HolidayEditDispatchProps,
  HolidayEditPresentation,
  HolidayEditStateProps,
} from './';

import {
  StateInterface,
} from './../../../models';

const mapStateToProps = (
  state: StateInterface,
): HolidayEditStateProps => {
  return {
    holiday: selectSelectedHoliday(state),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  test,
): HolidayEditDispatchProps => {
  return {
    updateData: (holidayId: string) => {
      dispatch(
        saveHolidayDataThunk(
          holidayId,
        ) as any,
      );
    },
  };
};

export const HolidayEditComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HolidayEditPresentation);
