import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerInitiate } from "../../Redux/Action/action";

const Register = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let { user } = useSelector(state => state.reducer);
  //console.log("user =>", user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  let handleSubmit = e => {
    e.preventDefault();
    try {
      dispatch(registerInitiate(email, password));
      setEmail("");
      setPassword("");
      toast.success("successfully register");
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
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
      <div className="flex  justify-center items-center ">
        <form
          className=" p-4 border-2 border-gray-400 rounded-md w-[30%] mb-[20px]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center font-bold text-xl">Create Account</h1>
          <div className="p-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="w-full p-2  rounded-md"
              placeholder="Enter email address"
              value={email}
              name="email"
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
              Sign Up
            </button>
          </div>
          <div>
            <p className="text-sm mt-2">
              By creating an account or logging in,you agree to <br />
              e-shopper Conditions of Use and Privacy Policy.
            </p>
          </div>
          <div className="border-b-2 border-gray-300 mt-4"></div>
          <div className="mt-4">
            <p className="text-sm">
              Already have an account?
              <Link to="/login" className="text-red-400 px-2">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
