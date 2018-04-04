import * as React from 'react';
import { connect } from 'react-redux';

import {
  Dispatch,
} from 'redux';

import { push } from 'react-router-redux';

import {
  Action,
  saveCountryDataThunk,
} from './../../../store';

import {
  CountriesEditDispatchProps,
  CountriesEditPresentation,
  CountriesEditStateProps,
} from './';

import {
  StateInterface,
  URLS,
} from './../../../models';

import {
  getIdFromState,
} from './../../../helpers';

const mapStateToProps = (
  state: StateInterface,
): CountriesEditStateProps => {
  return {
    country: state.main.data.countries.find((country) => (
      country._id === getIdFromState(state)
    )),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): CountriesEditDispatchProps => {
  return {
    updateData: (countryId: string) => {
      dispatch(
        saveCountryDataThunk(
          countryId,
        ) as any,
      );
    },
  };
};

export const CountriesEditComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountriesEditPresentation);
