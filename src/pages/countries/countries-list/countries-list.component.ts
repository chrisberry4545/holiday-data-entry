import * as React from 'react';
import { connect } from 'react-redux';

import {
  Dispatch,
} from 'redux';

import { push } from 'react-router-redux';

import {
  Action,
  goToAddCountryThunk,
  selectCountries,
} from './../../../store';

import {
  CountriesListDispatchProps,
  CountriesListPresentation,
  CountriesListStateProps,
} from './';

import {
  StateInterface,
  URLS,
} from './../../../models';

const mapStateToProps = (
  state: StateInterface,
): CountriesListStateProps => {
  return {
    allCountries: selectCountries(state),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): CountriesListDispatchProps => {
  return {
    addNewCountry: () => {
      dispatch(goToAddCountryThunk() as any);
    },
    goToCountryEdit: (countryId: string) => {
      dispatch(push(`/${URLS.COUNTRIES_EDIT}/${countryId}`));
    },
  };
};

export const CountriesListComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountriesListPresentation);
