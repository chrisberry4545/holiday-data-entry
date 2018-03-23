import * as React from 'react';

import {
  HolidayListDispatchProps,
  HolidayListStateProps,
} from './';

interface HolidayListCombinedProps
  extends HolidayListStateProps, HolidayListDispatchProps {}

export const HolidayListPresentation: React.SFC<HolidayListCombinedProps> =
({ holidays, goToHolidayDetails, goToHolidayEdit }) => {
  return (
    <div>
      <h1>Holidays List</h1>
      { holidays.map((holiday) => (
        <div key={ holiday._id }>
          <h3>{ holiday.name }</h3>
          <button onClick={ () => goToHolidayDetails(holiday) }>
            Details
          </button>
          <button onClick={ () => goToHolidayEdit(holiday) }>
            Edit
          </button>
        </div>
      )) }
    </div>
  );
};
