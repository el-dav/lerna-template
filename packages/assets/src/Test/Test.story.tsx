import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Test from './Test';

storiesOf('Test', module)
  .add('Default', () => <Test />)
  .add('Message', () => {
    const message = text('Message', 'How are you?');
    return <Test message={message} />;
  });
