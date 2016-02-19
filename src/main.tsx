/// <reference path='../typings/tsd.d.ts'/>
declare var window: any;
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import Index from './components/Index';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory , IndexRedirect  } from 'react-router';
import storeConfig from './store';

const store = storeConfig;

ReactDOM.render(
	<Provider store={store}>
		<Router history={ hashHistory }>
		   <Route path="/" component={App}>
				<IndexRedirect to="index" />
				<Route path="index" component={Index}/>
		   </Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);