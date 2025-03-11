import ArrowButton from "./ui/ArrowButton";
import ProductCardSlider from "./products/ProductCardSlider";
import SectionLabel from "./shared/SectionLabel";
import PrimaryButton from "./ui/Button";

const FlashSalesSection = () => {
	return (
		<section className="mt-[100px] flex flex-col border-b-gray-300 border-b-0.5">
			<SectionLabel text="Today's" />
			<div className="flex items-center justify-between pt-3">
				<div className="flex items-center gap-[87px]">
					<h4 className="text-4xl font-bold pt-4">Flash Sales</h4>

					<div className="flex items-center">
						<div className="flex flex-col items-center px-1">
							<p className="text-[12px] ">Days</p>
							<span className="text-[32px] font-bold">03</span>
						</div>
						<span className="font-bold text-gino-red text-[32px]">:</span>
						<div className="flex flex-col items-center px-1">
							<p className="text-[12px]">Hours</p>
							<span className="text-[32px] font-bold">23</span>
						</div>
						<span className="font-bold text-gino-red text-[32px]">:</span>
						<div className="flex flex-col items-center px-1">
							<p className="text-[12px]">Minutes</p>
							<span className="text-[32px] font-bold">19</span>
						</div>
						<span className="font-bold text-gino-red text-[32px]">:</span>
						<div className="flex flex-col items-center px-1">
							<p className="text-[12px]">Seconds</p>
							<span className="text-[32px] font-bold">56</span>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-2">
					<ArrowButton type="left" />
					<ArrowButton type="right" />
				</div>
			</div>
			<div className="pt-10">
				<ProductCardSlider />
			</div>
			<div className="mx-auto py-[60px]">
				<PrimaryButton text="view all products" />
			</div>
		</section>
	);
};

export default FlashSalesSection;
