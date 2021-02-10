import React from "react";
import Header from "./Header";
import PageLanding from "./PageLanding";
import ServicesList from "./ServicesList";
import ProductsList from "./ProductsList";
import Team from "./Team";
import ReviewCard from "./ReviewCard";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PageLanding />
      <ServicesList />
      <ProductsList />
      <Team />
      <ReviewCard />
      <Footer />
    </div>
  );
}

export default App;
