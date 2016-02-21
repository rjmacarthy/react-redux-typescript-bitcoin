/// <reference path='../../typings/tsd.d.ts'/>
'use strict';

import BitcoinActions from '../actions/bitcoin';
import * as React from 'react';
import SelectInput from './SelectInput';
import { autobind } from 'core-decorators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

interface BitcoinProps {
	bitcoin?: any;
	actions?: any
};

interface BitcoinState {
	selected: string;
	options?: Array<any>
};

class Bitcoin extends React.Component<BitcoinProps, BitcoinState> {
	public Actions : typeof BitcoinActions = this.props.actions;

	constructor(props : any) {
		super(props);
		this.state = {
			selected: 'AED',
			options: []
		};
	}

	static propTypes: React.ValidationMap<any> = {
	  bitcoin: React.PropTypes.object.isRequired,
	  actions: React.PropTypes.object.isRequired
	};

	componentDidMount() : void {
		this.fetchPrice(this.state.selected);
		this.Actions.fetchCurrencies();
	}

	@autobind
	fetchPrice (currency : string) : void {
		this.props.bitcoin.price = null;
		this.setState({
			selected: currency
		});
		this.Actions.fetchPrice(currency);
	}

	render() : JSX.Element {
		const { bitcoin } : any = this.props;
		return (
			<div className='row'>
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<h4>
						Check the price of Bitcoin in your currency
					</h4>
				</div>
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					{bitcoin.currency && bitcoin.currency.length ? (
						<SelectInput action={this.fetchPrice} selected={this.state.selected} options={bitcoin.currency}>
						</SelectInput>
					) :
					null}
				</div>
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-top-20">
					{bitcoin && bitcoin.price && bitcoin.price.bpi ? (
						<p className='alert alert-info'>
							<b>Current price of Bitcoin in {this.state.selected} is: {bitcoin.price.bpi[this.state.selected].rate}</b>
						</p>
					) :
						<p className='alert alert-info'>Loading price...</p>
					}
				</div>
			</div>
		);
	};
}


const mapStateToProps = state => ({
	bitcoin: state.bitcoin
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(BitcoinActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Bitcoin);
