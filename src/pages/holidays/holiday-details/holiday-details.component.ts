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
} from './../../../store';

import {
  HolidayDetailsDispatchProps,
  HolidayDetailsPresentation,
  HolidayDetailsStateProps,
} from './';

import {
  StateInterface,
  URLS,
} from './../../../models';

import {
  getIdFromState,
} from './../../../helpers';

const mapStateToProps = (
  state: StateInterface,
): HolidayDetailsStateProps => {
  return {
    holiday: state.main.data.holidays.find((holiday) => (
      holiday._id === getIdFromState(state)
    )),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): HolidayDetailsDispatchProps => {
  return {
    goToEditHoliday: (holiday: HolidayInterface) => {
      dispatch(push(`/${URLS.HOLIDAYS_EDIT}/${holiday._id}`));
    },
  };
};

export const HolidayDetailsComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HolidayDetailsPresentation);
