import React from "react";
import classnames from "classnames";

const ExternalLinks = ({ links = [], className }) => {
  const containerClasses = classnames({
    component_externalLinks_container: true,
    [className]: className !== null && className !== undefined,
  });
  return (
    <>
      {links && links.length > 0 && (
        <ul className={containerClasses}>
          {links.map((x, idx) => (
            <li className="component_externalLinks_linkContainer" key={idx}>
              <p>
                <a href={x.link} target="_blank" rel="noreferrer">
                  {x.text}
                </a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ExternalLinks;
