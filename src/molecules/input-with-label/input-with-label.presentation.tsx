import * as React from 'react';

import * as uuidv1 from 'uuid/v1';

import {
  InputWithLabelStateProps,
} from './';

export const InputWithLabelPresentation: React.SFC<InputWithLabelStateProps>
= ({ label, children }) => {
    const elementId = uuidv1();
    const childrenWithId = {
      ...children as any,
      props: {
        ...(children as any).props,
        elementId,
      },
    };
    return (
      <div>
        <label htmlFor={ elementId }>{ label }</label>
        { childrenWithId }
      </div>
    );
};
