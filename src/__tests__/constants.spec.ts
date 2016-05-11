'use strict';

import { expect } from 'chai';
import * as ActionTypes from '../constants/ActionTypes';

describe('constants suite', () => { 

	it('should have GET_PRICE', () => {
    	expect(ActionTypes.GET_PRICE).to.equal('GET_PRICE');
  	});

  	it('should have GET_CURRENCIES', () => {
    	expect(ActionTypes.GET_CURRENCIES).to.equal('GET_CURRENCIES');
  	});

});