/* eslint-disable no-restricted-globals */
import React from "react";

import Hero from "../../components/Hero/Hero";
import Form from "../../components/Form/Form";

const Register = () => {
  return (
    <>
      {localStorage.getItem("user")
        ? location.replace(
            "https://react-teams-back-26lbx.ondigitalocean.app/dashboard"
          )
        : ""}
      <Hero children="Sign Up" />
      <Form button="Sign Up" path="register" />
    </>
  );
};

export default Register;
