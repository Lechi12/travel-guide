import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Form,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const predefinedDestinations = [
  {
    id: 1,
    name: "Paris",
    description: "City of love, iconic landmarks, and world-class art.",
    img: "https://th.bing.com/th/id/OIP.z60UtOveMEm9QA1sAxutjQHaEK?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    name: "New York",
    description:
      "The city that never sleeps, a global hub of culture and entertainment.",
    img: "https://www.goodfreephotos.com/albums/united-states/new-york/new-york-city/new-york-cityscape-with-lighted-up-skyscrapers.jpg",
  },
  {
    id: 3,
    name: "Tokyo",
    description:
      "A blend of modernity and tradition, with vibrant city life and ancient temples.",
    img: "https://img.freepik.com/premium-photo/tokyo-cityscape_959815-382.jpg",
  },
  {
    id: 4,
    name: "London",
    description: "Home to Big Ben, Buckingham Palace, and rich history.",
    img: "https://www.publicdomainpictures.net/pictures/230000/velka/london-cityscape.jpg",
  },
  {
    id: 5,
    name: "Dubai",
    description:
      "Futuristic skyscrapers, luxury shopping, and desert adventures.",
    img: "https://th.bing.com/th/id/OIP.VSAzLAkzRY_vY3cj_i3QEgHaFA?rs=1&pid=ImgDetMain",
  },
  {
    id: 6,
    name: "Rome",
    description: "The Eternal City with ancient ruins and the Vatican.",
    img: "https://th.bing.com/th/id/OIP.Xt8MRFDc5zQzXRtRqbjqnwHaEK?rs=1&pid=ImgDetMain",
  },
];

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(predefinedDestinations);
  const [isCityFound, setIsCityFound] = useState(true);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();

    // Filter destinations by name (case insensitive)
    const filteredDestinations = predefinedDestinations.filter((destination) =>
      destination.name.toLowerCase().includes(query)
    );

    if (filteredDestinations.length > 0) {
      setSearchResults(filteredDestinations);
      setIsCityFound(true);
      return;
    }

    try {
      const response = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}&limit=5`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        }
      );

      const data = await response.json();
      if (data.data.length > 0) {
        const cities = data.data.map((city: any, index: number) => ({
          id: predefinedDestinations.length + index + 1, // Generate an ID for new cities
          name: city.name,
          description: `Explore ${city.name}`,
          img: "https://via.placeholder.com/300x200", // Placeholder image
        }));
        setSearchResults(cities);
        setIsCityFound(true);
      } else {
        setIsCityFound(false);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
      setIsCityFound(false);
    }
  };

  return (
    <>
      <Container fluid className="bg-primary text-white text-center py-5">
        <h1 className="display-4 fw-bold">Find Your Perfect Destination</h1>
        <p className="lead">
          Book flights, hotels, and tours at the best prices
        </p>

        <Form
          className="d-flex justify-content-center mt-3"
          onSubmit={handleSearchSubmit}
        >
          <FormControl
            type="search"
            placeholder="Where to?"
            className="me-2 w-50 shadow-sm text-center"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button variant="light" className="fw-semibold" type="submit">
            Search
          </Button>
        </Form>
      </Container>

      {/* Search Results */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Search Results</h2>
        {isCityFound ? (
          <Row>
            {searchResults.map((destination) => (
              <Col key={destination.id} md={4} className="mb-4">
                <div className="card">
                  <img
                    src={destination.img}
                    className="card-img-top"
                    alt={destination.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{destination.name}</h5>
                    <p className="card-text">{destination.description}</p>
                    <Link
                      to={`/destinations/${destination.name
                        .toLowerCase()
                        .replace(/\s+/g, "")}`}
                      className="btn btn-primary"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <p className="text-center text-danger">
            No results found. Try another city.
          </p>
        )}
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>
          &copy; {new Date().getFullYear()} Travel Guide. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
