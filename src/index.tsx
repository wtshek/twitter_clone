import React from "react";
import ReactDOM from "react-dom/client";
import "##/index.css";
import App from "##/App";
import { LoaderProvider } from "##/components/Loader";
import reportWebVitals from "./reportWebVitals";
import { ENV } from "./utils/constant";

if (process.env.NODE_ENV === ENV.DEVELOPMENT) {
  require("##/devTools/msw");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
