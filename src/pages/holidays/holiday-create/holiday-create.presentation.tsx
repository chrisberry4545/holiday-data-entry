import * as React from 'react';

import './holiday-create.scss';

import {
  HolidayCreateDispatchProps,
  HolidayCreateStateProps,
} from './';

import {
  HolidayFormComponent,
} from './../../../organism/holiday-form';

interface HolidayCreateCombinedProps
  extends HolidayCreateStateProps, HolidayCreateDispatchProps {}

export const HolidayCreatePresentation: React.SFC<
  HolidayCreateCombinedProps
> = ({
  holiday,
  createHoliday,
}) => {
  return (
    <div className='o-container c-holiday-create'>
      <h1>Create holiday</h1>

      <HolidayFormComponent holiday={ holiday }/>

      <button onClick={ () => createHoliday(holiday._id) }>
        Save
      </button>
    </div>
  );
};
