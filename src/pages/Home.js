import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="Our Rooms" subtitle="Deluxe room starting at ₹3299 only">
          <Link to="/rooms" className="btn-primary">
            explore rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
