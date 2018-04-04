import * as React from 'react';

import {
  HolidayListDispatchProps,
  HolidayListStateProps,
} from './';

interface HolidayListCombinedProps
  extends HolidayListStateProps, HolidayListDispatchProps {}

export const HolidayListPresentation: React.SFC<HolidayListCombinedProps> =
({ holidays, goToHolidayDetails, goToHolidayEdit, addNewHoliday }) => {
  return (
    <div className='o-container'>
      <h1>Holidays list</h1>
      <div className='o-spacing-bottom-xxlarge'>
        { holidays.map((holiday) => (
          <div key={ holiday._id }>
            <h3>{ holiday.name }</h3>
            <button className='o-spacing-right-xlarge'
              onClick={ () => goToHolidayDetails(holiday) }>
              Details
            </button>
            <button onClick={ () => goToHolidayEdit(holiday) }>
              Edit
            </button>
          </div>
        )) }
      </div>
      <button onClick={ addNewHoliday }>
        Add holiday
      </button>
    </div>
  );
};
