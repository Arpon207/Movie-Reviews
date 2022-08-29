import React from "react";
import "./Banner.css";
import poster from "../../Images/poster.jpg";
import { AiOutlineHeart } from 'react-icons/ai'

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-container">
                <div className="poster">
                    <img src={poster} alt="" />
                    <div>
                        <div>
                            <p>imdb Rating</p>
                            <span>6.5</span>
                        </div>
                        <div>
                            <p>Add to watchlist</p>
                            <span className="watchlist-icon"><AiOutlineHeart/></span>
                        </div>
                    </div>
                </div>
                <div className="banner-content">
                    <h1>All The Bright Places</h1>
                    <p className="movie-desc">
                        The story of Violet and Theodore, who meet and change
                        each other's lives forever. As they struggle with the
                        emotional and physical scars of their past, they
                        discover that even the smallest places and moments can
                        mean something.
                    </p>
                    <hr />
                    <p>
                        <strong>Director :</strong> <span>Bret Haley</span>
                    </p>
                    <hr />
                    <p>
                        <strong>Writter :</strong> <span>Jennifer Niven</span> ·{" "}
                        <span>Liz Hannah</span>
                    </p>
                    <hr />
                    <p className="stars">
                        <strong>Stars :</strong> <span>Elle Fanning</span> ·{" "}
                        <span>Justice Smith</span> ·{" "}
                        <span>Alexandra Shipp</span>
                    </p>
                    <hr />
                    <div>
                        <div>
                            <p>Genres</p>
                            <span>Romantic, Drama</span>
                        </div>
                        <div>
                            <p>Release Date</p>
                            <span>28th Feb, 2020</span>
                        </div>
                        <div>
                            <p>Running Time</p>
                            <span>108 Minutes</span>
                        </div>
                        <div>
                            <p>Country</p>
                            <span>United States</span>
                        </div>
                        <div>
                            <p>Language</p>
                            <span>English</span>
                        </div>
                    </div>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/zfQXKVCudec"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Banner;
