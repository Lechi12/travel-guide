import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
          Travel Guide
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fw-semibold text-white">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/destinations"
              className="fw-semibold text-white"
            >
              Destinations
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/flights"
              className="fw-semibold text-white"
            >
              Flights
            </Nav.Link>{" "}
            {/* ✅ Added Flights */}
            <Nav.Link
              as={Link}
              to="/bookings"
              className="fw-semibold text-white"
            >
              Bookings
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="fw-semibold text-white"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
