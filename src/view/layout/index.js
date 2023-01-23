import React from "react";
import Footer from "./components/Footer";
import RenderRoutes from "./components/RenderRoutes";
import Header from "./components/Header";
const index = (props) => {
  return (
    <div
      className="d-flex flex-column flex-root"
    >
      <div className="page d-flex flex-column flex-column-fluid">
        <Header />
        <div className="wrapper d-flex flex-column flex-row-fluid  container-xxl ">
          <RenderRoutes />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default index;
