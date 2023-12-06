import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayOut from "./layout/MainLayOut";
import Business from "./pages/Business";
import Sport from "./pages/Sport";
import Technology from "./pages/Technology";
import Entertainment from "./pages/Entertainment";
import Education from "./pages/Education";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayOut />}>
        <Route index element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/education" element={<Education />} />
      </Route>
    </Routes>
  );
};

export default App;
