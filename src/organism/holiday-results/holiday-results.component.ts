import * as React from 'react';
import { connect } from 'react-redux';

import {
  Dispatch,
} from 'redux';

import {
  Action,
  selectHolidayResultIsLoading,
  selectHolidayResultsList,
  updateScoresThunk,
} from './../../store';

import {
  HolidayResultsDispatchProps,
  HolidayResultsPresentation,
  HolidayResultsStateProps,
} from './';

import {
  StateInterface,
} from './../../models';

const mapStateToProps = (
  state: StateInterface,
): HolidayResultsStateProps => {
  return {
    isLoading: selectHolidayResultIsLoading(state),
    results: selectHolidayResultsList(state),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): HolidayResultsDispatchProps => {
  return {
    updateScores: () => {
      dispatch(updateScoresThunk() as any);
    },
  };
};

export const HolidayResultsComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HolidayResultsPresentation);
