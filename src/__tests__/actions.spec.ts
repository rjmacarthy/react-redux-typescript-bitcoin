'use strict';
import BitcoinActions from '../actions/bitcoin';
import { expect } from 'chai';
import * as nock from 'nock';
import configureStore from './configureStore';
import * as ActionTypes from '../constants/ActionTypes';
import * as thunk from 'redux-thunk';
const middlewares = [thunk];
const createMockStore = configureStore(middlewares);

describe('actions suite', () => {

	it('should be a function', ()=>{
		expect(BitcoinActions.fetchPrice('USD')).to.be.an('function');
		expect(BitcoinActions.fetchCurrencies()).to.be.an('function');
	});

	describe('async bitcoin actions', () => {
		afterEach(() => {
			nock.cleanAll();
		});

		it(`should dispatch ${ActionTypes.GET_CURRENCIES} when fetching currencies is done`, (done) => {
			nock('http://api.coindesk.com/v1')
				.get('/bpi/supported-currencies.json')
				.reply(200, { payload: 'OK!' });

			const expectedActions = [
				{ type: ActionTypes.GET_CURRENCIES, data: { payload: 'OK!' } }
			];

			const store = createMockStore({ payload: 'OK!' }, expectedActions, done);
			store.dispatch(BitcoinActions.fetchCurrencies());
		});

		it(`should dispatch ${ActionTypes.GET_PRICE} when fetching price is done`, (done) => {
			nock('http://api.coindesk.com/v1')
				.get('/bpi/currentprice/USD.json')
				.reply(200, { payload: 'OK!' });

			const expectedActions = [
				{ type: ActionTypes.GET_PRICE, data: { payload: 'OK!' } }
			];

			const store = createMockStore({ payload: 'OK!' }, expectedActions, done);
			store.dispatch(BitcoinActions.fetchPrice('USD'));
		});

	});

});