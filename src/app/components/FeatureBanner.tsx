import Image from "next/image";
import Frame1 from "../assets/Frame-1.png";

const FeatureBanner = () => {
	return (
		<div className="relative w-full h-[500px]">
			<Image
				src={Frame1}
				alt="banner containing a product"
				fill
				className="object-fit max-w-full aspect-auto"
			/>
		</div>
	);
};

export default FeatureBanner;
