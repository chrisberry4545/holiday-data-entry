import * as React from 'react';

import {
  TextAreaDispatchProps,
  TextAreaStateProps,
} from './';

interface TextAreaCombinedProps
  extends TextAreaStateProps, TextAreaDispatchProps {}

export const TextAreaPresentation: React.SFC<TextAreaCombinedProps> =
({
  elementId,
  value,
  onChange,
}) => {
  return (
    <textarea id={ elementId } value={ value }
      onChange={ (event: React.ChangeEvent<HTMLTextAreaElement>) => (
        onChange(event.target.value)
    ) } />
  );
};
