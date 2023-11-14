import React from "react";
import "./Reviews.css";
import ReviewItem from "./ReviewItem";
import CommentFrm from "./CommentFrm";

const Reviews = ({active}) => {
  return (
    <div className={`tab-panel-reviews ${active==="review"?"content active":"content"}`}>
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewItem />
          <ReviewItem />
        </ol>
      </div>
      <CommentFrm />
    </div>
  );
};

export default Reviews;
