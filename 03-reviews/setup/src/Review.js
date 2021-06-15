import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const chkind = (ind) => {
    if (ind < 0) {
      return people.length - 1;
    }
    if (ind > people.length - 1) {
      return 0;
    }
    return ind;
  };
  const next = () => {
    setIndex((index) => {
      const newind = index + 1;
      return chkind(newind);
    });
  };
  const prev = () => {
    setIndex((index) => {
      const newind = index - 1;
      return chkind(newind);
    });
  };
  const random = () => {
    let rand = Math.floor(Math.random() * people.length);
    if (rand === index) {
      rand = rand + 1;
    }
    setIndex(chkind(rand));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={next}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={random}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
