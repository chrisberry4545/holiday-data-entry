import * as React from 'react';

import {
  SelectBoxDispatchProps,
  SelectBoxStateProps,
} from './';

interface SelectBoxCombinedProps
  extends SelectBoxStateProps, SelectBoxDispatchProps {}

export const SelectBoxPresentation: React.SFC<SelectBoxCombinedProps> =
({
  options,
  onChange,
}) => {
  return (
    <select onChange={ (event: React.ChangeEvent<HTMLSelectElement>) => (
      onChange(event.target.value)
    ) } >
      { options.map((option) => (
        <option key={ option.value } value={ option.value }>
          { option.label }
        </option>
      )) }
    </select>
  );
};
