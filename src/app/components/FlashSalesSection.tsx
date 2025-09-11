"use client"

import { useState, useEffect } from "react";
import ArrowButton from "./ui/ArrowButton";
import ProductCardSlider from "./products/ProductCardSlider";
import SectionLabel from "./shared/SectionLabel";
import PrimaryButton from "./ui/Button";

const FlashSalesSection = () => {
	// State for countdown timer
	const [timeLeft, setTimeLeft] = useState({
		days: 3,
		hours: 23,
		minutes: 19,
		seconds: 56
	});

	// Countdown timer effect
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(prevTime => {
				let { days, hours, minutes, seconds } = prevTime;
				
				if (seconds > 0) {
					seconds--;
				} else if (minutes > 0) {
					minutes--;
					seconds = 59;
				} else if (hours > 0) {
					hours--;
					minutes = 59;
					seconds = 59;
				} else if (days > 0) {
					days--;
					hours = 23;
					minutes = 59;
					seconds = 59;
				}
				
				return { days, hours, minutes, seconds };
			});
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const CountdownUnit = ({ label, value }: { label: string; value: number }) => (
		<div className="flex flex-col items-center">
			<p className="text-xs text-gray-600 mb-1 font-medium">{label}</p>
			<span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 min-w-[2ch] text-center">
				{String(value).padStart(2, '0')}
			</span>
		</div>
	);

	const Separator = () => (
		<span className="font-bold text-red-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-1 sm:mx-2">
			:
		</span>
	);

	return (
		<section className="py-12 md:py-16 lg:py-20 border-b border-gray-200">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Label */}
				<div className="mb-4 md:mb-6">
					<SectionLabel text="Today's" />
				</div>

				{/* Header Section */}
				<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8 mb-8 md:mb-10">
					{/* Title and Countdown */}
					<div className="flex flex-col sm:flex-row sm:items-end gap-6 md:gap-12 lg:gap-16">
						{/* Title */}
						<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
							Flash Sales
						</h2>

						{/* Countdown Timer */}
						<div className="flex items-center gap-2 sm:gap-3 md:gap-4">
							<CountdownUnit label="Days" value={timeLeft.days} />
							<Separator />
							<CountdownUnit label="Hours" value={timeLeft.hours} />
							<Separator />
							<CountdownUnit label="Minutes" value={timeLeft.minutes} />
							<Separator />
							<CountdownUnit label="Seconds" value={timeLeft.seconds} />
						</div>
					</div>

					{/* Navigation Arrows - Hidden on mobile, shown on larger screens */}
					<div className="hidden lg:flex items-center gap-2">
						<ArrowButton type="left" />
						<ArrowButton type="right" />
					</div>
				</div>

				{/* Mobile Navigation Arrows */}
				<div className="flex lg:hidden justify-center gap-2 mb-6">
					<ArrowButton type="left" />
					<ArrowButton type="right" />
				</div>

				{/* Product Slider */}
				<div className="mb-8 md:mb-12 lg:mb-16">
					<ProductCardSlider />
				</div>

				{/* View All Products Button */}
				<div className="flex justify-center">
					<PrimaryButton 
						text="View All Products" 
						size="large"
						className="w-full sm:w-auto min-w-[200px]"
					/>
				</div>
			</div>
		</section>
	);
};

export default FlashSalesSection;