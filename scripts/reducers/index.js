import { combineReducers } from 'redux';

import { TODOS_REQUEST, TODOS_SUCCESS, TODOS_FAILURE } from '../actions';

function todos(state = {
    items: [],
    isLoading: false,
    errorMessage: null
}, action) {
    switch(action.type) {
        case TODOS_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
                errorMessage: null
            });
        case TODOS_SUCCESS:
            return Object.assign({}, state, {
                items: action.items,
                isLoading: false,
                errorMessage: null
            });
        case TODOS_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                errorMessage: action.errorMessage
            });
        default:
            return state;
    }
}

export const rootReducer = combineReducers({ todos });