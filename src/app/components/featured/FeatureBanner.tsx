import Image from "next/image";
const Frame1 = "/banners/Frame-1.png"

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
