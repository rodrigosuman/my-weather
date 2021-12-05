import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "../constants/routes";
import HomeRoutes from "./HomeRoutes";

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomeRoutes />} />
        <Route path={"*"} element={<main><span>404</span></main>} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
