import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const ActionBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="NAV">
        <Container>
          <Navbar.Brand className="fw-bold fs-3 ms-3" href="#home">
            Function Point
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default ActionBar;
