import React, { Component } from 'react';
import NavigacijaPocetna from '../../components/NavigacijaPocetna/NavigacijaPocetna';
import PretragaPocetna from '../../components/PretragaPocetna/PretragaPocetna';
import FooterPocetna from '../../components/FooterPocetna/FooterPocetna';

export default class Pocetna extends Component {
	render() {
		return (
			<React.Fragment>
				<NavigacijaPocetna />
				<PretragaPocetna />
				<FooterPocetna />
			</React.Fragment>
		);
	}
}
