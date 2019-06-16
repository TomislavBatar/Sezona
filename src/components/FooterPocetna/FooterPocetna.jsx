import React, { Component } from 'react';
import { Row, Col, Container, Navbar, Form, Image, Button, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// get our fontawesome imports
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Row, Col, Container, Form, Image, Button } from 'react-bootstrap';
// import imgLogoSezonaPocetna from './imgPretragaPocetna/sezona-logo.png';

import './FooterPocetna.css';

export default class FooterPocetna extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="fixed-bottom">
					<Container fluid>
						<Row className="drzava-footer-pocetna">
							<Col>
								<h5 className="drzava-naslov-footer-pocetna text-dark">Bosna i Hercegovina</h5>
							</Col>
						</Row>
						<Row className="justify-content-between px-3 sub-footer-pocetna">
							<div>
								<LinkContainer to="/">
									<span className="linkovi-sub-footer-pocetna text-dark mr-4">O sezoni</span>
								</LinkContainer>
								<LinkContainer to="/">
									<span className="linkovi-sub-footer-pocetna text-dark mr-4">Registruj se</span>
								</LinkContainer>
								<LinkContainer to="/">
									<span className="linkovi-sub-footer-pocetna text-dark mr-4">
										Često postavljena pitanja
									</span>
								</LinkContainer>
							</div>

							<div>
								<span className="copy-sub-footer-pocetna text-dark mr-4">
									© 2019 Sezona - Made with{' '}
									<FontAwesomeIcon style={{ color: 'red' }} icon={faHeart} />
								</span>
							</div>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
