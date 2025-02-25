import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Import global styles
import NavbarComponent from "./components/Navbar"; // Updated import
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";
import Top10Destinations from "./pages/Top10Destinations";
import PackingLightGuide from "./pages/PackingLightGuide";
import DestinationDetail from "./pages/DestinationDetail"; // Import this!
import Flights from "./pages/Flights";

const destinations = [
  {
    name: "Paris",
    description: "City of love",
    imageUrl:
      "https://usralls.org/wp-content/uploads/2019/04/cityscape-of-paris-pg4gla3-1.jpg",
    location: "France",
    price: 250,
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    name: "Bali",
    description: "Tropical paradise",
    imageUrl:
      "https://th.bing.com/th/id/R.8004fbbb96562325a5b6f3e04ade4847?rik=LpxfzXC7w1byBQ&pid=ImgRaw&r=0",
    location: "Indonesia",
    price: 180,
    latitude: -8.3405,
    longitude: 115.092,
  },
  {
    name: "New York",
    description: "The Big Apple",
    imageUrl:
      "https://th.bing.com/th/id/OIP.y-7uZYn2qJM8_yHBFpxjIAHaFk?w=193&h=180&c=7&r=0&o=5&pid=1.7",
    location: "USA",
    price: 350,
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    name: "Tokyo",
    description: "A blend of modern and traditional",
    imageUrl:
      "https://img.freepik.com/premium-photo/tokyo-cityscape_959815-382.jpg",
    location: "Japan",
    price: 200,
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    name: "Sydney",
    description: "Harbor city with iconic landmarks",
    imageUrl:
      "https://th.bing.com/th/id/OIP.Zk3krZupGsLNdYWPnt09QQHaE5?rs=1&pid=ImgDetMain",
    location: "Australia",
    price: 300,
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    name: "London",
    description: "A city rich in history and culture",
    imageUrl:
      "https://th.bing.com/th/id/OIP.CmFUI2mus6uMZ7XQpVX2dAHaEo?rs=1&pid=ImgDetMain",
    location: "UK",
    price: 280,
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    name: "Dubai",
    description: "A futuristic city in the desert",
    imageUrl:
      "https://th.bing.com/th/id/R.a4131e6a1d4b49b4b44efa612c6f803b?rik=ZpWx67OvxtAvUw&pid=ImgRaw&r=0",
    location: "UAE",
    price: 400,
    latitude: 25.276987,
    longitude: 55.296249,
  },
  {
    name: "Rome",
    description: "The Eternal City",
    imageUrl:
      "https://th.bing.com/th/id/OIP.ZiVSUdNXwbIz0rLm5eo4kwHaEp?rs=1&pid=ImgDetMain",
    location: "Italy",
    price: 270,
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    name: "Santorini",
    description: "Stunning Greek island with whitewashed buildings",
    imageUrl:
      "https://th.bing.com/th/id/OIP.6gQCrjeNpMEdiFX0uGU-YgHaLK?rs=1&pid=ImgDetMain",
    location: "Greece",
    price: 230,
    latitude: 36.3932,
    longitude: 25.4615,
  },
];

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <NavbarComponent /> {/* Navbar at the top */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/destinations"
              element={<Destinations destinations={destinations} />}
            />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/blog/5-tips-for-traveling-on-a-budget"
              element={<BlogDetail />}
            />
            <Route
              path="/blog/top-10-destinations-2025"
              element={<Top10Destinations />}
            />
            <Route
              path="/blog/packing-light-guide"
              element={<PackingLightGuide />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
