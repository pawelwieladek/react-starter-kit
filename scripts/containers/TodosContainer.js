import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { loadTodos } from '../actions';

const mapStateToProps = (state) => {
    return {
        items: state.todos.items,
        isLoading: state.todos.isLoading,
        errorMessage: state.todos.errorMessage
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