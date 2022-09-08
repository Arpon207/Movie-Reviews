import React, { useEffect } from "react";
import "./Reviews.css";
import Review from "../Review/Review";
import { useState } from "react";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    console.log(reviews);

    const handleSubmit = (e) => {
        e.preventDefault();
        const Name = e.target.name.value;
        const review = e.target.review.value;
        const date = "21/01/2022";
        const user = { Name, review, date };
        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                const newReviews = [...reviews, user];
                setReviews(newReviews);
                e.target.reset();
            });
    };

    return (
        <section className="reviews">
            <div className="reivews-container">
                <h1>Discover</h1>
                <div className="tab">
                    <p className="active-tab">Reviews</p>
                    <p>Photos</p>
                </div>
                <div className="add-review">
                    <p>Add Review</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Name" />
                        <textarea
                            name="review"
                            id=""
                            rows="10"
                            placeholder="Review"
                        ></textarea>
                        <button type="submit">Post Review</button>
                    </form>
                </div>
                <div className="reviews-card-container">
                    {reviews.map((review) => (
                        <Review key={review._id} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
