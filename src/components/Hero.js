import React from "react";

export default function Hero({ marketing, children }) {
  const herocomponent = marketing ? "defaultMarket" : "defaultHero";
  return <div className={herocomponent}>{children}</div>;
}
