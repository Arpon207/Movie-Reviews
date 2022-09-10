import React, { useEffect } from "react";
import "./Reviews.css";
import Review from "../Review/Review";
import { useState } from "react";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedReview, setSelectedReview] = useState({
        id: "",
        review: "",
    });
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    const handleDelete = (id) => {
        const url = `http://localhost:5000/reviews/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    const remainingReviews = reviews.filter(
                        (review) => review._id !== id
                    );
                    setReviews(remainingReviews);
                }
            });
    };

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
                if (data.acknowledged === true) {
                    user._id = data.insertedId;
                    const newReviews = [...reviews, user];
                    setReviews(newReviews);
                }
                e.target.reset();
            });
    };

    const handleShow = (review, id) => {
        setShow(!show);
        setSelectedReview({
            id: id,
            review: review,
        });
    };

    const handleSubmitEditedReview = (e) => {
        e.preventDefault();
        const reviewInput = e.target.review.value;
        const review = { reviewInput };

        const url = `http://localhost:5000/reviews/${selectedReview.id}`;
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(review),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    const modifiedReview = reviews.find(
                        (review) => review._id === selectedReview.id
                    );
                    modifiedReview.review = reviewInput;
                    const rest = reviews.filter(
                        (review) => review._id !== selectedReview.id
                    );
                    setReviews([...rest, modifiedReview]);
                    setShow(false);
                }
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
                        <Review
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                            handleShow={handleShow}
                        />
                    ))}
                </div>
            </div>
            {show === true && (
                <div className="edit-window">
                    <div>
                        <form onSubmit={handleSubmitEditedReview}>
                            <textarea
                                name="review"
                                id=""
                                rows="10"
                                placeholder="Review"
                                defaultValue={selectedReview.review}
                            ></textarea>
                            <button
                                onClick={() => setShow(false)}
                                id="cancel-btn"
                            >
                                Cancel
                            </button>
                            <button type="submit">Save Changes</button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Reviews;
