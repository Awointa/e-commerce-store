import SectionLabel from "./SectionLabel";
import PrimaryButton from "./PrimaryButton";
import ProductCardSlider from "./ProductCardSlider";

const BestSellingSection = () => {
	return (
		<div className="pt-[70px]">
			<SectionLabel text="This Month" />
			<div className="pt-3 flex items-center justify-between">
				<h4 className="text-4xl font-bold">Best Selling Products</h4>
				<PrimaryButton text="View All" />
			</div>
			<div className="pt-[60px]">
				<ProductCardSlider />
			</div>
		</div>
	);
};

export default BestSellingSection;
