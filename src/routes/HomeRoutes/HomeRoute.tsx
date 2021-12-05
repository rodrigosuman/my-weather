import React from "react";
import { Route, Routes } from "react-router-dom";

const HomeRoute: React.FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<main>Home</main>} />
    </Routes>
  );
};

export default HomeRoute;
