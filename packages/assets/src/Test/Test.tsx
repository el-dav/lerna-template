import React, { FC } from 'react';

type Props = {
  message?: string;
};

const Test: FC<Props> = props => (
  <h1>Hello there Lucy!{'' + props.message || ''}</h1>
);

export default Test;
