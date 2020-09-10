import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
import Fade from "react-reveal/Fade";
const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Fade collapse bottom>
      <div className="checkoutProduct">
        <img src={image} alt={title} className="checkoutProduct__image" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <StarIcon key={i} />;
              })}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </Fade>
  );
};

export default CheckoutProduct;
