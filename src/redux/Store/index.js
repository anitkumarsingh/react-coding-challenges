import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {counterReducer} from '../Reducers/counter';
import {fetchUsersReducer} from '../Reducers/fetchUsers';


const reducers = combineReducers({
  counterReducer,
  fetchUsersReducer
});

const middleware = [thunk];

const store = createStore(reducers,composeWithDevTools(applyMiddleware(...middleware)));

export default store;