import React, { useState } from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const addToBasket = () => {
    //dispatches the item to the data layer
    open && setOpen(false);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const customStyles = {
    content: {
      border: "none",
      backgroundColor: "transparent",
      margin: "8% auto 0 auto",
    },
    overlay: {
      backgroundColor: "rgb(0,0,0,0.7)",
      zIndex: "100000",
    },
  };
  return (
    <Fade bottom>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <StarIcon key={i} />;
              })}
          </div>
        </div>
        <img src={image} alt={title} />
        <button onClick={() => setOpen(!open)}>View Product</button>
        <Modal isOpen={open} ariaHideApp={false} style={customStyles}>
          <Zoom>
            <div
              style={{
                width: "70%",
                height: "60vh",
                margin: "0 auto",
              }}
            >
              <button onClick={() => setOpen(!open)}>X</button>
              <div className="product">
                <div className="product__info">
                  <p>{title}</p>
                  <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                  </p>
                  <div className="product__rating">
                    {Array(rating)
                      .fill()
                      .map((_, i) => {
                        return <StarIcon key={i} />;
                      })}
                  </div>
                </div>
                <img src={image} alt={title} />
                <button onClick={addToBasket}>Add to basket</button>
              </div>
            </div>
          </Zoom>
        </Modal>
      </div>
    </Fade>
  );
}

export default Product;
