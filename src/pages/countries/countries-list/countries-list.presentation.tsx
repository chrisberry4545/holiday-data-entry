import * as React from 'react';

import {
  CountriesListDispatchProps,
  CountriesListStateProps,
} from './';

interface CountriesListCombinedProps
  extends CountriesListStateProps, CountriesListDispatchProps {}

export const CountriesListPresentation: React.SFC<
CountriesListCombinedProps
> = ({
  allCountries,
  addNewCountry,
  goToCountryEdit,
}) => {
  return (
    <div className='o-container'>
      <h1>Countries list</h1>

      <div className='o-spacing-bottom-xxlarge'>
      { allCountries.map((country) => (
        <div key={ country._id } className='o-spacing-bottom'>
          <div>{ country.name }</div>
          <button onClick={ () => goToCountryEdit(country._id) }>Edit</button>
        </div>
      )) }
      </div>

      <button onClick={ addNewCountry }>
        Add country
      </button>
    </div>
  );
};
