import React from 'react'
import { Nav, Navbar, Container, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandImage from '../navbar/ENHD.png'
import Image from 'react-bootstrap/Image'


const navbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Image src={BrandImage} className="w-25 p-3" ></Image>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar ms-auto">
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;