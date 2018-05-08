import * as React from 'react';

import {
  SingleSelectorDispatchProps,
  SingleSelectorStateProps,
} from './';

import {
  SelectorItemPresentation,
} from './../../elements';

interface SingleSelectorCombinedProps
  extends SingleSelectorStateProps, SingleSelectorDispatchProps {}

export const SingleSelectorPresentation: React.SFC<SingleSelectorCombinedProps>
= ({
  choices, selectedId,
  onSelected,
}) => {
  const handleClick = (id: string, isSelected: boolean) => {
    if (!isSelected) {
      onSelected(id);
    }
  };
  return (
    <div>
      { choices.map((choice) => {
        const isSelected = selectedId === choice._id;
        return (
          <SelectorItemPresentation
            key={ choice._id }
            _id={ choice._id }
            label={ choice.label }
            isSelected={ isSelected }
            onClicked={ () => handleClick(choice._id, isSelected) }
          />
        );
      }) }
    </div>
  );
};
