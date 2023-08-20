import React from "react";
import { createArray } from "./lib";
import Star from "./Star.js";

export default function StarRating({
	totalStars = 5,
	selectedStar = 0,
	onRate = (f) => f,
}) {
	return (
		<>
			{createArray(totalStars).map((n, i) => (
				<star
					key={i}
					selected={selectedStar > i}
					onSelect={() => onRate(i + 1)}
				/>
			))}
			<p>
				{selectedStar} of {totalStars} stars
			</p>
		</>
	);
}
