import React from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import Featuredjob from "../Featuredjob/Featuredjob";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <Featuredjob></Featuredjob>
    </div>
  );
};

export default Home;
