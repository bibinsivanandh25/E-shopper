import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Reducer from "../Reducer/Rootreducer";
// import logger from "redux-logger";

// const middleware = [thunk];
// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger);
// }

let store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
