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
  CountryFormDispatchProps,
  CountryFormPresentation,
  CountryFormStateProps,
} from './';

import {
  StateInterface,
} from './../../models';

const mapStateToProps = (
  state: StateInterface,
): CountryFormStateProps => {
  return {};
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): CountryFormDispatchProps => {
  return {};
};

export const CountryFormComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryFormPresentation);
