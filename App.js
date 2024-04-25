import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./src/store/index";
import Counter from "./src/components/Counter";

const App = () => {
  return (
    <div>
      This is App
      <Counter />
    </div>
  );
};

const rootEle = ReactDOM.createRoot(document.getElementById("root"));

rootEle.render(
  <Provider store={store}>
    <App />
  </Provider>
);
