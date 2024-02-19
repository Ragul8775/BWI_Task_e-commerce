import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingStar = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Adjust based on how you want to round half stars
  const emptyStars = maxRating - fullStars - halfStars;

  return (
    <div className="flex mx-2">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className="text-yellow-500" />
      ))}
      {halfStars > 0 && <FaStarHalfAlt className="text-yellow-500" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
      ))}
    </div>
  );
};

export default RatingStar;
