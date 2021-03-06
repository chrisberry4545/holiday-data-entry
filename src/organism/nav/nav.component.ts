import * as React from 'react';
import { connect } from 'react-redux';

import {
  Dispatch,
} from 'redux';

import { push } from 'react-router-redux';

import {
  Action,
} from './../../store';

import {
  NavDispatchProps,
  NavPresentation,
  NavStateProps,
} from './';

import {
  StateInterface,
  URLS,
} from './../../models';

const mapStateToProps = (
  state: StateInterface,
): NavStateProps => {
  return {};
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  test,
): NavDispatchProps => {
  return {
    goToCountriesList: () => {
      dispatch(push(`/${URLS.COUNTRIES_LIST}`));
    },
    goToHolidaysList: () => {
      dispatch(push(`/${URLS.HOLIDAYS_LIST}`));
    },
    goToScores: () => {
      dispatch(push(`/${URLS.SCORES}`));
    },
  };
};

export const NavComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavPresentation);
