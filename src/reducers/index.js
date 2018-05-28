import moviereducer from './moviereducer';

import { combineReducers } from 'redux';

export default combineReducers({
    movie : moviereducer,
})