import * as React from 'react';

import {
  LandingDispatchProps,
  LandingStateProps,
} from './';

interface LandingCombinedProps
  extends LandingStateProps, LandingDispatchProps {}

export const LandingPresentation: React.SFC<
  LandingCombinedProps
> = ({ }) => {
  return (
    <div className='o-container'>
      <h1>Holiday data entry</h1>
    </div>
  );
};
