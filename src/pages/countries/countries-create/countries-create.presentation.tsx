import * as React from 'react';

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
    <div className='o-container'>
      <h1>Countries create</h1>

      <CountryFormComponent country={ country } />

      <button onClick={ () => createCountry(country._id) }>
        Save
      </button>
    </div>
  );
};
