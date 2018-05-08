import * as React from 'react';

import './holiday-results.scss';

import {
  HolidayResultsDispatchProps,
  HolidayResultsStateProps,
} from './';

import {
  LoadingSpinnerPresentation,
} from './../../elements';

interface HolidayResultsCombinedProps
  extends HolidayResultsStateProps, HolidayResultsDispatchProps {}

export const HolidayResultsPresentation: React.SFC<
HolidayResultsCombinedProps
> = ({
  results,
  isLoading,
  updateScores,
}) => {
  return <div className='c-holiday-results'>
    <button onClick={ updateScores }>Get scores</button>
    {
      isLoading && <LoadingSpinnerPresentation />
    }
    {
      results && results.length > 0 && !isLoading &&
      <div>
        <h2>Results</h2>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
          {
            results.map((result) => (
              <tr key={ result._id }>
                <td>{ result.name }</td>
                <td>{ Math.round(result.score) }</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    }
    </div>;
};
