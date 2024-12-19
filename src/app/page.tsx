import React from "react";
import Sidebar from "./components/Sidebar";
import ImageSlider from "./components/ImageSlider";

import slide1 from "./SliderImages/slide1.png";
import slide2 from "./SliderImages/slide1.png";
import slide3 from "./SliderImages/slide1.png";
import FlashSalesSection from "./components/FlashSalesSection";

const images = [slide1, slide2, slide3];

function page() {
	return (
		<div className="px-[135px] mb-11">
			<div className="grid grid-cols-[auto_1fr] grid-rows-1">
				<Sidebar />
				<div>
					<ImageSlider imageUrls={images} />
				</div>
			</div>
			<FlashSalesSection />
		</div>
	);
}

export default page;