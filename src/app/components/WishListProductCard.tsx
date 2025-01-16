import Image from "next/image";

import AddToCartButton from "./AddToCartButton";
import DeleteIcon from "../../../svgs/DeleteIcon";

import joystickImage from "./ProductImages/frame_611.png";

const WishListProductCard = () => {
	return (
		<div className="max-w-[270px] ">
			<div className="bg-white-smoke px-10 py-[35px] relative rounded-md">
				<div className="bg-gino-red text-white text-[12px] px-3 py-2 absolute top-3 left-3 rounded-md">
					- 35%
				</div>
				<div className="absolute top-3 right-3">
					<span className=" bg-white rounded-full flex items-center justify-center cursor">
						<DeleteIcon />
					</span>
				</div>
				<div className="w-[172px] h-[152px] relative mx-auto py-[35px] px-10">
					<Image src={joystickImage} fill alt="image of a joystick" />
				</div>
				<div className="absolute bottom-0 w-full left-0">
					<AddToCartButton />
				</div>
			</div>

			<div className="flex flex-col gap-2 pt-4">
				<p className="font-bold ">HAVIT HV-G92 Gamepad</p>
				<div className="flex gap-3">
					<span className="text-gino-red">&#8358; 5000</span>
					<span className="text-ash-smoke line-through">&#8358; 10000</span>
				</div>
			</div>
		</div>
	);
};

export default WishListProductCard;
