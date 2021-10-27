import React from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "../navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <ToastContainer className="toast" />
      {children}
    </>
  );
};

export default Layout;
