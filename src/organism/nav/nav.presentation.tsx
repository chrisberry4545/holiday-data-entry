import * as React from 'react';

import './nav.scss';

import {
  NavDispatchProps,
  NavStateProps,
} from './';

import {
  SelectBoxPresentation,
  TextAreaPresentation,
  TextBoxPresentation,
} from './../../elements';

import {
  InputWithLabelPresentation,
} from './../../molecules';

interface NavCombinedProps
  extends NavStateProps, NavDispatchProps {}

export const NavPresentation: React.SFC<
  NavCombinedProps
> = ({
  goToCountriesList,
  goToHolidaysList,
}) => {
  return (
    <nav>
      <button className='c-nav__link' onClick={ goToHolidaysList }>
        Holidays
      </button>
      <button className='c-nav__link' onClick={ goToCountriesList }>
        Countries
      </button>
    </nav>
  );
};
