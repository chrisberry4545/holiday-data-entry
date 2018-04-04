import * as React from 'react';
import { connect } from 'react-redux';

import {
  Dispatch,
} from 'redux';

import { push } from 'react-router-redux';

import {
  Action,
  addNewCountryThunk,
} from './../../../store';

import {
  CountriesCreateDispatchProps,
  CountriesCreatePresentation,
  CountriesCreateStateProps,
} from './';

import {
  StateInterface,
} from './../../../models';

import {
  getIdFromState,
} from './../../../helpers';

const mapStateToProps = (
  state: StateInterface,
): CountriesCreateStateProps => {
  return {
    country: state.main.data.countries.find((country) => (
      country._id === getIdFromState(state)
    )),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): CountriesCreateDispatchProps => {
  return {
    createCountry: (countryId: string) => {
      dispatch(
        addNewCountryThunk(countryId) as any,
      );
    },
  };
};

export const CountriesCreateComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountriesCreatePresentation);
