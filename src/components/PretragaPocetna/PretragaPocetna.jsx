import React, { Component } from 'react';
import { Row, Col, Container, Form, Image, Button } from 'react-bootstrap';
import imgLogoSezonaPocetna from './imgPretragaPocetna/sezona-logo.png';
import './PretragaPocetna.css';
export default class PretragaPocetna extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="">
					<Form>
						<Container className="vertical-align-pretraga-pocetna">
							<Row className="">
								<Col lg={2} className="logo-sezona-pretraga-pocetna-flex">
									<Image
										className="logo-sezona-pretraga-pocetna"
										src={imgLogoSezonaPocetna}
										alt="Logo sezona"
										fluid
									/>
								</Col>
								<Col lg={4}>
									<Form.Group>
										<Form.Label>
											<span className="kad-gjde-pretraga-pocetna">Kada</span> <br />
											<span className="kad-gjde-opis-pretraga-pocetna">dani koje bi radio</span>
										</Form.Label>

										<Form.Control
											className="lokacija-datum-input-pretraga-pocetna"
											placeholder="First name"
											type="date"
										/>
									</Form.Group>
								</Col>
								<Col lg={4}>
									<Form.Group controlId="#">
										<Form.Label>
											<span className="kad-gjde-pretraga-pocetna">Gdje</span> <br />
											<span className="kad-gjde-opis-pretraga-pocetna">
												lokacija na kojoj se obavlja posao
											</span>
										</Form.Label>
										<Form.Control className="lokacija-datum-input-pretraga-pocetna" as="select">
											<option>Sve dostupne lokacije</option>
											<option>Banja Luka</option>
											<option>Sarajevo</option>
											<option>Trebinje</option>
											<option>Doboj</option>
										</Form.Control>
									</Form.Group>
								</Col>
								<Col lg={2} className="flex-dugme-pretraga-pocetna">
									<Button className="dugme-pretraga-pocetna" block variant="primary">
										Pronađi posao
									</Button>
								</Col>
							</Row>
						</Container>
					</Form>
				</div>
			</React.Fragment>
		);
	}
}
