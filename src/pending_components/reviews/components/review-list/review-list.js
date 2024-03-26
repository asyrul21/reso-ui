import React from "react";
import classnames from "classnames";
import Rating from "../../../rating/rating";
import { EditIcon, DeleteIcon } from "../../../../icons";

const ReviewList = ({
  reviews,
  auth: { user, isAdmin, isAuthenticated },
  onClickEdit = () => {},
  onClickDelete = () => {},
}) => {
  return reviews.map((review, index) => {
    const reviewItemContainerClasses = classnames({
      component_reviewlist_container: true,
      component_reviewlist_container_admin: review.fromAdmin,
    });

    return (
      <div key={index} className={reviewItemContainerClasses}>
        <div className="component_reviewlist_content">
          <div className="component_reviewlist_name_container">
            {review.fromAdmin && (
              <div className="component_reviewlist_adminMarker">
                Administrator
              </div>
            )}
            {user === review.user && (
              <div className="component_reviewlist_ownerMarker">You</div>
            )}
            <span className="component_reviewlist_name">{review.name}</span>
          </div>
          <p className="component_reviewlist_date">
            {review.createdAt.substring(0, 10)}
          </p>
          {!review.fromAdmin && (
            <Rating
              value={Number(review.rating)}
              className="component_reviewlist_rating"
            />
          )}
          <p className="component_reviewlist_comment">{review.comment}</p>
        </div>
        {isAuthenticated &&
          (user === review.user || isAdmin ? (
            <div className="component_reviewlist_buttons">
              <div
                className="component_reviewlist_button"
                onClick={() => {
                  onClickEdit(review);
                }}
              >
                <EditIcon />
              </div>
              <div
                className="component_reviewlist_button"
                onClick={() => {
                  onClickDelete(review);
                }}
              >
                <DeleteIcon />
              </div>
            </div>
          ) : null)}
      </div>
    );
  });
};

export default ReviewList;
