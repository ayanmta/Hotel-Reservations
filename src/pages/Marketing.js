import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

import Room from "../components/Room";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Loading from "../components/Loading";

const Marketing = () => {
  let { loading, rooms, propertyData } = useContext(RoomContext);
  console.log(propertyData, rooms, "propdata");

  propertyData = propertyData.map((room) => (
    <Room key={room.id} value={room} property={true} />
  ));
  return (
    <>
      <Hero marketing={true}>
        <Banner
          title="The Shilla Bagh Properties"
          subtitle="Offering Best Mountain escapes"
        ></Banner>
      </Hero>
      <section className="featured-rooms">
      <div className="single-room-info">
          <article className="desc">
            <h3>Explore our properties:</h3>
          </article>
          </div>

        <div className="featured-rooms-center">
          {loading ? <Loading /> : propertyData}
        </div>
      </section>
      
    </>
  );
};

export default Marketing;
