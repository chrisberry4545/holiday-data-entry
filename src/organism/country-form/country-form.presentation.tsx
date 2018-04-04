import * as React from 'react';

import {
  CountryFormDispatchProps,
  CountryFormStateProps,
} from './';

interface CountryFormCombinedProps
  extends CountryFormStateProps, CountryFormDispatchProps {}

export const CountryFormPresentation: React.SFC<
  CountryFormCombinedProps
> = ({
  country,
}) => {
  return (
    <div className='o-container'>
      <h1>Country form</h1>
    </div>
  );
};
