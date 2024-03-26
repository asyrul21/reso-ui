import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";

import AddReviewForm from "./components/add-review-form/add-review-form";
import ReviewList from "./components/review-list/review-list";
import ConfirmationDialog from "../../components/dialogs/confirmation-dialog/confirmation-dialog";

const Reviews = ({
  reviews = [],
  rating,
  numReviews = 1,
  onSubmitAddReview = () => {},
  onSubmitEditReview = () => {},
  onSubmitDeleteReview = () => {},
  containerClassName,
  addReviewSuccess = false,
  editReviewSuccess = false,
  deleteReviewSuccess = false,
  auth: { isAuthenticated, loggedInUser },
  reviewAuthors = [],
  itemPurchasedByUser = false,
}) => {
  const reviewComponentRef = useRef(null);
  const [editReviewMode, setEditReviewMode] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(4);
  const [reviewBeingEdited, setReviewBeingEdited] = useState(null);
  const [reviewToBeDeleted, setReviewToBeDeleted] = useState(null);
  const [showConfirmationDialogue, setShowConfirmationDialogue] =
    useState(false);

  const scrollToReviewComponent = () => {
    // reviewComponentRef.current.scrollIntoView({ block: "center" });
    window.scrollTo(0, reviewComponentRef.current.offsetTop - 120);
  };

  const handleSubmitReview = () => {
    const review = {
      comment: reviewText,
      rating: reviewRating,
    };
    if (editReviewMode) {
      onSubmitEditReview(reviewBeingEdited._id, review);
      setEditReviewMode(false);
    } else {
      onSubmitAddReview(review);
    }
  };

  useEffect(() => {
    if (addReviewSuccess || editReviewSuccess) {
      // reset
      setEditReviewMode(false);
      setReviewText("");
      setReviewRating(4);
      setReviewBeingEdited(null);
      scrollToReviewComponent();
    }

    if (deleteReviewSuccess) {
      setReviewToBeDeleted(null);
    }

    if (editReviewMode) {
      scrollToReviewComponent();
      setReviewText(reviewBeingEdited.comment);
      setReviewRating(reviewBeingEdited.rating);
    }
  }, [
    editReviewMode,
    reviewBeingEdited,
    addReviewSuccess,
    editReviewSuccess,
    deleteReviewSuccess,
  ]);

  const handleConfirmationNo = () => {
    setReviewToBeDeleted(null);
    setShowConfirmationDialogue(false);
  };

  const handleConfirmationYes = () => {
    setShowConfirmationDialogue(false);
    onSubmitDeleteReview(reviewToBeDeleted._id);
    setReviewToBeDeleted(null);
  };

  const getFromTitle = () => {
    if (editReviewMode) {
      return "Edit a Review";
    } else {
      if (loggedInUser && loggedInUser.isAdmin) {
        return "Say Hi to Your Reviewers!";
      } else {
        return "Add a Review";
      }
    }
  };

  const containerClasses = classnames({
    component_reviews_container: true,
    [containerClassName]: true,
  });
  const alreadyReviewed =
    loggedInUser && reviewAuthors && reviewAuthors.length > 0
      ? reviewAuthors.includes(loggedInUser._id)
      : false;
  return (
    <>
      {showConfirmationDialogue && (
        <ConfirmationDialog
          isOpen={showConfirmationDialogue}
          question="Delete Review?"
          description="Are you sure you want to delete this review?"
          onClickNo={handleConfirmationNo}
          onClickYes={handleConfirmationYes}
        />
      )}
      <div className={containerClasses} ref={reviewComponentRef}>
        {!isAuthenticated || !loggedInUser ? (
          <div className="component_reviews_auth">
            <p className="component_reviews_auth_text">
              <a href="/login">Log In</a> to add a review. Don't have an
              account? <a href="/register">Sign Up</a>
            </p>
          </div>
        ) : loggedInUser && loggedInUser.isSuspended ? (
          <div className="component_reviews_auth">
            <p className="component_reviews_auth_text">
              Your account is suspended from adding a product review
            </p>
          </div>
        ) : loggedInUser && !loggedInUser.isVerified ? (
          <div className="component_reviews_auth">
            <p className="component_reviews_auth_text">
              Unverified accounts cannot add a product review
            </p>
          </div>
        ) : loggedInUser && !loggedInUser.isAdmin && !itemPurchasedByUser ? (
          <div className="component_reviews_auth">
            <p className="component_reviews_auth_text">
              Purchase this item to submit a review
            </p>
          </div>
        ) : loggedInUser && !loggedInUser.isAdmin && alreadyReviewed ? (
          <div className="component_reviews_auth">
            <p className="component_reviews_auth_text">
              You have reviewed this product
            </p>
          </div>
        ) : (
          <AddReviewForm
            formTitle={getFromTitle()}
            hideRatingDropdown={
              // editmode
              (editReviewMode &&
                reviewBeingEdited &&
                reviewBeingEdited.fromAdmin) ||
              // add mode
              (!editReviewMode && loggedInUser.isAdmin)
            }
            commentValue={reviewText}
            onClickSpanLink={() => {
              setReviewText("");
              setReviewRating(4);
              setReviewBeingEdited(null);
              setEditReviewMode(false);
            }}
            ratingValue={reviewRating}
            mode={editReviewMode ? "edit" : "add"}
            onChangeText={(e) => {
              setReviewText(e.target.value);
            }}
            onChangeDropdown={(op) => {
              setReviewRating(Number(op));
            }}
            onSubmit={handleSubmitReview}
          />
        )}
        {reviews.length > 0 ? (
          <ReviewList
            reviews={reviews}
            auth={{
              user: loggedInUser ? loggedInUser._id : "",
              isAdmin: loggedInUser ? loggedInUser.isAdmin : false,
              isAuthenticated,
            }}
            onClickEdit={(review) => {
              setEditReviewMode(true);
              setReviewBeingEdited(review);
            }}
            onClickDelete={(review) => {
              setShowConfirmationDialogue(true);
              setReviewToBeDeleted(review);
            }}
          />
        ) : (
          <p>No reviews yet</p>
        )}
      </div>
    </>
  );
};

export default Reviews;
