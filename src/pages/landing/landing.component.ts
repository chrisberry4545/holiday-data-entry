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
  LandingDispatchProps,
  LandingPresentation,
  LandingStateProps,
} from './';

import {
  StateInterface,
  URLS,
} from './../../models';

const mapStateToProps = (
  state: StateInterface,
): LandingStateProps => {
  return {};
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): LandingDispatchProps => {
  return {};
};

export const LandingComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPresentation);
