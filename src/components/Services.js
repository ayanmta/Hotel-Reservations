import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
  const [Services] = useState([
    {
      icon: <FaCocktail />,
      title: "Tasty Food",
      info: "offering delicious and hygenic food as per your requirement",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "located near beautiful hikes and trails",
    },
    {
      icon: <FaShuttleVan />,
      title: "Shuttles",
      info: "frequent buses and shuttles are available to mall road",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info: "",
    },
  ]);
  return (
    <section className="services">
      <div>
        <Title title="Services" />
        <div className="services-center">
          {Services.map((item) => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
