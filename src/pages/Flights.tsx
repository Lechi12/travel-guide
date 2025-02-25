import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

const Flights: React.FC = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flights, setFlights] = useState<any[]>([]);
  const [error, setError] = useState("");

  // Use Vite environment variable format
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const API_URL =
    "https://partners.api.skyscanner.net/apiservices/v3/flights/indicative/search";

  if (import.meta.env.DEV) {
    console.log("🔑 API Key:", API_KEY); // Debugging API Key (Only in development)
  }
  if (!API_KEY) {
    console.error("❌ API Key is missing!");
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🔄 Form submitted!");

    console.log("📍 Departure:", departure);
    console.log("📍 Destination:", destination);
    console.log("📆 Departure Date:", departureDate);

    setError("");
    setFlights([]);

    if (!departure || !destination || !departureDate) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      console.log("🚀 Sending API request...");
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify({
          query: {
            market: "US",
            locale: "en-US",
            currency: "USD",
            queryLegs: [
              {
                originPlaceId: { entityId: departure },
                destinationPlaceId: { entityId: destination },
                date: {
                  year: Number(departureDate.split("-")[0]),
                  month: Number(departureDate.split("-")[1]),
                  day: Number(departureDate.split("-")[2]),
                },
              },
            ],
          },
        }),
      });

      console.log("🔄 Waiting for response...");
      const data = await response.json();
      console.log("✅ API Response:", data);

      if (data?.itineraries?.length) {
        setFlights(data.itineraries);
      } else {
        setError("No flights found. Try again with different details.");
      }
    } catch (err) {
      console.error("❌ API Error:", err);
      setError("Error fetching flights. Check your API key and network.");
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center">Find Your Perfect Flight</h2>
      <p className="text-center">
        Search and book flights to your dream destinations.
      </p>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("✅ Form Submitted! Running handleSearch...");
          handleSearch(e);
        }}
        className="mt-3"
      >
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Departure City (IATA Code)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter departure code (e.g., JFK)"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Destination City (IATA Code)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter destination code (e.g., LHR)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Departure Date</Form.Label>
              <Form.Control
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Return Date (Optional)</Form.Label>
              <Form.Control
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Search Flights
          </Button>
        </div>
      </Form>

      {error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}

      {flights.length > 0 && (
        <div className="mt-4">
          <h3>Available Flights</h3>
          {flights.map((flight, index) => (
            <div key={index} className="border p-3 mb-2">
              <p>
                <strong>From:</strong> {departure} → <strong>To:</strong>{" "}
                {destination}
              </p>
              <p>
                <strong>Price:</strong> ${flight.price?.amount ?? "N/A"}
              </p>
              <Button variant="success">Book Now</Button>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Flights;
