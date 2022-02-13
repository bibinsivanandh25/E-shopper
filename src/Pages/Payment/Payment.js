import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./../../Components/CheckoutProduct/CheckoutProduct";
import { getBasketTotal } from "../../BasketTotal";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../../firebase";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../../axios";
import { setBasketEmpty } from "../../Redux/Action/action";
const Payment = () => {
  let { basket, user } = useSelector(state => state.reducer);

  let dispatch = useDispatch();

  let navigate = useNavigate();
  let [succeed, setSucceed] = useState(false);
  let [processing, setProcessing] = useState("");
  let [error, setError] = useState(null);
  let [disabled, setSDisabled] = useState(true);
  let [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    let getClientSecret = async () => {
      let response = await axios({
        method: "post",
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  let stripe = useStripe();
  let elements = useElements();
  let handleSubmit = async e => {
    e.preventDefault();
    setProcessing(true);
    let payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user && user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceed(true);
        setError(null);
        setProcessing(false);
        dispatch(setBasketEmpty());
        navigate("/orders");
      });
  };

  let handleChange = e => {
    setSDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="bg-white">
      <div>
        <h1 className=" text-center p-[10px] font-[900] text-[22px] bg-white border-b-2 border-solid border-b-gray-400 pl-[5px]">
          Checkout
          {
            <Link to="/checkout" className=" no-underline">
              {basket.length} items
            </Link>
          }
        </h1>
        <div className=" flex p-[20px] mx-[20px] border-b-2 border-b-solid border-b-gray-400 items-center justify-around">
          <div className=" basis-[30%]">
            <h3 className=" text-[18px] mb-[20px]">Delivery Address</h3>

            <div className=" text-[16px]">
              <p>{user && user.email}</p>
              <p>6/560,Nacheri,Ayyankolly</p>
              <p>Munnanad post</p>
              <p>The Nilgiris</p>
              <p>TamilNadu-643239</p>
            </div>
          </div>
          <div>
            <div className=" basis-[30%]">
              <h3 className=" text-[16px] text-center">
                Review items and Delivery
              </h3>
            </div>
            <div className=" flex-[0.8] mb-[10px]">
              {basket &&
                basket.map(item => (
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
          <div className=" basis-[30%]">
            <h3 className=" text-[16px] mb-[13px]">Payment Method</h3>

            <div className="k">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div>
                  <CurrencyFormat
                    renderText={value => (
                      <>
                        <h3>Order Total:{value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rs"}
                  />
                </div>
                <button disabled={processing || disabled || succeed}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
