import CustomerServiceIcon from "../../../svgs/CustomerServiceIcon";
import DeliveryVanIcon from "../../../svgs/DeliveryVanIcon";
import RefundGuaranteeIcon from "../../../svgs/RefundGuaranteeIcon";
import ArrowUp from "../../../svgs/ArrowUp";

const BenefitsSection = () => {
	return (
		<div className="w-full py-[140px] flex gap-[88px] items-center justify-center relative">
			<div className="flex flex-col justify-center items-center gap-[24px]">
				<div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
					<div className="w-[58px] h-[58px] bg-black text-white-smoke flex items-center justify-center rounded-full">
						{" "}
						<DeliveryVanIcon />
					</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<h5 className="uppercase text-xl font-bold">
						Free and fast delivery
					</h5>
					<p className="text-sm">Free delivery for all orders over $140</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center gap-[24px]">
				<div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
					<div className="w-[58px] h-[58px] bg-black text-white-smoke flex items-center justify-center rounded-full">
						{" "}
						<CustomerServiceIcon />
					</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<h5 className="uppercase text-xl font-bold">24/7 customer service</h5>
					<p className="text-sm">Friendly 24/7 customer support</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center gap-[24px]">
				<div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
					<div className="w-[58px] h-[58px] bg-black text-white-smoke flex items-center justify-center rounded-full">
						{" "}
						<RefundGuaranteeIcon />
					</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<h5 className="uppercase text-xl font-bold">
						Moneyback back guarantee
					</h5>
					<p className="text-sm">We return money within 30 days</p>
				</div>
			</div>
			<div className="absolute bottom-[39px] right-[89px] p-[11px] bg-white-smoke rounded-full">
				<ArrowUp />
			</div>
		</div>
	);
};

export default BenefitsSection;
