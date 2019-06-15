import React, { Component } from 'react';
import NavigacijaPocetna from '../../components/NavigacijaPocetna/NavigacijaPocetna';
import PretragaPocetna from '../../components/PretragaPocetna/PretragaPocetna';

export default class Pocetna extends Component {
	render() {
		return (
			<React.Fragment>
				<NavigacijaPocetna />
				<PretragaPocetna />
			</React.Fragment>
		);
	}
}
