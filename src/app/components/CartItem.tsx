import Image from "next/image";

import monitor from "../assets/monitor.png";

const CartItem = () => {
	return (
		<div className="flex py-6 px-10 items-center bg-white shadow-md rounded-sm gap-52 justify-center">
			<div className="flex-1 flex items-center gap-5">
				<Image src={monitor} alt="photo of a monitor" width={42} height={42} />
				<div>LCD Monitor</div>
			</div>
			<div className="flex-1">200000</div>
			<input
				type="number"
				min="0"
				max="100"
				defaultValue="1"
				className="flex-1 px-3 py-[10px] border-black border-0.5 rounded-md"
			/>
			<div className="flex-1">200000</div>
		</div>
	);
};

export default CartItem;
