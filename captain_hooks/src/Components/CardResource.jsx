import React from "react";
import Card, { Title, Content, Link } from "./Card";

const CardResource = ({ url, description, title }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Content>{description}</Content>
      <Link url={url}>Go to</Link>
    </Card>
  );
};

export default CardResource;
