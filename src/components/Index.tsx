'use strict';

import * as React from 'react';
import Bitcoin from './Bitcoin';

interface IndexProps {
	actions: any;
};

class Index extends React.Component<IndexProps, void> {
	public Actions : any = this.props.actions;

	render() : JSX.Element {
		return (
			<section className= 'container' >
				<div className='jumbotron'>
					<h1>Bitcoin Prices With Redux</h1>
					<p>
						A React and Redux Application using Typescript to Check the Price of Bitcoin
						</p>
					</div>
				<hr/>
				<Bitcoin></Bitcoin>
			</section >
		);
	};
}

export default Index;
