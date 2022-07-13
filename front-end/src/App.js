import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "./redux/store";
import Home from "./pages/home";
import Footer from "./components/footer";
import City from "./pages/city";
import "./index.scss";
const url = "http://localhost:5000";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home url={url} />
                </>
              }
            />
            <Route path="/:state/:city" element={<City url={url} />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
