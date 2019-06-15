import React, { Component } from 'react';
import { Navbar, Nav, Row, Col, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavigacijaPocetna.css';

export default class NavigacijaPocetna extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar className="navbar-expand navigacija-pocetna navbar-dark justify-content-between">
					<Container fluid>
						<Navbar.Text>
							<LinkContainer to="/aa">
								<span className="navigacija-pocetna-linkovi text-dark mr-4">Postavi oglas</span>
							</LinkContainer>
							<LinkContainer to="/aa">
								<span className="navigacija-pocetna-linkovi text-dark" href="/">
									Hitni oglasi
								</span>
							</LinkContainer>
						</Navbar.Text>
						<Navbar.Text>
							<LinkContainer to="/aa">
								<Button
									className="prijavi-se-dugme-navigacija-pocetna text-dark"
									variant="outline-secondary"
								>
									Prijavi se
								</Button>
							</LinkContainer>
						</Navbar.Text>
					</Container>
				</Navbar>
			</React.Fragment>
		);
	}
}
