import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import "./Destinations.css";

interface Destination {
  name: string;
  description: string;
  imageUrl: string;
  price?: number;
  location?: string;
}

const Destinations: React.FC<{ destinations: Destination[] }> = ({
  destinations,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const uniqueLocations = [
    ...new Set(destinations.map((dest) => dest.location).filter(Boolean)),
  ];

  const getPriceRange = (price?: number) => {
    if (!price) return "Unknown";
    if (price < 50) return "Below $50";
    if (price >= 50 && price < 100) return "Under $100";
    if (price >= 100 && price <= 300) return "$100 - $300";
    return "Above $300";
  };

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLocation =
      selectedLocation === "" || destination.location === selectedLocation;
    const matchesPrice =
      priceRange === "" || getPriceRange(destination.price) === priceRange;
    return matchesSearch && matchesLocation && matchesPrice;
  });

  return (
    <Container>
      <h2 className="mt-4 text-center">Explore Destinations</h2>
      <Row className="mb-4">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">All Price Ranges</option>
            <option value="Below $50">Below $50</option>
            <option value="Under $100">Under $100</option>
            <option value="$100 - $300">$100 - $300</option>
            <option value="Above $300">Above $300</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination) => (
            <Col key={destination.name} xs={12} sm={6} md={4}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src={destination.imageUrl || "fallback-image.jpg"}
                  alt={destination.name}
                />
                <Card.Body>
                  <Card.Title>{destination.name}</Card.Title>
                  <Card.Text>{destination.description}</Card.Text>
                  <Card.Text>
                    <strong>Location:</strong>{" "}
                    {destination.location || "Unknown"}
                  </Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> {getPriceRange(destination.price)}
                  </Card.Text>

                  <div className="button-container">
                    <Button
                      variant="primary"
                      as={Link}
                      to={`/destinations/${destination.name.toLowerCase()}`}
                    >
                      View More
                    </Button>
                    <Button variant="success" as={Link} to="/bookings">
                      Book Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">No destinations found.</p>
        )}
      </Row>
    </Container>
  );
};

export default Destinations;
