// Deconstructed
import React, { Component, Fragment } from 'react';
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheet.css';

class Header extends Component {
  render(){
    return (
        <div className='Header'>
            <Navbar bg="light" expand="lg" >
                <Container >
                    <Navbar.Brand href="/">Tokyoletes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/search">Search</Nav.Link> 
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    )
  }
}

export default Header;