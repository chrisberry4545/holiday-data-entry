import * as React from 'react';

import {
  TextBoxDispatchProps,
  TextBoxStateProps,
} from './';

interface TextBoxCombinedProps
  extends TextBoxStateProps, TextBoxDispatchProps {}

export const TextBoxPresentation: React.SFC<TextBoxCombinedProps> =
({
  elementId,
  value,
  onChange,
  type = 'text',
}) => {
  return (
    <input id={ elementId } type={ type } value={ value }
      onChange={ (event: React.ChangeEvent<HTMLInputElement>) => (
        onChange(event.target.value)
    ) } />
  );
};
