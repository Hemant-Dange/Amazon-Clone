import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-material-ui-carousel";

const data = [
  "./banner.jpg",
  "./banner1.jpg",
  "./banner2.jpg",
  "./banner3.jpg",
  "./banner4.jpg",
  "./banner5.jpg",
];

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          className="carlolsel"
          autoPlay={true}
          animation="slide"
          indicators={false}
        >
          {data.map((image, i) => {
            return <img className="home__image" src={image}></img>;
          })}
        </Carousel>
        <div className="home__row">
          <Product
            id="product1"
            title="MuscleBlaze MB-Vite Daily Multivitamin with 51 Ingredients and 6 Essential Blends, 100% RDA of Immunity Boosters"
            price={399.99}
            rating={4}
            image="./product1.jpg"
          />
          <Product
            id="product2"
            title="29 Previous Years UPSC Civil Services IAS Prelims Topic-wise Solved Papers 1 & 2 (1995 - 2023) 14th Edition"
            price={249.99}
            rating={5}
            image="./product2.jpg"
          />
          <Product
            id="product3"
            title="iQOO 12 5G (Legend, 16GB RAM, 512GB Storage) | India's 1st Snapdragon® 8 Gen 3 Mobile Platform"
            price={52999.19}
            rating={4}
            image="./product8.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="product4"
            title="Apple iPhone 15 (128 GB) - Black"
            price={72999.99}
            rating={5}
            image="./product6.jpg"
          />
          <Product
            id="product5"
            title="Mattel Uno Playing Card Game for 7 Yrs and Above for Adult,set of 112 cards"
            price={499.99}
            rating={4}
            image="./product7.jpg"
          />
          <Product
            id="product6"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={9999.9}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="product7"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={63409.68}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="product8"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={169271.73}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="product9"
            title="KT TRDERS NOVA 1100-Watt Waffle Maker With Temperature Control"
            price={3199.99}
            rating={4}
            image="./product4.jpg"
          />
          <Product
            id="product10"
            title="Electric Plug Power Socket Adapter International Travel Universal Charger"
            price={399.99}
            rating={4}
            image="./product3.jpg"
          />
          <Product
            id="product11"
            title="Vega Crux ISI Certified Flip-Up Helmet"
            price={1307.0}
            rating={4}
            image="./product5.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
