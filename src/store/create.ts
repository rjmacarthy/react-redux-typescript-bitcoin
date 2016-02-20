declare var window: any;
import * as thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers/rootReducer';

const store : Redux.Store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk)
	)
);

export default store;