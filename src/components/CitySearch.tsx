import React, { useState } from "react";
import { Button, Form, FormControl, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const predefinedDestinations = [
  {
    name: "Paris",
    description: "City of love, iconic landmarks, and world-class art.",
  },
  {
    name: "New York",
    description:
      "The city that never sleeps, a global hub of culture and entertainment.",
  },
  {
    name: "Tokyo",
    description:
      "A blend of modernity and tradition, with vibrant city life and ancient temples.",
  },
];

const CitySearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(predefinedDestinations);
  const [isCityFound, setIsCityFound] = useState(true);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredDestinations = predefinedDestinations.filter((destination) =>
      destination.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setIsCityFound(filteredDestinations.length > 0);
    setSearchResults(filteredDestinations);
  };

  return (
    <div className="text-center mt-3">
      <Form
        className="d-flex justify-content-center"
        onSubmit={handleSearchSubmit}
      >
        <FormControl
          type="search"
          placeholder="Search for a city..."
          className="me-2 w-50 text-center shadow-sm"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Button variant="light" className="fw-semibold" type="submit">
          Search
        </Button>
      </Form>

      {!isCityFound && (
        <p className="text-danger mt-2">No matching cities found.</p>
      )}

      {isCityFound && searchQuery && (
        <ListGroup className="mt-3">
          {searchResults.map((destination, index) => (
            <ListGroup.Item key={index} className="text-start">
              <strong>{destination.name}</strong> - {destination.description}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default CitySearch;
