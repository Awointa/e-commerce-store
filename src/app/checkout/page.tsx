import Link from "next/link";
import Image from "next/image";

import VisaIcon from "../assets/Visa.png";
import MastercardIcon from "../assets/Mastercard.png";

import { CheckoutItem } from "./CheckoutItem";

const page = () => {
	return (
		<div className="mx-[135px] mt-20 mb-[140px]">
			<nav className="flex items-center space-x-2 text-sm">
				<Link href="/" className="">
					Account
				</Link>
				<span>/</span>
				<Link href="/">My Account</Link>
				<span>/</span>
				<Link href="/">Product</Link>
				<span>/</span>
				<Link href="/">ViewCart</Link>
				<span>/</span>
				<Link href="/">Checkout</Link>
			</nav>
			<div className="">
				<div className="text-4xl font-semibold mt-20">Billing Details</div>
				<div className="flex justify-between">
					<div className="w-[470px] mt-12 gap-8">
						<div className="flex flex-col gap-8">
							<div className="flex flex-col gap-2">
								<label className="text-ash-smoke">
									First Name<span className="text-gino-red">*</span>
								</label>
								<input
									type="text"
									className="w-full h-[50px] bg-white-smoke rounded-md border-none"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-ash-smoke">Company Name</label>
								<input
									type="text"
									className="w-full h-[50px] bg-white-smoke rounded-md border-none"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-ash-smoke">
									Street Address<span className="text-gino-red">*</span>
								</label>
								<input
									type="text"
									className="w-full h-[50px] bg-white-smoke rounded-md border-none"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-ash-smoke">
									Apartment, floor, etc. (optional){" "}
								</label>
								<input
									type="text"
									className="w-full h-[50px] bg-white-smoke rounded-md border-none"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-ash-smoke">
									Town/City<span className="text-gino-red">*</span>
								</label>
								<input
									type="text"
									className="w-full h-[50px] bg-white-smoke rounded-md border-none"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-ash-smoke">
									Phone Number<span className="text-gino-red">*</span>
								</label>
								<input
									type="text"
									className="w-full h-[50px] bg-white-smoke rounded-md border-none"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-ash-smoke">
									Email Address<span className="text-gino-red">*</span>
								</label>
								<input
									type="text"
									className="w-full h-[50px] bg-white-smoke rounded-md border-none"
								/>
							</div>
						</div>
						<div className="mt-6 flex gap-4 items-center">
							<input
								type="checkbox"
								className="h-6 w-6 rounded-md checked:bg-red-500 checked:text-white focus:ring-red-500"
							/>
							<p>Save this information for faster check-out next time</p>
						</div>
					</div>
					<div className="w-[425px] mt-20 flex flex-col gap-8">
						<div className="pr-[102px] flex flex-col gap-8">
							<div className="flex flex-col gap-8">
								<CheckoutItem />
								<CheckoutItem />
							</div>
							<div className=" flex flex-col gap-4">
								<div className="flex justify-between border-b-0.5 border-ash-smoke pb-4">
									<div>Subtotal:</div>
									<div>40000</div>
								</div>
								<div className="flex justify-between border-b-0.5 border-ash-smoke pb-4">
									<div>Shipping:</div>
									<div>Free</div>
								</div>
								<div className="flex justify-between">
									<div>Total:</div>
									<div>40000</div>
								</div>
							</div>
							<form className=" flex flex-col gap-8">
								<div className="flex justify-between">
									<label className="flex items-center gap-4">
										<input
											type="radio"
											value="bank"
											name="payment"
											className="h-6 w-6 text-black border-2 border-black focus:ring-black"
										/>
										<div>Bank</div>
									</label>
									<span className="flex gap-[10px]">
										<Image src={VisaIcon} alt="Visa icon" />
										<Image src={MastercardIcon} alt="mastrecard icon" />
									</span>
								</div>

								<label className="flex items-center gap-4">
									<input
										type="radio"
										value="cash on delivery"
										name="payment"
										className="h-6 w-6 form-radio text-black border-black focus:ring-black "
									/>
									<div>Cash on delivery</div>
								</label>
							</form>
						</div>
						<div className="flex justify-between ">
							<input
								type="text"
								placeholder="Coupon Code"
								className=" border-0.5 border-ash-smoke rounded-md py-4 pl-6"
							/>
							<button className="bg-gino-red text-white rounded-md py-4 px-12">
								Apply Coupon
							</button>
						</div>
						<div className="">
							<button className="bg-gino-red text-white rounded-md py-4 px-12">
								Place Order
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
