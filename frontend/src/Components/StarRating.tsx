"use client";
import React, { useState } from 'react';
import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';

const StarRating = () => {
  const [hoveredStar, setHoveredStar] = useState(0);

  return (
    <div>
      <span
        className="ml-2.5 text-red-800"
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "1.5em",
        }}
      >
        {[...Array(5)].map((_, index) => {
          const isHovered = index < hoveredStar;
          return (
            <span
              key={index}
              onMouseEnter={() => setHoveredStar(index + 1)}
              onMouseLeave={() => setHoveredStar(0)}
            >
              {isHovered ? (
                <TiStarFullOutline className="text-red-800 transition-colors duration-300" />
              ) : (
                <TiStarOutline className="text-red-800 transition-colors duration-300" />
              )}
            </span>
          );
        })}
      </span>
    </div>
  );
};

export default StarRating;