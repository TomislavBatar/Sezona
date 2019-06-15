import React, { Component } from 'react';

export default class NoMatch extends Component {
	render() {
		return (
			<React.Fragment>
				<h1>404 err</h1>
				<a href="/"> {'<<'} Nazad</a>
			</React.Fragment>
		);
	}
}
