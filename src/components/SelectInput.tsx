'use strict';
import * as React from 'react';
import { autobind } from 'core-decorators';
import Currency from '../models/Currency';

interface SelectProps {
	selected: any;
	options: Array<Currency>;
	action: (any) => void;
};

interface SelectState {
	selected: string;
};

class SelectInput extends React.Component<SelectProps, SelectState> {
	public Action : (any) => void = this.props.action;

	constructor(props : any) {
		super(props);
		this.state = {
			selected: this.props.selected
		};
	}

	static propTypes: React.ValidationMap<any> = {
	  options: React.PropTypes.array.isRequired,
	  selected: React.PropTypes.string.isRequired,
	  action: React.PropTypes.func.isRequired
	};

	@autobind 
	handleChange (e : any) : void {
		this.setState({
			selected: e.target.value
		});
		this.Action(e.target.value);
	}

	render() : JSX.Element {
		const { options, context } : any = this.props;
		return (
			<div className="row">
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<select onChange={this.handleChange.bind(context)} className='form-control'>
				        {options.map((opt : Currency) => {
							return <option key={opt.currency} value={opt.currency}>{opt.country}</option>;
				        })}
					</select>
				</div>
			</div>
		);
	};
}

export default SelectInput;