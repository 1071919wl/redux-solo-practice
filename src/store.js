import {createStore} from 'redux';
import allReducers from './combine-reducer.js'

const store = createStore(allReducers);

export default store