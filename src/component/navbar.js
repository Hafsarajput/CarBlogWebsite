import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../component/assets/images/logo.png'
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="Wheels-brand" style={{fontSize:'180%'}}><img src={logo} alt='' style={{width:'30%'}} />VintageWheels</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mr-auto" activeKey="/home">
            <Nav.Item>
              <Nav.Link ><Link style={{ color: 'black', textDecoration: 'none',fontSize:'100%' }} to={"/"}>Home</Link></Nav.Link>
            </Nav.Item>

            <NavDropdown title="Categories" id="basic-nav-dropdown" style={{ color: 'black' }}>
              <NavDropdown.Item ><Link style={{ color: 'black', textDecoration: 'none',fontSize:'100%'}} to={"/Category"}>Sports Cars</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link style={{ color: 'black', textDecoration: 'none',fontSize:'100%'}} to={"/Category"}>Luxuary Cars</Link></NavDropdown.Item>
             <NavDropdown.Item ><Link style={{ color: 'black', textDecoration: 'none',fontSize:'100%'}} to={"/Category"}>Domestic Cars</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link ><Link style={{ color: 'black', textDecoration: 'none',fontSize:'100%' }} to={"/about"}>Know US</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" ><Link style={{ color: 'black', textDecoration: 'none',fontSize:'100%'}} to={"/Contact"}>Reach Us</Link></Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
