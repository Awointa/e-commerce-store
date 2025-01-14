import SectionLabel from "./SectionLabel";

const FeaturedSection = () => {
	return (
		<div>
			<SectionLabel text="Featured" />
			<div className="pt-5">
				<h4 className="text-4xl font-bold">New Arrival</h4>
			</div>
			<div className="pt-[60px] grid grid-cols-2 grid-rows-1 gap-[30px] h-[570px] w-full">
				<div className="bg-red-500 col-start-1">1</div>
				<div className=" grid grid-rows-2 gap-[30px]">
					<div className="bg-red-500 ">3</div>
					<div className="grid grid-cols-2 gap-[30px]">
						<div className="bg-red-500 ">3</div>
						<div className="bg-red-500 ">3</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedSection;
