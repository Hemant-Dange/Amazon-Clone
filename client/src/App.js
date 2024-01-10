import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Header2 from "./Header2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/sign_upin/SignIn";
import SignUp from "./components/sign_upin/SignUp";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header /> <Header2 />
        <Routes>
          <Route path="/" element={[<Home />]} />
          <Route path="/login" element={[<SignIn />]} />
          <Route path="/checkout" element={[<Checkout />]} />
          <Route path="/register" element={[<SignUp />]} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
