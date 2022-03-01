import React from "react";
import "./Review.css";
import ReviewContainer from "./Components/ReviewContainer";
import img from "../assets/landingbg.png"

const Review = () =>{
    return (
        <div id="carousel reviews" class="carousel slide" data-bs-ride="carousel" data-pause="hover">
            <div class="carousel-inner">
                <div class="carousel-item active text-center">
                    <ReviewContainer img={img}/>
                </div>
                <div class="carousel-item text-center">
                    <ReviewContainer img={img}/>
                </div>
                <div class="carousel-item text-center">
                    <ReviewContainer img={img}/>  
                </div>
            </div>
        </div>
    )
}

export default Review;