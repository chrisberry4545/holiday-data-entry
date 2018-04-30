import * as React from 'react';

import './countries-edit.scss';

import {
  CountriesEditDispatchProps,
  CountriesEditStateProps,
} from './';

import {
  CountryFormComponent,
} from './../../../organism';

interface CountriesEditCombinedProps
  extends CountriesEditStateProps, CountriesEditDispatchProps {}

export const CountriesEditPresentation: React.SFC<
  CountriesEditCombinedProps
> = ({
  country,
  updateData,
}) => {
  return (
    <div className='o-container c-countries-edit'>
      <h1>Countries edit</h1>

      <CountryFormComponent />

      <button onClick={ () => updateData(country._id) }>
        Update
      </button>
    </div>
  );
};
