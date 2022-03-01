import React from "react";
import "./ReviewContainer.css";

const ReviewContainer = ({img}) =>{
    return (
        <div className="review-outline-container text-center">
            <img src={img} alt="reviewer-img" className="image-fluid reviewer-img" />
            <h3 className="review-title">VBraceGreen</h3>
            <p className="review-message">
                Good work bruuhhhhhh! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, temporibus.
            </p>
        </div>
    )   
}

export default ReviewContainer;