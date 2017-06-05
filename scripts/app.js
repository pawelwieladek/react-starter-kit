import React from 'react'

import { Counter } from './counter'

export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Counter />
            </div>
        );
    }
}
