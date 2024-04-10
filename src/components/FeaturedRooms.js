import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
const FeaturedRooms = (property) => {
  let { loading, featuredRooms: rooms } = useContext(RoomContext);
  rooms = rooms.map((room) => <Room key={room.id} value={room} />)
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
};

export default FeaturedRooms;
