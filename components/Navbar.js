import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Link from "next/link";

const RBNavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" id="myNavbar">
      <Navbar.Brand href="/">
        <img src="/images/Brads Pizza-logos.jpeg" height="50"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="myNavItem">
          Link to{" "}
          <Link href="/">
            <a>Home</a>
          </Link>
          <Nav.Link href="contact" id="myNavItem">
            Contact
          </Nav.Link>
          <Nav.Link href="about" id="myNavItem">
            About Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default RBNavBar;
