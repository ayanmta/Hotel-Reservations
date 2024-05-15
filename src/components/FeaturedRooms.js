import React, { useContext, useEffect } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import { FaMapLocationDot } from "react-icons/fa6";
const FeaturedRooms = (property) => {
  useEffect(()=>{
  setTimeout(()=>window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  }),500);
  return () => {
    clearTimeout();
  }}
,[])
  let { loading, featuredRooms: rooms } = useContext(RoomContext);
  rooms = rooms.map((room) => <Room key={room.id} value={room} />);
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
      <section style={{ marginTop: "5rem" }} className="room-extras">
        <h3>Get Directions:</h3>
       
        <h1 style={{ marginTop: "3rem" }}>
          {" "}
          <FaMapLocationDot />{" "}
        </h1>
        <h4>
          Ottoman Homestay, <br></br>opposite SBI BANK SHANAN, malyana, shimla
          <br></br>
          <br></br>
          Contact: <br></br> +91 98169 30002 <br></br> +91 72999 99115
        </h4>
        <div style={{ padding: "5px", margin: "10px 0px" }}>
          <iframe
          title="ottoman-map"
            width="100%"
            height="500"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=ottoman%20shimla+(ottoman)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
        <a
          href="https://www.google.co.uk/maps/place/Ottoman+Homestay/@31.0928272,77.1917168,17z/data=!3m1!4b1!4m9!3m8!1s0x3905799bbdf605cb:0x97dbe37111a39484!5m2!4m1!1i2!8m2!3d31.0928226!4d77.1942917!16s%2Fg%2F11q3y6sjth?entry=ttu"
          className="btn-primary"
        >
          open google Maps
        </a>
      </section>
    </section>
  );
};

export default FeaturedRooms;
