import React from "react";
import imgReviewer from "../assets/person4.png";

const ReviewCard = () => {
  return (
    <div className="reviewCard">
      <div className="review">
        “Fast and outstanding resutls. Edie understands their customer’s needs.
        They have a young and talented team.”
      </div>
      <div className="reviewer">
        <div className="reviewer-image">
          <img src={imgReviewer} alt="Reviewer Display Pic" />
        </div>
        <div className="reviewer-info">
          <div className="reviewer-name">Carlos Tran</div>
          <div className="reviewer-designation">The Decorate Gatsby</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
