import { createStore } from 'redux';
import LivrosReducer from './reducer';

const store = createStore(LivrosReducer);

export default store;