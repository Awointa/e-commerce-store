import React from "react";
import Sidebar from "./components/layout/Sidebar";
import ImageSlider from "./components/ImageSlider";

import slide1 from "./SliderImages/slide1.png";
import slide2 from "./SliderImages/slide1.png";
import slide3 from "./SliderImages/slide1.png";

import FlashSalesSection from "./components/FlashSalesSection";
import CategoriesSection from "./components/categories/CategoriesSection";
import BestSellingSection from "./components/BestSellingSection";
import FeatureBanner from "./components/featured/FeatureBanner";
import ExploreProductsSection from "./components/exploreProducts/ExploreProductsSection";
import FeaturedSection from "./components/featured/FeaturedSection";
import BenefitsSection from "./components/BenefitsSection";

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
			<CategoriesSection />
			<BestSellingSection />
			<div className="pt-20">
				{" "}
				<FeatureBanner />
			</div>
			<ExploreProductsSection />
			<FeaturedSection />
			<BenefitsSection />
		</div>
	);
}

export default page;
