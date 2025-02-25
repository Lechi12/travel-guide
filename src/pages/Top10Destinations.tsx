import React from "react";
import { Container } from "react-bootstrap";
import "./Top10Destinations.css"; // Import the CSS file

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    description:
      "Enjoy the beauty of the Eiffel Tower, fine dining, and the romantic atmosphere.",
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    description:
      "A perfect mix of tradition and futuristic technology, Tokyo is a must-visit.",
  },
  {
    id: 3,
    name: "Bali, Indonesia",
    description:
      "Beautiful beaches, rich culture, and breathtaking landscapes make Bali a top choice.",
  },
  {
    id: 4,
    name: "Santorini, Greece",
    description:
      "Famous for its white-washed buildings and stunning sunsets over the Aegean Sea.",
  },
  {
    id: 5,
    name: "New York City, USA",
    description:
      "The city that never sleeps, full of attractions, theaters, and amazing food.",
  },
  {
    id: 6,
    name: "Cape Town, South Africa",
    description:
      "A destination with stunning landscapes, vineyards, and amazing wildlife.",
  },
  {
    id: 7,
    name: "Dubai, UAE",
    description:
      "Luxury shopping, modern architecture, and exciting adventures in the desert.",
  },
  {
    id: 8,
    name: "Rome, Italy",
    description:
      "Home to ancient ruins, stunning art, and some of the best cuisine in the world.",
  },
  {
    id: 9,
    name: "Sydney, Australia",
    description:
      "Famous for its Opera House, beautiful beaches, and a vibrant culture.",
  },
  {
    id: 10,
    name: "Machu Picchu, Peru",
    description: "A breathtaking historical site surrounded by lush mountains.",
  },
];

const Top10Destinations: React.FC = () => {
  return (
    <Container className="mt-5 py-5">
      <h1 className="text-center fw-bold">Top 10 Destinations in 2025</h1>
      <p className="text-center text-muted">
        Explore the best places to visit in 2025!
      </p>

      <div className="mt-4">
        {destinations.map((destination) => (
          <section key={destination.id} className="mb-4">
            <h3>
              {destination.id}. {destination.name}
            </h3>
            <p>{destination.description}</p>
          </section>
        ))}
      </div>
    </Container>
  );
};

export default Top10Destinations;
