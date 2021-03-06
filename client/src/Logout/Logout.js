import React from "react";
import { Redirect } from "react-router-dom";

const Logout = props => {
  localStorage.clear();

  return <Redirect to="/login"/>;
};

export default Logout;
