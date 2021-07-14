/* eslint-disable no-restricted-globals */
import React from "react";

import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

const Dashboard = () => {
  if (!localStorage.getItem("user")) {
    location.replace("https://react-teams-38zlh.ondigitalocean.app/login");
  }
  return (
    <>
      <Hero children="Dashboard" />
      <Card />
    </>
  );
};

export default Dashboard;
