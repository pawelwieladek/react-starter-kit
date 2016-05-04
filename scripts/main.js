import React from 'react';
import { render } from 'react-dom';

import { App } from './app';

require('../styles/main.less');

render(<App />, document.querySelector('#main'));