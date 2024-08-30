import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Header from "../Header/Header";

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
