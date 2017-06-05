import React from 'react';
import PropTypes from 'prop-types';

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.initialValue
        };
    }

    static propTypes = {
        initialValue: PropTypes.number
    };

    static defaultProps = {
        initialValue: 0
    };

    increment() {
        this.setState({
            value: this.state.value + 1
        });
    };

    reset() {
        this.setState({
            value: this.props.initialValue
        });
    };

    render() {
        return (
            <div>
                <h1 ref="value">{this.state.value}</h1>
                <button ref="increment" onClick={() => this.increment()}>Increment</button>
                <button ref="reset" onClick={() => this.reset()}>Reset</button>
            </div>
        );
    }
}
