import React from "react";
import Navbar from "../components/Navbar";
import Benner from "../components/Benner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Benner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
