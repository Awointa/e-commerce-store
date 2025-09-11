import { AiOutlineShop } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiShoppingBag4Line } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import Image from "next/image";

// Images
import aboutHeroImage from "../assets/portrait-two-african-females.png";

// components
import BenefitsSection from "../components/BenefitsSection";
import StaffCard from "./StaffCard";

const page = () => {
	const statsData = [
		{
			icon: AiOutlineShop,
			number: "10.5k",
			description: "Sellers active on our site",
			id: 1
		},
		{
			icon: RiMoneyDollarCircleLine,
			number: "33k",
			description: "Monthly Product Sale",
			id: 2
		},
		{
			icon: RiShoppingBag4Line,
			number: "45.5k",
			description: "Customers active on our site",
			id: 3
		},
		{
			icon: GrMoney,
			number: "25k",
			description: "Annual gross sale on our site",
			id: 4
		}
	];

	return (
		<div className="min-h-screen">
			{/* Container with responsive padding */}
			<div className="px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
				{/* Breadcrumb */}
				<nav className="pt-6 md:pt-12 lg:pt-20 mb-6 md:mb-11">
					<ul className="flex items-center gap-2 text-sm md:text-base text-gray-600">
						<li className="hover:text-gray-800 transition-colors cursor-pointer">Home</li>
						<li>/</li>
						<li className="text-gray-800 font-medium">About</li>
					</ul>
				</nav>

				{/* Hero Section */}
				<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-24 lg:mb-36">
					{/* Text Content */}
					<div className="order-2 lg:order-1 space-y-6 md:space-y-8 lg:space-y-10">
						<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 leading-tight">
							Our Story
						</h1>
						<div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed">
							<p className="text-base md:text-lg">
								Launched in 2015, Exclusive is South Asia's premier online shopping
								marketplace with an active presence in Bangladesh. Supported by a
								wide range of tailored marketing, data and service solutions,
								Exclusive has 10,500 sellers and 300 brands and serves 3 million
								customers across the region.
							</p>
							<p className="text-base md:text-lg">
								Exclusive has more than 1 Million products to offer, growing at a
								very fast pace. Exclusive offers a diverse assortment in categories
								ranging from consumer electronics to fashion and lifestyle products.
							</p>
						</div>
					</div>

					{/* Hero Image */}
					<div className="order-1 lg:order-2 relative">
						<div className="aspect-[4/3] md:aspect-square lg:aspect-[4/3] xl:aspect-square relative rounded-lg overflow-hidden shadow-2xl">
							<Image
								src={aboutHeroImage}
								alt="Two African females representing our diverse community"
								className="object-cover w-full h-full"
								priority
							/>
						</div>
					</div>
				</section>

				{/* Statistics Section */}
				<section className="mb-16 md:mb-24 lg:mb-36">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
						{statsData.map((stat) => {
							const IconComponent = stat.icon;
							return (
								<div
									key={stat.id}
									className="group bg-white border border-gray-200 rounded-lg p-6 md:p-8 text-center hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg"
								>
									{/* Icon Container */}
									<div className="flex justify-center mb-4 md:mb-6">
										<div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-gray-200 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
											<div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-black group-hover:bg-white flex items-center justify-center transition-colors duration-300">
												<IconComponent className="text-white group-hover:text-red-500 w-6 h-6 md:w-8 md:h-8 transition-colors duration-300" />
											</div>
										</div>
									</div>

									{/* Statistics Content */}
									<div className="space-y-2 md:space-y-3">
										<div className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
											{stat.number}
										</div>
										<p className="text-sm md:text-base text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
											{stat.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</section>

				{/* Staff Section */}
				<section className="mb-16 md:mb-24 lg:mb-36">
					<div className="text-center mb-8 md:mb-12">
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
							Meet Our Team
						</h2>
						<p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
							Our dedicated team of professionals is committed to providing you with the best shopping experience.
						</p>
					</div>
					<StaffCard />
				</section>
			</div>

			{/* Benefits Section - Full Width */}
			<section className="bg-gray-50">
				<BenefitsSection />
			</section>
		</div>
	);
};

export default page;