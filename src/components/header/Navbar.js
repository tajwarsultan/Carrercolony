import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import { MyButton } from '../button/MyButton';
import "./NavbarStyle.css"

export const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand='lg' variant='light'>
			<Container>
				<Navbar.Brand href='#home'>
					<div className="Main">
						<img className="Img" src={logo}  />
						<div className="name">
						<h1 className="Carrercolony">Carrercolony</h1>
						</div>
					</div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto ab'>
						<NavDropdown title='Find Freelancer' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Another action
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title='Find Work?' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Another action
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href='#deets'>Why Carrercolony?</Nav.Link>
						<Nav.Link eventKey={2} href='#memes'>
							How it works?
						</Nav.Link>
						<Nav.Link eventKey={2} href='#memes'>
							login
						</Nav.Link>
						<MyButton title="Sign Up" bg=" #00B7E3" color="white"/>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
