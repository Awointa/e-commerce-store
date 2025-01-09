import React from "react";

import Image from "next/image";

import joystickImage from "./ProductImages/frame_611.png";

import StarRating from "./StarRating";

const ProductCard = () => {
	return (
		<div className="max-w-[270px]">
			<div className="bg-white-smoke px-10 py-[35px]">
				<div className="w-[172px] h-[152px] relative mx-auto">
					<Image src={joystickImage} fill alt="image of a joystick" />
				</div>
			</div>

			<div className="flex flex-col">
				<p className="font-bold ">HAVIT HV-G92 Gamepad</p>
				<div className="flex gap-3">
					<span className="text-gino-red">&#8358; 5000</span>
					<span className="text-ash-smoke line-through">&#8358; 10000</span>
				</div>
			</div>
			<StarRating />
		</div>
	);
};

export default ProductCard;
