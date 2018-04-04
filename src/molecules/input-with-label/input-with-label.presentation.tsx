import * as React from 'react';

import * as uuidv4 from 'uuid/v4';

import './input-with-label.scss';

import {
  InputWithLabelStateProps,
} from './';

export const InputWithLabelPresentation: React.SFC<InputWithLabelStateProps>
= ({ label, children }) => {
    const elementId = uuidv4();
    const childrenWithId = {
      ...children as any,
      props: {
        ...(children as any).props,
        elementId,
      },
    };
    return (
      <div>
        <label className='c-input-with-label__label'
          htmlFor={ elementId }>{ label }</label>
        { childrenWithId }
      </div>
    );
};
