import React from 'react';
import { render } from 'react-dom';

import ProgressTracker from '../../src/index';

const Demo = () => (
  <div>
    <h1>react-circular-progress Demo</h1>
    <ProgressTracker progress={15} />
  </div>
);

render(<Demo />, document.querySelector('#demo'));
