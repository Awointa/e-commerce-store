import { PiTwitterLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

import Image from "next/image";
import staff1 from "./assets/staff1.png";

const StaffCard = () => {
	return (
		<div className="flex flex-col ">
			<div className="bg-white-smoke">
				<Image src={staff1} alt="image of a staff" />
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					{" "}
					<p className="font-medium text-3xl">Tom Cruise</p>
					<p className="text-base">Founder & Chairman</p>
				</div>
				<div className="flex gap-4">
					<PiTwitterLogo className="w-5 h-5" />
					<FaInstagram className="w-5 h-5" />
					<RiLinkedinLine className="w-5 h-5" />
				</div>
			</div>
		</div>
	);
};

export default StaffCard;
