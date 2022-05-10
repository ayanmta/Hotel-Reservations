import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Hero>
      <Banner>
        <Link to="/home">Home</Link>
      </Banner>
    </Hero>
  );
};

export default Error;
