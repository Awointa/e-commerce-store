/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { useState } from "react";

type ImageSliderProps = {
	imageUrls: string[];
};

function ImageSlider({ imageUrls }: ImageSliderProps) {
	const [imageIndex, setImageIndex] = useState(0);

	function showNextImage() {
		setImageIndex((index: number) => {
			return index === imageUrls.length - 1 ? 0 : index + 1;
		});
	}

	function showPrevImage() {
		setImageIndex((index: number) => {
			return index === 0 ? imageUrls.length - 1 : index - 1;
		});
	}

	return (
		<div className="pt-11 pl-10 ">
			<div className="relative w-full h-[600px] md:h-96 lg:h-[500px] ">
				{imageUrls.map((url, index) => (
					<Image
						key={index}
						src={url}
						fill
						alt={`slide${imageIndex}`}
						className="object-fit"
					/>
				))}
			</div>
		</div>
	);
}

export default ImageSlider;
