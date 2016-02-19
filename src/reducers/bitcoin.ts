"use strict";

import { assign } from 'lodash';
import { handleActions } from 'redux-actions';
import * as ActionTypes from '../constants/ActionTypes';

let initialState = {};

const bitcoin = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.GET_PRICE:
			return assign({}, state, {
				price: action.data
			});
		case ActionTypes.GET_CURRENCIES:
			return assign({}, state, {
				currency: action.data
			});
		default:
			return state
	}
}

export default bitcoin;