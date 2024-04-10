import React, { useContext } from "react";
import defaultBcg from "../images/defaultBcg.jpeg";
import Banner from "../components/Banner";
import { RoomContext } from "../Context";
import { useParams } from "react-router-dom";
import StyledHero from "./StyledHero";

const SingleRoom = (props) => {
  const params = useParams();
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(params.slug);
  console.log(room);
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...defaultImg] = images;
  if (!room) {
    return <div>Room Not Found</div>;
  }
  return (
    <>
      <StyledHero hero="roomsHero" img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
        Offering clean and Hygenic space 
                </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => (
            <img
              className="single-room-images"
              alt="single-room"
              src={item}
              key={index}
            />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Description</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>price: ₹{price}</h6>
            <h6>size: {size} sqft</h6>
            <h6>
              max capacity:{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6> {pets ? "pets allowed" : "no pets alloweda"}</h6>
            <h6>{breakfast && "breakfaast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h3>Extras</h3>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default SingleRoom;
