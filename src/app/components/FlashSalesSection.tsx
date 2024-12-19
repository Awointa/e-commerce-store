import SectionLabel from "./SectionLabel";

const FlashSalesSection = () => {
	return (
		<div className="mt-[100px]">
			<SectionLabel text="Today's" />
			<div className="pt-4 flex items-center">
				<h4 className="text-4xl font-bold pt-2">Flash Sales</h4>
				<div className="flex items-center">
					<span className="flex flex-col items-center px-1">
						<p className="text-[12px] ">Days</p>
						<span className="text-[32px] font-bold">03</span>
					</span>
					<span>:</span>
					<span className="flex flex-col items-center px-1">
						<p className="text-[12px]">Hours</p>
						<span className="text-[32px] font-bold">23</span>
					</span>
					:
					<span className="flex flex-col items-center px-1">
						<p className="text-[12px]">Minutes</p>
						<span className="text-[32px] font-bold">19</span>
					</span>
					:
					<span className="flex flex-col items-center px-1">
						<p className="text-[12px]">Seconds</p>
						<span className="text-[32px] font-bold">56</span>
					</span>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default FlashSalesSection;
