import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

require('../styles/main.less');

import { configureStore } from './store/configureStore';
import { rootReducer } from './reducers';
import { App } from './components/app';

const store = configureStore({});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#main')
);
