import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Link from "next/link";

const RBNavBar = () => {
  return (
    <Navbar bg="LT" expand="lg" id="myNavbar">
      <Navbar.Brand href="/">
        <img src="/images/Brads Pizza-logos.jpeg" height="50"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="myNavItem">
          <Nav.Link href="home" id="myNavItem">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Nav.Link>
          <Nav.Link href="menu" id="myNavItem">
            <Link href="/Menu">
              <a>Menu</a>
            </Link>
          </Nav.Link>
          <Nav.Link href="contact" id="myNavItem">
            <Link href="/contact">
              <a>Home</a>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default RBNavBar;
