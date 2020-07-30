import { combineReducers } from 'redux';

import { reduxReducer } from '../config';

let finalReducer: any = combineReducers(reduxReducer);

export default finalReducer;