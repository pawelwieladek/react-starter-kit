import { List } from 'immutable';

export const TODOS_REQUEST = 'TODOS_REQUEST';
export const TODOS_SUCCESS = 'TODOS_SUCCESS';
export const TODOS_FAILURE = 'TODOS_FAILURE';

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
        dispatch({
            type: TODOS_REQUEST
        });
        fetchTodos()
            .then(items => dispatch({
                type: TODOS_SUCCESS,
                items: List(items)
            }))
            .catch(error => dispatch({
                type: TODOS_FAILURE,
                error: error.message
            }));
    }
}
