import React, { Component } from 'react';

import { Counter } from './Counter';
import { TodosContainer } from '../containers/TodosContainer';

export class App extends Component {
    render() {
        return (
            <div className="app">
                <TodosContainer />
            </div>
        );
    }
}
