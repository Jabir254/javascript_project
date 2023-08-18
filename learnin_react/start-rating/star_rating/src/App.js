import React, {useState} from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars] = useState(4);
  return (
    <>
      {createArray(totalStars).map((n, i) =>(
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
 }

const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey" } onClick={onSelect}/>
);

const createArray = length => [...Array(length)];
