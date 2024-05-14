import React, { useEffect } from "react";

import Banner from "../components/Banner";

import StyledHero from "./StyledHero";
import room_g1 from "../images/gp-room1.webp";
import room_g2 from "../images/gp-room2.webp";
import room_g3 from "../images/gp-room3.webp";
import room_g4 from "../images/gp-room4.webp";

import room_g7 from "../images/gp-room7.webp";
import room_g8 from "../images/gp-room8.webp";
import room_g9 from "../images/gp-room9.webp";
import room_g10 from "../images/gp-room10.webp";
import room_g11 from "../images/gp-room11.webp";
import room_g12 from "../images/gp-room12.webp";
import room_g13 from "../images/gp-room13.webp";
import room_g14 from "../images/gp-room14.webp";
import room_g15 from "../images/gp-room15.webp";
import room_g5 from "../images/gp-room5.webp";

import room_g6 from "../images/gp-room6.webp";

import room_b1 from "../images/gp-bath1.webp";

import room_b2 from "../images/gp-bath2.webp";
import ReactImageGallery from "react-image-gallery";
import { FaMapLocationDot } from "react-icons/fa6";
import veg from "../images/pure-veg-icon-logo-symbol-260nw-2190482501.webp";

const Ganga = () => {
  useEffect(()=>
    setTimeout(()=>window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    }),750)
  ,[])
  const images = [
    {
      original: room_g2,
      thumbnail: room_g2,
    },
    
    {
      original: room_g3,
      thumbnail: room_g3,
    },
    
    {
      original: room_g4,
      thumbnail: room_g4,
    },
    {
      original: room_g5,
      thumbnail: room_g5,
    },
    {
      original: room_g6,
      thumbnail: room_g6,
    },
    {
      original: room_g7,
      thumbnail: room_g7,
    },
    {
      original: room_g8,
      thumbnail: room_g8,
    },
    {
      original: room_g9,
      thumbnail: room_g9,
    },
    {
      original: room_g10,
      thumbnail: room_g10,
    },
    {
      original: room_g11,
      thumbnail: room_g11,
    },
    {
      original: room_g12,
      thumbnail: room_g12,
    },
    {
      original: room_g13,
      thumbnail: room_g13,
    },
    {
      original: room_g14,
      thumbnail: room_g14,
    },
    {
      original: room_g15,
      thumbnail: room_g15,
    },
    {
      original: room_b1,
      thumbnail: room_b1,
    },
    {
      original: room_b2,
      thumbnail: room_b2,
    },
    {
      original: room_g1,
      thumbnail: room_g1,
    },
  ];
  return (
    <>
      <StyledHero hero="roomsHero" img={room_g4}>
        <Banner title={`Our rooms`}>Offering clean and Hygenic space</Banner>
      </StyledHero>
      <section className="single-room">
        <ReactImageGallery items={images} />
        <div className="single-room-info">
          <article className="desc">
            <h3>Description</h3>
            <p>
              Welcome to our hotel where cleanliness and hygiene are our top
              priorities. Experience immaculately maintained rooms that are not
              only spotless but also designed for your comfort. Enjoy
              breathtaking views from your window that will enhance your stay
              with us.
            </p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>
              {" "}
              <img alt="veg" src={veg} width={"5%"} height={"0.8rem"} /> "pure
              Veg"{" "}
            </h6>
            <h6> "no pets allowed" </h6>
            <h6>"breakfaast included"</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h3>Get Directions:</h3>

        <h1 style={{ marginTop: "3rem" }}>
          <FaMapLocationDot />{" "}
        </h1>
        <h4>
          The Ganga Palace, <br></br> near summer hill chowk, summer hill,
          Shimla
          <br></br>
          <br></br>
          Contact: <br></br> +91 98169 30002 <br></br> +91 72999 99115
        </h4>
        <div style={{ padding: "5px", margin: "10px 0px" }}>
          <iframe
            title="ganga-palace"
            width="100%"
            height="500"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=The%20Ganga%20Palace,%20near%20summer%20hill%20chowk,%20summer%20hill,%20Shimla+(The%20Ganga%20Palace)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
        <a
          href="https://www.google.co.uk/maps/place/Hotel+Ganga+Palace/@25.2967126,57.837985,4z/data=!4m13!1m2!2m1!1sganga+palace!3m9!1s0x3905790505d91c85:0xde0d2c9a6c77476e!5m2!4m1!1i2!8m2!3d31.108476!4d77.1393356!15sCgxnYW5nYSBwYWxhY2WSAQVob3RlbOABAA!16s%2Fg%2F11c3k6l8fs?entry=ttu"
          className="btn-primary"
        >
          open google Maps
        </a>
      </section>
    </>
  );
};

export default Ganga;
