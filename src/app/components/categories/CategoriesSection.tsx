import ArrowButton from "../ui/ArrowButton";
import CategoriesSlider from "./CategoriesSlider";
import SectionLabel from "../shared/SectionLabel";

const CategoriesSection = () => {
	return (
		<section className="py-12 md:py-16 lg:py-20 border-b border-gray-200">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Label */}
				<div className="mb-4 md:mb-6">
					<SectionLabel text="Categories" />
				</div>

				{/* Header Section */}
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8 md:mb-12 lg:mb-16">
					{/* Title */}
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
						Browse by Category
					</h2>

					{/* Navigation Arrows - Hidden on mobile, shown on larger screens */}
					<div className="hidden sm:flex items-center gap-2 flex-shrink-0">
						<ArrowButton type="left" />
						<ArrowButton type="right" />
					</div>
				</div>

				{/* Mobile Navigation Arrows - Centered on mobile */}
				<div className="flex sm:hidden justify-center gap-2 mb-6">
					<ArrowButton type="left" />
					<ArrowButton type="right" />
				</div>

				{/* Categories Slider */}
				<div className="overflow-hidden">
					<CategoriesSlider />
				</div>

				{/* Optional: Category count or additional info */}
				<div className="text-center">
					<p className="text-sm md:text-base text-gray-600">
						Discover products across all categories
					</p>
				</div>
			</div>
		</section>
	);
};

export default CategoriesSection;