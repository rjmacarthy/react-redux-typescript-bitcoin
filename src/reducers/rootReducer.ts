import bitcoin from './bitcoin';
import { combineReducers } from 'redux';

const rootReducer : Redux.Reducer = combineReducers({
	bitcoin : bitcoin
});
export { rootReducer };