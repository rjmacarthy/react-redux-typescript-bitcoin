/// <reference path='../../typings/tsd.d.ts'/>
'use strict';

import * as React from 'react';
import Bitcoin from './Bitcoin';

class Index extends React.Component<any, any> {
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
