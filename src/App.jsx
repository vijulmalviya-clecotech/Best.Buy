import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./component/screens/LandingPage";
import Header from "./component/layout/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;
