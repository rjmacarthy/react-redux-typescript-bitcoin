'use strict';
import * as React from 'react';

class Footer extends React.Component<any, any> {
	render() : JSX.Element {
		return (
			<footer>
				<hr/>
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p>
						A React, Redux, Typescript, and Bootstrap App by <a href='https://github.com/rjmacarthy'>rjmacarthy</a>
					</p>
				</div>
			</footer>
		);
	};
}

export default Footer;