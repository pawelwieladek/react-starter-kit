import { List } from 'immutable';

export const TODOS_REQUEST = 'LOAD_TODOS_REQUEST';
export const TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

function todosRequest() {
    return {
        type: TODOS_REQUEST
    };
}

function todosSuccess(items) {
    return {
        type: TODOS_SUCCESS,
        items: List(items)
    };
}

function todosFailure(errorMessage) {
    return {
        type: TODOS_FAILURE,
        errorMessage
    };
}

function fetchTodos() {
    return Promise.resolve([
        {
            content: 'Learn React',
            completed: true
        },
        {
            content: 'Use Redux',
            completed: false
        }
    ]);
}

export function loadTodos() {
    return dispatch => {
        dispatch(todosRequest());
        fetchTodos()
            .then(items => dispatch(todosSuccess(items)))
            .catch(error => dispatch(todosFailure(error.message)));
    }
}
