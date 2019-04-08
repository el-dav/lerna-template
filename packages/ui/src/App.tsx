import React, { FC } from 'react';
import { Test } from '@davidual/assets';
import { styled } from '@davidual/theme';

import Home from './views/Home';

const Container = styled.div`
  background: green;
`;

const App: FC = () => (
  <Container>
    <Home />
    <Test message=" How are you" />
  </Container>
);

export default App;
