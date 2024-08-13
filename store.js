import { createStore, combineReducers } from 'redux';
import widgetsReducer from './reducers/widgetsReducer';

const rootReducer = combineReducers({
  widgets: widgetsReducer
});

const store = createStore(rootReducer);

export default store;