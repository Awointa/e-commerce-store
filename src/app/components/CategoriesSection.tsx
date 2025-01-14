import ArrowButton from "./ArrowButton";
import CategoriesSlider from "./CategoriesSlider";
import SectionLabel from "./SectionLabel";

const CategoriesSection = () => {
	return (
		<section className="pt-20 border-b-0.5 border-gray-300">
			<SectionLabel text="Categories" />
			<div className="flex items-center justify-between pt-3">
				<h4 className="text-4xl font-bold">Browse by Category</h4>
				<div className="flex items-center gap-2">
					<ArrowButton type="left" />
					<ArrowButton type="right" />
				</div>
			</div>
			<div className="py-[60px]">
				<CategoriesSlider />
			</div>
		</section>
	);
};

export default CategoriesSection;
