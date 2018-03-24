import * as React from 'react';

import {
  HolidayDetailsDispatchProps,
  HolidayDetailsStateProps,
} from './';

interface HolidayDetailsCombinedProps
  extends HolidayDetailsStateProps, HolidayDetailsDispatchProps {}

export const HolidayDetailsPresentation: React.SFC<
  HolidayDetailsCombinedProps
> = ({ holiday, goToEditHoliday }) => {
  return holiday ? (
    <div className='o-container'>
      <h1>{ holiday.name } - details</h1>
      <button onClick={ () => goToEditHoliday(holiday) }>Edit</button>
      <h2>Highlights</h2>
      { holiday.highlights.map((highlight) => (
        <div key={ highlight._id }>
          <h3>{ highlight.title }</h3>
          <p> { highlight.description } </p>
          <img src={ highlight.imageUrl } />
        </div>
      )) }
    </div>
  ) : <div>No holiday with this id</div>;
};
