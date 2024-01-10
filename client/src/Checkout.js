import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Carousel from "react-material-ui-carousel";

const data = [
  "./adstrip.jpg",
  "./adstrip1.jpg",
  "./adstrip2.jpg",
  "./adstrip3.jpg",
];

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* <img className="checkout__ad" src="./adstrip.jpg" /> */}
        <div>
          <Carousel autoPlay={true} animation="slide" indicators={false}>
            {data.map((image, i) => {
              return <img className="checkout__ad" src={image}></img>;
            })}
          </Carousel>
        </div>
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
