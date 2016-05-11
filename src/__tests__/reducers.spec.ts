'use strict';

import { expect } from 'chai';
import * as ActionTypes from '../constants/ActionTypes';
import bitcoin from '../reducers/bitcoin';

describe('reducers suite', () => {

	it('should return the initial state', () => {
		expect(bitcoin(undefined, {})).to.eql({})
    });

    it('should return the price when it has data', () => {
		expect(bitcoin({}, { type: ActionTypes.GET_PRICE, data : 123 })).to.eql({ price : 123 })
    });

    it('should return the currencies when it has data', () => {
		expect(bitcoin({}, { type: ActionTypes.GET_CURRENCIES, data: 123 })).to.eql({ currency: 123 })
    });

});