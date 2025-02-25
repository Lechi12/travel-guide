import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Bookings: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} to ${formData.destination}`);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Book Your Trip</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Destination</Form.Label>
          <Form.Select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          >
            <option value="">Select a destination</option>
            <option value="Paris">Paris</option>
            <option value="Bali">Bali</option>
            <option value="New York">New York</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Travel Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Confirm Booking
        </Button>
      </Form>
    </Container>
  );
};

export default Bookings;
