import Image from "next/image";

import monitor from "../assets/monitor.png";

export const CheckoutItem = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-5">
				<Image src={monitor} alt="photo of a monitor" width={42} height={42} />
				<div>LCD Monitor</div>
			</div>
			<div>200000</div>
		</div>
	);
};
