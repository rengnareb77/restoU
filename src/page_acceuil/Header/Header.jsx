import React from "react";
import "../index.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MenuDeroulant from "./MenuDeroulant";

class Header extends React.Component {
  render() {
    return (
        <div className="Header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">
                <img
                    src="./logo192.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    id="logo"   
                />
               App Restau U</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Restau U" id="collasible-nav-dropdown">
                       <MenuDeroulant name = "Kergouat"></MenuDeroulant>
                       <MenuDeroulant name = "Armen"></MenuDeroulant>
                       <MenuDeroulant name = "Autres"></MenuDeroulant>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    );
  }
}
export default Header;
