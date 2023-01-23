import React from "react";
import Home from "view/pages/Home";
import Formations from "view/pages/Formations";
import Architect from "view/pages/Architect";
import Design from "view/pages/Design";
import Contact from "view/pages/Contact";
import { Route, Routes } from "react-router-dom";

const RenderRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formations" element={<Formations />} />
      <Route path="/architects" element={<Architect />} />
      <Route path="/designs" element={<Design />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default RenderRoutes;
