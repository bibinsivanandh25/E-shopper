import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../BasketTotal";
const SubTotal = () => {
  let { basket, user } = useSelector(state => state.reducer);
  // let dispatch = useDispatch(state => state.reducer);
  let navigate = useNavigate();
  let handleChecked = () => {
    //   if (user) {
    //     navigate("/payment");
    //   } else {
    //     navigate("/login");
    //   }
    navigate("/payment");
  };
  return (
    <div>
      <CurrencyFormat
        renderText={value => (
          <>
            <p className="ml-6 text-[18px]">
              SubTotal({basket.length} items): <strong>{value}</strong>
            </p>
            <small>
              <input className="w-8 h-6 ml-6" type="checkbox" />
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />
      <button
        className="mt-6 bg-zinc-800 text-white w-32 h-[50px] rounded-md ml-[20px]  text-[15px] "
        onClick={handleChecked}
      >
        proceed to Checkout
      </button>
    </div>
  );
};

export default SubTotal;
