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
  return {
    allContinents: state.main.data.continents,
    allTemperatures: state.main.data.temperature,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): CountryFormDispatchProps => {
  return {
    onCountryContinentChanged: (
      countryId: string,
      newContinentId: string,
    ) => {
      return null;
    },
    onCountryFoodScoreChanged: (
      countryId: string,
      newFoodScore: number,
    ) => {
      return null;
    },
    onCountryMonthlyTemperatureChanged: (
      countryId: string,
      monthIndex: string,
      newTemperatureId: string,
    ) => {
      return null;
    },
    onCountryNameChanged: (
      countryId: string,
      newName: string,
    ) => {
      return null;
    },
  };
};

export const CountryFormComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryFormPresentation);
