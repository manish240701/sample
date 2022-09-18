import React from "react";
import "./ReviewContainer.css";

const ReviewContainer = ({img,reviewer,review}) =>{
    return (
        <div className="review-outline-container text-center">
            <img src={img} alt="reviewer-img" className="image-fluid reviewer-img"/>
            <h3 className="review-title">{reviewer}</h3>
            <p className="review-message">
                {review}
            </p>
        </div>
    )   
}

export default ReviewContainer;