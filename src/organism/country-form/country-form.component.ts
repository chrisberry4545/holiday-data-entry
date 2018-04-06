import * as React from 'react';
import { connect } from 'react-redux';

import {
  CountryInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  Dispatch,
} from 'redux';

import { push } from 'react-router-redux';

import {
  Action,
  updateCountryContinent,
  updateCountryData,
  updateCountryTemperature,
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
      dispatch(updateCountryContinent(
        countryId,
        newContinentId,
      ));
    },
    onCountryFoodScoreChanged: (
      countryId: string,
      newFoodScore: number,
    ) => {
      dispatch(updateCountryData(
        countryId,
        {
          foodScore: isNaN(newFoodScore) ? 0 : newFoodScore,
        } as CountryInterface,
      ));
    },
    onCountryMonthlyTemperatureChanged: (
      countryId: string,
      monthIndex: number,
      newTemperatureId: string,
    ) => {
      dispatch(updateCountryTemperature(
        countryId,
        monthIndex,
        newTemperatureId,
      ));
    },
    onCountryNameChanged: (
      countryId: string,
      newName: string,
    ) => {
      dispatch(updateCountryData(
        countryId,
        {
          name: newName,
        } as CountryInterface,
      ));
    },
  };
};

export const CountryFormComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryFormPresentation);
