import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "../../pages/Blog";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Studio from "../../pages/Studio";
import ViewProject from "../../pages/ViewProject";

export const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/project/view" element={<ViewProject />} />
    </Routes>
  );
};
