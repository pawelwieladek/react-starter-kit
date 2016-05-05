import { combineReducers } from 'redux';
import { Map, List } from 'immutable';

import { TODOS_REQUEST, TODOS_SUCCESS, TODOS_FAILURE } from '../actions/todos';

export const initialState = Map({
    items: List(),
    isLoading: false,
    errorMessage: null
});

export function todos(state = initialState, action) {
    switch(action.type) {
        case TODOS_REQUEST:
            return state.merge({
                isLoading: true,
                errorMessage: null
            });
        case TODOS_SUCCESS:
            return state.merge({
                items: action.items,
                isLoading: false,
                errorMessage: null
            });
        case TODOS_FAILURE:
            return state.merge({
                isLoading: false,
                errorMessage: action.errorMessage
            });
        default:
            return state;
    }
}