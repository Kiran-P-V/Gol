import React from "react";
import { Banner } from "../../components/userComponents/Banner";
import { FlightSelection } from "../../components/userComponents/FlightSelection";
import { Footer } from "../../layouts/userLayouts/Footer/Footer";
import { NavBar } from "../../layouts/userLayouts/NavBar/NavBar";

export const UserHome = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <FlightSelection />
      <Footer />
    </>
  );
};
