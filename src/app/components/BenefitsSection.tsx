import CustomerServiceIcon from "../../../svgs/CustomerServiceIcon";
import DeliveryVanIcon from "../../../svgs/DeliveryVanIcon";
import RefundGuaranteeIcon from "../../../svgs/RefundGuaranteeIcon";
import ArrowUp from "../../../svgs/ArrowUp";

const BenefitsSection = () => {
	return (
		<div className="w-full py-20 md:py-[140px] flex flex-col md:flex-row gap-8 md:gap-[88px] items-center justify-center relative">
			{/* Delivery Section */}
			<div className="flex flex-col justify-center items-center gap-6 md:gap-[24px]">
				<div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center">
					<div className="w-12 h-12 md:w-[58px] md:h-[58px] bg-black text-white-smoke flex items-center justify-center rounded-full">
						<DeliveryVanIcon />
					</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<h5 className="uppercase text-lg md:text-xl font-bold">
						Free and fast delivery
					</h5>
					<p className="text-xs md:text-sm">
						Free delivery for all orders over $140
					</p>
				</div>
			</div>

			{/* Customer Service Section */}
			<div className="flex flex-col justify-center items-center gap-6 md:gap-[24px]">
				<div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center">
					<div className="w-12 h-12 md:w-[58px] md:h-[58px] bg-black text-white-smoke flex items-center justify-center rounded-full">
						<CustomerServiceIcon />
					</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<h5 className="uppercase text-lg md:text-xl font-bold">
						24/7 customer service
					</h5>
					<p className="text-xs md:text-sm">Friendly 24/7 customer support</p>
				</div>
			</div>

			{/* Moneyback Guarantee Section */}
			<div className="flex flex-col justify-center items-center gap-6 md:gap-[24px]">
				<div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center">
					<div className="w-12 h-12 md:w-[58px] md:h-[58px] bg-black text-white-smoke flex items-center justify-center rounded-full">
						<RefundGuaranteeIcon />
					</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<h5 className="uppercase text-lg md:text-xl font-bold">
						Moneyback guarantee
					</h5>
					<p className="text-xs md:text-sm">We return money within 30 days</p>
				</div>
			</div>

			{/* Arrow Button */}
			<div className="absolute bottom-4 md:bottom-[39px] right-4 md:right-[89px] p-2 md:p-[11px] bg-white-smoke rounded-full">
				<ArrowUp />
			</div>
		</div>
	);
};

export default BenefitsSection;
