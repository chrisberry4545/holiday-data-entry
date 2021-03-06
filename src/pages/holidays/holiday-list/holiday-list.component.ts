import * as React from 'react';
import { connect } from 'react-redux';

import {
  Dispatch,
} from 'redux';

import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

import { push } from 'react-router-redux';

import {
  Action,
  goToAddHolidayThunk,
  selectHolidays,
} from './../../../store';

import {
  HolidayListDispatchProps,
  HolidayListPresentation,
  HolidayListStateProps,
} from './';

import {
  StateInterface,
  URLS,
} from './../../../models';

const mapStateToProps = (
  state: StateInterface,
): HolidayListStateProps => {
  return {
    holidays: selectHolidays(state),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): HolidayListDispatchProps => {
  return {
    addNewHoliday: () => {
      dispatch(goToAddHolidayThunk() as any);
    },
    goToHolidayDetails: (holiday: HolidayInterface) => {
      dispatch(push(`/${URLS.HOLIDAYS_DETAILS}/${holiday._id}`));
    },
    goToHolidayEdit: (holiday: HolidayInterface) => {
      dispatch(push(`/${URLS.HOLIDAYS_EDIT}/${holiday._id}`));
    },
  };
};

export const HolidayListComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HolidayListPresentation);
