'use strict';

import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

interface AppProps {
	children: any;
};

class App extends React.Component<AppProps, void> {
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