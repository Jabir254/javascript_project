import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
	return (
		<>
			{createArray(totalStars).map((n, i) => (
				<Star key={i} selected={selectedStars > i} />
			))}
			<p>
				{selectedStars} of {totalStars} stars
			</p>
		</>
	);
}
