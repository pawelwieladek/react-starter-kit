import { combineReducers } from 'redux';

import { todos } from './todos';

export const rootReducer = combineReducers({ todos });