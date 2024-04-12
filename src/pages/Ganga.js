import React from 'react'

import Banner from '../components/Banner'

import StyledHero from './StyledHero'
import room_g1 from "../images/gp-room1.jpg";
import room_g2 from "../images/gp-room2.jpg";
import room_g3 from "../images/gp-room3.jpg";
import room_g4 from "../images/gp-room4.jpg";

import room_g5 from "../images/gp-room5.jpg";

import room_g6 from "../images/gp-room6.jpg";

import room_b1 from "../images/gp-bath1.jpg";

import room_b2 from "../images/gp-bath2.jpg";
import ReactImageGallery from 'react-image-gallery'
import { FaMapLocationDot } from "react-icons/fa6";


const Ganga = () => {
    const images = [
        {
          original: room_g1,
          thumbnail: room_g2,
        },
        {
          original: room_g3,
          thumbnail: room_g3,
        },
        {
          original: room_g2,
          thumbnail: room_g2,
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
            original: room_b1,
            thumbnail: room_b1,
          },
          {
            original: room_b2,
            thumbnail: room_b2,
          },
      ];
  return (
     <>
      
          
        <StyledHero hero="roomsHero" img={room_g4}>
        <Banner title={`Our rooms`}>
         Offering clean and Hygenic space 
        </Banner>
      </StyledHero>
      <section className="single-room">

      
       
        <ReactImageGallery  items={images} />
       <div className="single-room-info"> 
          <article className="desc">
            <h3>Description</h3>
            <p>Welcome to our hotel where cleanliness and hygiene are our top priorities. Experience immaculately maintained rooms that are not only spotless but also designed for your comfort. Enjoy breathtaking views from your window that will enhance your stay with us.</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6> "pure Veg" </h6>
            <h6> "no pets allowed" </h6>
            <h6>"breakfaast included"</h6>
          </article>
          
        </div>
      </section>
      <section className="room-extras">
        <h3>Get Directions:</h3>
       <a href="https://www.google.co.uk/maps/place/Hotel+Ganga+Palace/@25.2967126,57.837985,4z/data=!4m13!1m2!2m1!1sganga+palace!3m9!1s0x3905790505d91c85:0xde0d2c9a6c77476e!5m2!4m1!1i2!8m2!3d31.108476!4d77.1393356!15sCgxnYW5nYSBwYWxhY2WSAQVob3RlbOABAA!16s%2Fg%2F11c3k6l8fs?entry=ttu" className="btn-primary">
        open google Maps
        </a>
        <h1 style={{marginTop:"3rem"}}><FaMapLocationDot/> </h1>
        <h4>The ganga palace, <br></br> near summer hill chowk, summer hill, Shimla
        <br></br><br></br>
        Contact: <br></br> +91 98169 30002 <br></br> +91 72999 99115
        </h4>
      </section>  
      
  
  
 </>
  )
}

export default Ganga
