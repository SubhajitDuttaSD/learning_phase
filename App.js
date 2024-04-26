import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./src/store/index";
import Counter from "./src/components/Counter";
import ProgressBar from "./src/components/ProgressBar";

const App = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setProgressValue((prev) => prev + 1);
    }, 100);
  }, []);

  return (
    <div>
      This is App
      <Counter />
      <ProgressBar progressValue={progressValue} />
    </div>
  );
};

const rootEle = ReactDOM.createRoot(document.getElementById("root"));

rootEle.render(
  <Provider store={store}>
    <App />
  </Provider>
);
