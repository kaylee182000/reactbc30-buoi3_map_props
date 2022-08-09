import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import './index.css';
import App from "./App";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Page404 from "./pages/Page404/Page404";
import ProductMangement from "./pages/ProductMangement/ProductMangement";
import Register from "./pages/Register/Register";
import reportWebVitals from "./reportWebVitals";
//setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoTangGiamSoLuong from "./pages/DemoRedux/DemoTangGiamSoLuong/DemoTangGiamSoLuong";
import DemoChangeColor from "./pages/DemoRedux/DemoChangeColor/DemoChangeColor";
import DemoQLSV from "./pages/DemoRedux/DemoQLSV/DemoQLSV";
import ReactLifeCycle from "./ReactLifeCycle/ReactLifeCycle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="reactform" element={<ProductMangement />}></Route>
          <Route path="lifecycle" element={<ReactLifeCycle />}></Route>
          <Route path="demoredux" element={<DemoTangGiamSoLuong />}></Route>
          <Route path="demoreduxcolor" element={<DemoChangeColor />}></Route>
          <Route path="demoQLSV" element={<DemoQLSV />}></Route>
          {/* <Route path="*" element={<Page404 />}></Route> */}
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
