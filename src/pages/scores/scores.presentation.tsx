import * as React from 'react';

import './scores.scss';

import {
  ScoresDispatchProps,
  ScoresStateProps,
} from './';

import {
  HolidayResultsComponent,
  HolidayScoreFormComponent,
} from './../../organism';

interface ScoresCombinedProps
  extends ScoresStateProps, ScoresDispatchProps {}

export const ScoresPresentation: React.SFC<
ScoresCombinedProps
> = () => {
  return (
    <div className='o-container'>
      <h1>Scores</h1>

      <div className='c-scores__holiday-score-form'>
        <HolidayScoreFormComponent />
      </div>

      <div className='c-scores__holiday-results'>
        <HolidayResultsComponent />
      </div>

    </div>
  );
};
