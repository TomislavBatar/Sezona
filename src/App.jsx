import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pocetna from './pages/Pocetna/Pocetna';
import Proizvodi from './pages/Proizvodi/Proizvodi';
import PrijavaStete from './pages/PrijavaStete/PrijavaStete';
import OnlinePolisa from './pages/OnlinePolisa/OnlinePolisa';
import ONama from './pages/ONama/ONama';
import Poslovnice from './pages/Poslovnice/Poslovnice';
import Vijesti from './pages/Vijesti/Vijesti';
import Kontakt from './pages/Kontakt/Kontakt';
import NoMatch from './pages/NoMatch/NoMatch';

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={Pocetna} />
					{/* <Route path="/proizvodi" component={Proizvodi} />
					<Route path="/prijava-stete" component={PrijavaStete} />
					<Route path="/online-polisa" component={OnlinePolisa} />
					<Route path="/o-nama" component={ONama} />
					<Route path="/poslovnice" component={Poslovnice} />
					<Route path="/vijesti" component={Vijesti} />
					<Route path="/kontakt" component={Kontakt} /> */}
					<Route component={NoMatch} />
				</Switch>
			</React.Fragment>
		);
	}
}
