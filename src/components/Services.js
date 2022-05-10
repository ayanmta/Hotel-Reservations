import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
  const [Services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
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
