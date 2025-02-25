import React, { useEffect, useState } from "react";

// Define TypeScript Interfaces for Flight Data
interface AirportInfo {
  airport: string;
  iata: string;
  time: string;
}

interface Airline {
  name: string;
}

interface Flight {
  flight_date: string;
  flight_status: string;
  departure: AirportInfo;
  arrival: AirportInfo;
  airline: Airline;
  flight: {
    iata: string;
  };
}

const FlightData: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlightData = async () => {
      console.log("Fetching flight data...");

      const API_KEY = process.env.REACT_APP_API_KEY; // Use environment variable
      const API_URL = `https://aviationstack.com/v1/flights?access_key=${API_KEY}`;

      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        if (data.data && data.data.length > 0) {
          setFlights(data.data.slice(0, 5)); // Display the first 5 flights
        } else {
          setError("No flight data available.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error fetching flight data.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlightData();
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Available Flights</h1>

      {loading && <p className="text-yellow-400">Loading flight data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-4">
        {flights.map((flight, index) => (
          <li key={index} className="p-4 border border-gray-700 rounded-md">
            <p>
              <strong>Airline:</strong> {flight.airline.name}
            </p>
            <p>
              <strong>Flight Number:</strong> {flight.flight.iata}
            </p>
            <p>
              <strong>Departure:</strong> {flight.departure.airport} (
              {flight.departure.iata}) at {flight.departure.time}
            </p>
            <p>
              <strong>Arrival:</strong> {flight.arrival.airport} (
              {flight.arrival.iata}) at {flight.arrival.time}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={
                  flight.flight_status === "active"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {flight.flight_status.toUpperCase()}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightData;
