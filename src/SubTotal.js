import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
function SubTotal({ value }) {
  const [{ basket }, dispatch] = useStateValue();
  let price = 0;
  basket.forEach((item) => (price = price + Number(item.price)));
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({basket?.length} items):
                <strong>{`${value}`}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                this Order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={value}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
