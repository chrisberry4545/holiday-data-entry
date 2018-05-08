import * as React from 'react';

import './selector-item.scss';

import {
  SelectorItemDispatchProps,
  SelectorItemStateProps,
} from './';

interface SelectorItemCombinedProps
  extends SelectorItemStateProps, SelectorItemDispatchProps {}

export const SelectorItemPresentation: React.SFC<SelectorItemCombinedProps> =
({
  _id, label, isSelected,
  onClicked,
}) => {
  return (
    <div key={ _id }
      onClick={ () => onClicked(_id) }
      className={ 'o-spacing-bottom ' +
        'c-selector-item ' +
        (isSelected ? 'c-selector-item--selected' : '')
      }
    >
      { label }
    </div>
  );
};
