import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Room from "../components/Room";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Loading from "../components/Loading";

const Marketing = () => {
  let {
    loading,
    rooms: rooms,
    propertyData: propertyData,
  } = useContext(RoomContext);
  console.log(propertyData, rooms, "propdata");

  propertyData = propertyData.map((room) => (
    <Room key={room.id} value={room} property={true} />
  ));
  return (
    <>
      <Hero marketing={true}>
        <Banner
          title="Our Properties"
          subtitle="Offering Best Mountain escapes"
        ></Banner>
      </Hero>
      <section className="featured-rooms">
        <div className="featured-rooms-center">
          {loading ? <Loading /> : propertyData}
        </div>
      </section>
    </>
  );
};

export default Marketing;
