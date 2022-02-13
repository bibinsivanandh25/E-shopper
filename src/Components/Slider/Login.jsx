import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { auth } from "../../firebase";
import { loginInitiate } from "../../Redux/Action/action";

const Login = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { user } = useSelector(state => state.reducer);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  let handleSubmit = e => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Link to="/">
        <img
          src="logo12.png"
          alt="logo"
          className="login-logo mt-3 mb-5 object-contain w-[150px] mr-auto ml-auto  "
        />
      </Link>

      <div className="flex  justify-center items-center -mt-10">
        <form
          className=" p-4  border-gray-400 rounded-md w-[30%] shadow-lg"
          onSubmit={handleSubmit}
        >
          <div></div>
          <h1 className="text-center font-bold text-xl text-orange-700">
            Login Here
          </h1>

          <div className="p-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="w-full p-2  rounded-md"
              placeholder="Enter mail"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="p-2">
            <label htmlFor="password">password</label>
            <input
              type="password"
              className="w-full p-2 rounded-md"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <button className="bg-orange-300 w-full p-2 rounded-md mt-2">
              Login
            </button>
          </div>
          <p className="text-gray-500 text-center">
            <strong>or</strong>
          </p>
          <div className="text-center">
            <Link to="/register">
              <button className="border p-2 w-full">I am a new customer</button>
            </Link>
          </div>
          <div>
            <p className="text-sm mt-2">
              By logging in,you agree to E-shopper
              <Link to="#" className="text-blue-500 px-2">
                Conditions of Use
              </Link>
              and
              <Link to="#" className="text-blue-500">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="border-b-2 border-gray-300 mt-4"></div>
          <div className="mt-4">
            <p className="text-sm text-center">
              No account?
              <Link to="/register" className="text-red-400 px-2">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
