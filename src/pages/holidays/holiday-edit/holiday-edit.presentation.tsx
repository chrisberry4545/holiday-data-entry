import * as React from 'react';

import './holiday-edit.scss';

import {
  HolidayEditDispatchProps,
  HolidayEditStateProps,
} from './';

import {
  HolidayFormComponent,
} from './../../../organism/holiday-form';

interface HolidayEditCombinedProps
  extends HolidayEditStateProps, HolidayEditDispatchProps {}

export const HolidayEditPresentation: React.SFC<
  HolidayEditCombinedProps
> = ({
  holiday,
  saveData,
}) => {
  return holiday ? (
    <div className='o-container c-holiday-edit'>
      <h1>{ holiday.name } - edit</h1>

      <HolidayFormComponent holiday={ holiday }/>

      <button onClick={ () => saveData(holiday._id) }>
        Save
      </button>
    </div>
  ) : <div>No holiday with this id</div>;
};
