import React from "react";
import "./Review.css";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";

const Review = ({ review, handleDelete, handleShow }) => {
    const { _id, Name, date } = review;

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
            <div className="review-btns">
                <button title="Like" className="like-button">
                    <AiOutlineHeart />
                </button>
                <button
                    onClick={() => handleShow(review.review, _id)}
                    title="Edit"
                    className="edit-button"
                >
                    <FiEdit />
                </button>
                <button
                    onClick={() => handleDelete(_id)}
                    title="Delete"
                    className="delete-button"
                >
                    <AiOutlineDelete />
                </button>
            </div>
        </div>
    );
};

export default Review;
