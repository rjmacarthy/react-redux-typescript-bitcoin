/// <reference path='../../typings/tsd.d.ts'/>
'use strict';
import * as React from 'react';

class Header extends React.Component<any, any> {
	render() : JSX.Element {
		return (
			<nav className='navbar navbar-default'>
				<div className="navbar-header">
					<a className="navbar-brand" href="#">Bitcoin Prices with React Redux and Typescript</a>
				</div>
			</nav>
		);
	};
}

export default Header;