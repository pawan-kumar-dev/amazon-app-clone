import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  let userName = user ? user.email.split("@") : [];
  let username = user ? userName[0] : "Guest";
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3 className="checkout__user">Hello, {username}</h3>
          <h2 className="checkout__title">
            {basket?.length > 0
              ? "Your Shopping Basket"
              : "Your Shopping Basket is Empty"}
          </h2>
          {basket.map(({ id, title, image, price, rating }, index) => {
            return (
              <CheckoutProduct
                key={index}
                id={id}
                title={title}
                price={price}
                rating={rating}
                image={image}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
