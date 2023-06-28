import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./component/screens/LandingPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;
