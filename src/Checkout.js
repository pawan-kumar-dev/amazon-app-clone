import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  let price = 0;
  basket.forEach((item) => (price = price + Number(item.price)));
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal value={price} />
      </div>
    </div>
  );
}

export default Checkout;
