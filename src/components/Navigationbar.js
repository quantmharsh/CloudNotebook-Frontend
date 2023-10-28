import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function Navigationbar() {
	let location = useLocation();
	useEffect(() => {
		console.log(location.pathname);
	}, [location]);
	let navigate=useNavigate();
	const handleLogout=()=>{
		localStorage.removeItem('token');
		navigate('/Login');

	}

	return (
		<div>
			<Navbar expand="lg" className=" navbar-dark bg-dark">
				<Container>
					<Navbar.Brand href="home">Cloud Notes</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link
								className={`nav-link ${
									location.pathname === "/" ? "active" : ""
								}`}
								href="home">
								Home
							</Nav.Link>
							<Nav.Link
								className={`nav-link ${
									location.pathname === "/about" ? "active" : ""
								}`}
								href="about">
								About
							</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
				{!localStorage.getItem('token')? (
				<><Link to="/Login">
					<Button variant="primary mx-3">Login</Button>
				</Link>
				<Link to="/Signup">
					<Button variant="primary mx-3 ">SignUp</Button>{" "}
				</Link>
				</>) :( <Button onClick={handleLogout} variant="primary mx-3 ">Logout</Button>)}
			</Navbar>
		</div>
	);
}

export default Navigationbar;
