import * as React from 'react';

import {
  LandingDispatchProps,
  LandingStateProps,
} from './';

interface HolidayCreateCombinedProps
  extends LandingStateProps, LandingDispatchProps {}

export const LandingPresentation: React.SFC<
  HolidayCreateCombinedProps
> = ({
  goToCountriesList, goToHolidaysList,
}) => {
  return (
    <div className='o-container'>
      <h1>Holiday data entry</h1>

      <div className='o-spacing-bottom'>
        <button onClick={ goToHolidaysList }>
          Holidays
        </button>
      </div>

      <div className='o-spacing-bottom'>
        <button onClick={ goToCountriesList }>
          Countries
        </button>
      </div>
    </div>
  );
};
