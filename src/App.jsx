import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar2 from "./Pages/Navbar2";
import Register from "./Components/Slider/Register";
import Login from "./Components/Slider/Login";
import SingleProducts from "./Components/Singleproducts/SingleProducts";
import Checkout from "./Pages/Checkout/Checkout";
import Payment from "./Pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar3 from "./Pages/Navbar3";
import Orders from "./Pages/Orders/Orders";
// import { useDispatch } from "react-redux";
// import { auth } from "./firebase";
// import { setUser } from "./Redux/Action/action";

// const Home = lazy(() => import("./pages/Home"));
// const Login = lazy(() => import("./Components/Slider/Login"));
// const Register = lazy(() => import("./Components/Slider/Register"));
// const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
// const Payment = lazy(() => import("./pages/Payment/Payment"));
// const Orders = lazy(() => import("./Pages/Orders/Orders"));
// const SingleProducts = lazy(() =>
//   import("./Components/Singleproducts/SingleProducts")
// );

let promise = loadStripe(
  "pk_test_51KCgw2SIkbQ5bAdExE0RxsxlvpY9gNokNGgdV0U0uGxfLV7INIjOSoOPpHAieIy9oftrHKfRqxcAMoqx4iWvB6Rc00fZfILWbb"
);
const App = () => {
  // let dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged(authUser => {
  //     if (authUser) {
  //       dispatch(setUser(authUser));
  //     } else {
  //     }
  //     dispatch(setUser(null));
  //   });
  // }, [dispatch]);
  return (
    <Router>
      <section>
        <article>
          <Navbar2 />
          <Navbar3 />
          <ToastContainer
            toastStyle={{ backgroundColor: "#000", color: "#fff" }}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:id" element={<SingleProducts />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route
              path="/payment"
              element={
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              }
            />
          </Routes>
        </article>
      </section>
    </Router>
  );
};

export default App;
