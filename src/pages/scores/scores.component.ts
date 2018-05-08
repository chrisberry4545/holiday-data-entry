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
  ScoresDispatchProps,
  ScoresPresentation,
  ScoresStateProps,
} from './';

import {
  StateInterface,
} from './../../models';

const mapStateToProps = (
  state: StateInterface,
): ScoresStateProps => {
  return {};
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): ScoresDispatchProps => {
  return {};
};

export const ScoresComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScoresPresentation);
