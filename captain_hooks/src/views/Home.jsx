import React from "react";
import CardResource from "../Components/CardResource";
import { resources } from "../data.json";
import "../styles/Home.scss";

const Home = (props) => {
  const allCards = resources.map((resource) => (
    <CardResource
      key={resource.url}
      url={resource.url}
      title={resource.title}
      description={resource.description}
    />
  ));

  return (
    <section className="Home">
      <h1 className="Home__title hero">React Hooks !</h1>
      <div className="Home__resources">{allCards}</div>
    </section>
  );
};

export default Home;
