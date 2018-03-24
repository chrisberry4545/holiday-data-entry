import * as React from 'react';

import * as uuidv1 from 'uuid/v1';

import './input-with-label.scss';

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
        <label className='.o-spacing-bottom-small c-input-with-label__label'
          htmlFor={ elementId }>{ label }</label>
        { childrenWithId }
      </div>
    );
};
