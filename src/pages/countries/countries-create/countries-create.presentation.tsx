import * as React from 'react';

import './countries-create.scss';

import {
  CountriesCreateDispatchProps,
  CountriesCreateStateProps,
} from './';

import {
  CountryFormComponent,
} from './../../../organism';

interface CountriesCreateCombinedProps
  extends CountriesCreateStateProps, CountriesCreateDispatchProps {}

export const CountriesCreatePresentation: React.SFC<
  CountriesCreateCombinedProps
> = ({
  country,
  createCountry,
}) => {
  return (
    <div className='o-container c-countries-create'>
      <h1>Countries create</h1>

      <CountryFormComponent />

      <button onClick={ () => createCountry(country._id) }>
        Save
      </button>
    </div>
  );
};
