<<<<<<< HEAD
const page = () => {
	return (
		<div className="mt-29 mx-[135px] mb-36">
			<div className="flex text-sm">
				<div>Home</div>
				<span className="px-3 ">/</span>
				<div>About</div>
			</div>
=======
import Image from "next/image";

import { AiOutlineShop } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiShoppingBag4Line } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";

// Images
import aboutHeroImage from "../assets/portrait-two-african-females.png";

// components
import BenefitsSection from "../components/BenefitsSection";
import StaffCard from "./StaffCard";

const page = () => {
	return (
		<div className="mt-20  mb-36">
			<ul className="mx-32 flex gap-2">
				<li>Home</li>
				<li>/</li>
				<li>About</li>
			</ul>
			<section className="mt-11 ml-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
				<div className="p-7">
					<h2 className="text-5xl font-semibold">Our Story</h2>
					<div className="mt-10 space-y-4 text-gray-600 font-poppins">
						<p>
							Launced in 2015, Exclusive is South Asia’s premier online shopping
							makterplace with an active presense in Bangladesh. Supported by
							wide range of tailored marketing, data and service solutions,
							Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
							customers across the region.{" "}
						</p>
						<p>
							Exclusive has more than 1 Million products to offer, growing at a
							very fast. Exclusive offers a diverse assotment in categories
							ranging from consumer.
						</p>
					</div>
				</div>
				<div className="relative aspect-[4/3] md:aspect-square">
					<Image
						src={aboutHeroImage}
						alt="hero image"
						className="object-cover h-full"
					/>
				</div>
			</section>

			{/*section 2  */}
			<section className="mt-36 mx-[135px] flex flex-col md:flex-row justify-between text-base gap-6">
				{/* Individual cards */}
				{/* Card 1 */}
				<div className="flex-grow flex flex-col items-center justify-center gap-6 border-0.5 border-ash-smoke p-4 w-full md:w-auto rounded-sm hover:bg-gino-red hover:text-white cursor-pointer">
					<div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center ">
						<div className="h-14 w-14 rounded-full bg-black flex items-center justify-center">
							<AiOutlineShop className="text-white w-10 h-10" />
						</div>
					</div>
					<div className="flex-grow flex flex-col items-center justify-center gap-3">
						<span className="text-3xl font-semibold">10.5k</span>
						<p className="text-center">amount of stuff sold</p>
					</div>
				</div>

				{/* Card 2 */}
				<div className="flex-grow flex flex-col items-center justify-center gap-6 border-0.5 border-ash-smoke p-4 w-full md:w-auto rounded-sm hover:bg-gino-red hover:text-white cursor-pointer">
					<div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center">
						<div className="h-14 w-14 rounded-full bg-black flex items-center justify-center">
							<RiMoneyDollarCircleLine className="text-white w-10 h-10" />
						</div>
					</div>
					<div className="flex-grow flex flex-col items-center justify-center gap-3">
						<span className="text-3xl font-semibold">33k</span>
						<p className="text-center">Monthly Product Sale</p>
					</div>
				</div>

				{/* Card 3 */}
				<div className="flex-grow flex flex-col items-center justify-center gap-6 border-0.5 border-ash-smoke p-4 w-full md:w-auto rounded-sm hover:bg-gino-red hover:text-white cursor-pointer">
					<div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center">
						<div className="h-14 w-14 rounded-full bg-black flex items-center justify-center">
							<RiShoppingBag4Line className="text-white w-10 h-10" />
						</div>
					</div>
					<div className="flex flex-col items-center justify-center gap-3">
						<span className="text-3xl font-semibold">45.5k</span>
						<p className="text-center">Customer active in our site</p>
					</div>
				</div>

				{/* Card 4 */}
				<div className="flex-grow flex flex-col items-center justify-center gap-6 border-0.5 border-ash-smoke p-4 w-full md:w-auto rounded-sm hover:bg-gino-red hover:text-white cursor-pointer">
					<div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center">
						<div className="h-14 w-14 rounded-full bg-black flex items-center justify-center">
							<GrMoney className="text-white w-10 h-10 font-light" />
						</div>
					</div>
					<div className="flex flex-col items-center justify-center gap-3">
						<span className="text-3xl font-semibold">25k</span>
						<p className="text-center">Annual gross sale in our site</p>
					</div>
				</div>
			</section>

			{/* section 3 */}
			<section className="mt-36 mx-[135px]">
				<StaffCard />
			</section>

			{/* section 4 */}
			<section>
				<BenefitsSection />
			</section>
>>>>>>> 75fd2c464f3874c04a09f1037ed74b0b23039098
		</div>
	);
};

export default page;
