import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ContextApi from "./components/ContextApi/ContextApi";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProSidebarProvider } from "react-pro-sidebar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ProSidebarProvider>
      <BrowserRouter>
        <ContextApi>
          <GlobalStyle>
            <App />
          </GlobalStyle>
        </ContextApi>
      </BrowserRouter>
    </ProSidebarProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
