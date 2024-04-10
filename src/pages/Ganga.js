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
         Offerting clean and Hygenic space 
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
            <h6>price: ₹3000</h6>
           
            <h6> "pets allowed" </h6>
            <h6>"breakfaast included"</h6>
          </article>
          
        </div>
      </section>
      <section className="room-extras">
        <h3>Extras</h3>
        
      </section>  
      
  
  
 </>
  )
}

export default Ganga
