import React from "react";
import "./Review.css";

const Review = ({ review }) => {
    const { Name, date } = review;
    return (
        <div className="review-card">
            <div className="reviewer-info">
                <p className="logo">{Name?.slice(0, 1)}</p>
                <div>
                    <p>{Name}</p>
                    <small>{date}</small>
                </div>
            </div>
            <p>{review.review}</p>
        </div>
    );
};

export default Review;
