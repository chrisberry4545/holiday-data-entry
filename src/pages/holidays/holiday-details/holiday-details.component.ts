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
  selectSelectedHoliday,
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

const mapStateToProps = (
  state: StateInterface,
): HolidayDetailsStateProps => {
  return {
    holiday: selectSelectedHoliday(state),
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
