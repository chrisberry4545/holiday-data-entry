import * as React from 'react';

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
    <div className='o-container'>
      <h1>Countries edit</h1>

      <CountryFormComponent country={ country } />

      <button onClick={ () => updateData(country._id) }>
        Update
      </button>
    </div>
  );
};
