import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Pic1 from '../assets/images/img-1.jpg';
import Pic2 from '../assets/images/img-2.jpg';
import Pic3 from '../assets/images/img-3.jpg';
import Pic4 from '../assets/images/img-4.jpg';
import Pic5 from '../assets/images/img-5.jpg';
import Pic6 from '../assets/images/img-6.jpg';
import Pic7 from '../assets/images/img-7.jpg';
import Pic8 from '../assets/images/img-8.jpg';
import Pic9 from '../assets/images/img-9.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Pic9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            ></CardItem>
            <CardItem
              src={Pic2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            ></CardItem>
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Pic3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            ></CardItem>
            <CardItem
              src={Pic4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            ></CardItem>
            <CardItem
              src={Pic8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
