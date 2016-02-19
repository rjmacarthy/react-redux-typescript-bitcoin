import bitcoin from './bitcoin';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	bitcoin : bitcoin
});
export { rootReducer };