import React from "react";

const CardResource = ({ url, description, title }) => {
  return (
    <aside className="resource">
      <h3 className="resource__title">{title}</h3>
      <hr />
      <p className="resource__description">{description}</p>
      <a
        className="resource__link"
        rel="noopener noreferrer"
        target="_blank"
        href={url}
      >
        Go to
      </a>
    </aside>
  );
};

export default CardResource;
