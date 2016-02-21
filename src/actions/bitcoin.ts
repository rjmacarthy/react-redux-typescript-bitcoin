import * as ActionTypes from '../constants/ActionTypes';
import * as superagent from 'superagent';
import ISimpleDataType from '../abstractions/ISimpleDataType';

module BitcoinActions {

	class ActionsCreators {
		public static getCurrentPrice(data: any): ISimpleDataType {
			return {
				type: ActionTypes.GET_PRICE,
				data: data
			};
		};

		public static getAllCurrencies(data: any): ISimpleDataType {
			return {
				type: ActionTypes.GET_CURRENCIES,
				data: data
			};
		};
	}

	export const fetchPrice = (currency: string): any => {
		return (dispatch: Redux.Dispatch) => {
			superagent.get(`http://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
				.end((err : Error, body : any) => {
					if (!err && (body && body.text)) {
						dispatch(ActionsCreators.getCurrentPrice(JSON.parse(body.text)));
					}
				});
		};
	};

	export const fetchCurrencies = (): any => {
		return (dispatch: Redux.Dispatch) => {
			superagent.get('http://api.coindesk.com/v1/bpi/supported-currencies.json')
				.end((err: Error, body: any) => {
					if (!err && (body && body.text)) {
						dispatch(ActionsCreators.getAllCurrencies(JSON.parse(body.text)));
					}
				});
		};
	};
}

export default BitcoinActions;