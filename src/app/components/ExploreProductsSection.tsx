import React from "react";
import SectionLabel from "./SectionLabel";
import ArrowButton from "./ArrowButton";
import ExploreProductsCard from "./ExploreProductsCard";
import PrimaryButton from "./PrimaryButton";

const ExploreProductsSection = () => {
	return (
		<section className="pt-[71px] pb-[140px] flex flex-col">
			<SectionLabel text="Our products" />
			<div className="pt-3 flex items-center justify-between">
				<h4 className="text-4xl font-bold">Explore Our Products</h4>
				<div className="flex gap-2">
					<ArrowButton type="left" />
					<ArrowButton type="right" />
				</div>
			</div>
			<div className="pt-[60px] grid gap-4 lg:grid-cols-4 row-auto ">
				<ExploreProductsCard />
			</div>
			<div className="mx-auto py-[60px]">
				<PrimaryButton text="view all products" />
			</div>
		</section>
	);
};

export default ExploreProductsSection;
