"use client";

import React from "react";

import Image from "next/image";

import joystickImage from "../ProductImages/frame_611.png";

import StarRating from "../ui/StarRating";
import { Heart } from "lucide-react";
import { Eye } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const ProductCard = () => {
	return (
		<div className="max-w-[270px] ">
			<div className="bg-white-smoke px-10 py-[35px] relative rounded-md">
				<div className="bg-gino-red text-white text-[12px] px-3 py-2 absolute top-3 left-3 rounded-md">
					- 40%
				</div>
				<div className="flex flex-col gap-2 absolute top-3 right-3">
					<span className="p-[10px] bg-white rounded-full flex items-center justify-center">
						<Heart />
					</span>
					<span className="p-[10px] bg-white rounded-full flex items-center justify-center">
						<Eye />
					</span>
				</div>
				<div className="w-[172px] h-[152px] relative mx-auto py-[35px] px-10">
					<Image src={joystickImage} fill alt="image of a joystick" />
				</div>
				<div className="absolute bottom-0 w-full left-0 hover:visible hidden transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
					<ShoppingCart />
				</div>
			</div>

			<div className="flex flex-col gap-2 pt-4">
				<p className="font-bold ">HAVIT HV-G92 Gamepad</p>
				<div className="flex gap-3">
					<span className="text-gino-red">&#8358; 5000</span>
					<span className="text-ash-smoke line-through">&#8358; 10000</span>
				</div>
				<StarRating
					maxRating={5}
					color="#FFAD33"
					size={20}
					className="star-rating"
					messages={["1", "2", "4", "4", "5"]}
					defaultRating={0}
					onSetRating={(rating) => console.log(`Rating set to ${rating}`)}
				/>
			</div>
		</div>
	);
};

export default ProductCard;
