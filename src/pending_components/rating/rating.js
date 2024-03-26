import React from "react";
import Icon from "../icon/icon";
import { StarFullIcon, StarEmptyIcon, StarHalf } from "../../icons";
import classnames from "classnames";

const Rating = ({ value, text, className }) => {
  const containerClasses = classnames({
    component_rating_container: true,
    [className]: true,
  });

  const renderStars = () => {
    return (
      <>
        {value >= 1 ? (
          <Icon
            SvgIcon={StarFullIcon}
            width={18}
            height={18}
            className="component_rating_star"
          />
        ) : value < 1 && value > 0 ? (
          <Icon
            SvgIcon={StarHalf}
            width={18}
            height={18}
            className="component_rating_star"
          />
        ) : (
          <Icon
            SvgIcon={StarEmptyIcon}
            width={18}
            height={18}
            className="component_rating_star"
          />
        )}
        {value >= 2 ? (
          <Icon
            SvgIcon={StarFullIcon}
            width={18}
            height={18}
            className="component_rating_star"
          />
        ) : value < 2 && value > 1 ? (
          <Icon
            SvgIcon={StarHalf}
            width={18}
            height={18}
            className="component_rating_star"
          />
        ) : (
          <Icon
            SvgIcon={StarEmptyIcon}
            width={18}
            height={18}
            className="component_rating_star"
          />
        )}
        {value >= 3 ? (
          <Icon
            SvgIcon={StarFullIcon}
            width={18}
            height={18}
            className="component_rating_star"
          />
        ) : value < 3 && value > 2 ? (
          <Icon
            SvgIcon={StarHalf}
            width={18}
            height={18}
            className="component_rating_star"
          />
        ) : (
          <Icon
            SvgIcon={StarEmptyIcon}
            width={18}
            height={18}
            className="component_rating_star"
          />
        )}
        {value >= 4 ? (
          <Icon
            SvgIcon={StarFullIcon}
            width={18}
            height={18}
            className="component_rating_star"
          />
        ) : value < 4 && value > 3 ? (
          <Icon
            SvgIcon={StarHalf}
            width={18}
            height={18}
            className="component_rating_star"
          />
        ) : (
          <Icon
            SvgIcon={StarEmptyIcon}
            width={18}
            height={18}
            className="component_rating_star"
          />
        )}
        {value >= 5 ? (
          <Icon
            SvgIcon={StarFullIcon}
            width={18}
            height={18}
            className="component_rating_star"
          />
        ) : value < 5 && value > 4 ? (
          <Icon
            SvgIcon={StarHalf}
            width={18}
            height={18}
            className="component_rating_star"
          />
        ) : (
          <Icon
            SvgIcon={StarEmptyIcon}
            width={18}
            height={18}
            className="component_rating_star"
          />
        )}
      </>
    );
  };

  return (
    <div className={containerClasses}>
      <div className="component_rating_stars_container">{renderStars()}</div>
      <p>{text && text}</p>
    </div>
  );
};

export default Rating;
