/// <reference path='../../typings/tsd.d.ts'/>
'use strict';

import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

class App extends React.Component<any, any> {
	render() : JSX.Element {
		const { children } : any = this.props;
		return (
			<div>
				<Header></Header>
				{children}
				<Footer></Footer>
			</div>
		);
	};
};

export default App;