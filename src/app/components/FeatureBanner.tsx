import Image from "next/image";
import Frame1 from "../assets/Frame-1.png";

const FeatureBanner = () => {
	return (
		<div className="relative w-full h-[600px]">
			<Image
				src={Frame1}
				alt="banner containing a product"
				fill
				className="object-fit"
			/>
		</div>
	);
};

export default FeatureBanner;
