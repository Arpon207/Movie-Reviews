import React from 'react'
import "./Reviews.css"
import useFetch from './../../Hooks/useFetch';

const Reviews = () => {
  const {reviews} = useFetch();
  console.log(reviews);
  return (
    <div>Reviews</div>
  )
}

export default Reviews