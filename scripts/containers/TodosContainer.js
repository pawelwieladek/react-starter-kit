import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { loadTodos } from '../actions/todos';

const mapStateToProps = (state) => {
    const { items, isLoading, errorMessage } = state.todos.toJS();
    return {
        items,
        isLoading,
        errorMessage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInit: () => {
            dispatch(loadTodos());
        }
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export class TodosContainer extends Component {
    componentDidMount() {
        this.props.onInit();
    }

    render() {
        return (
            <ul>
                {this.props.items.map((item, index) => <li key={index}>{item.content}</li>)}
            </ul>
        );
    }
}