import React, { Component } from 'react'

import { Counter } from './counter'

export class App extends Component {
    render() {
        return (
            <div className="app">
                <Counter />
            </div>
        );
    }
}
