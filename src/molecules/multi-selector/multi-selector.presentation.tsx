import * as React from 'react';

import {
  MultiSelectorDispatchProps,
  MultiSelectorStateProps,
} from './';

import {
  SelectorItemPresentation,
} from './../../elements';

interface MultiSelectorCombinedProps
  extends MultiSelectorStateProps, MultiSelectorDispatchProps {}

export const MultiSelectorPresentation: React.SFC<MultiSelectorCombinedProps> =
({
  choices, selectedIds,
  onDeselected, onSelected,
}) => {
  const handleClick = (id: string, isSelected: boolean) => {
    if (isSelected) {
      onDeselected(id);
    } else {
      onSelected(id);
    }
  };
  return (
    <div>
      { choices.map((choice) => {
        const isSelected = selectedIds.indexOf(choice._id) > -1;
        return (
          <SelectorItemPresentation
            key={ choice._id }
            _id={ choice._id }
            label={ choice.label }
            isSelected={ isSelected }
            onClicked={ (id: string) => handleClick(id, isSelected) }
          />
        );
      }) }
    </div>
  );
};
