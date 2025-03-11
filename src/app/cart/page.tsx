import Link from "next/link";
import CartItem from "../components/cart/CartItem";
import PrimaryButton from "../components/ui/Button";
import PrimaryLink from "../components/PrimaryLink";

const page = () => {
	return (
		<div className="mx-[135px] mt-20 mb-60">
			<nav className="flex items-center space-x-2 text-sm">
				<Link href="/">Home</Link>
				<span>/</span>
				<Link href="/">Cart</Link>
			</nav>
			<div className="mt-20 flex flex-col gap-10">
				<div className="flex gap-52 py-6 px-10 bg-white shadow-md rounded-sm">
					<div className="flex-1">Product</div>
					<div className="flex-1">Price</div>
					<div className="flex-1">Quantity</div>
					<div className="flex-1">Subtotal</div>
				</div>
				<CartItem />
				<CartItem />
				<div className="w-full flex justify-between ">
					<PrimaryButton text="Return to shop" type="monochrome" />
					<PrimaryButton text="Update Cart" type="monochrome" />
				</div>
				<div className="mt-20 flex justify-between">
					<div className=" flex gap-4 h-14">
						<input
							type="text"
							placeholder="Coupon Code"
							className="border-0.5 border-black rounded-md py-4 px-40 pl-6 "
						/>
						<PrimaryButton text="Appy Coupon" type="" />
					</div>
					<div className="w-[422px] flex flex-col border-black border-0.5 px-6 py-8 rounded-md">
						<h4 className="text-xl">Cart Total</h4>
						<div className="border-b-0.5 border-ash-smoke pb-4  flex justify-between mt-6">
							<span>Subtotal:</span>
							<span>40000</span>
						</div>
						<div className="border-b-0.5 border-ash-smoke  pb-4 flex justify-between mt-6">
							<span>Shipping:</span>
							<span>Free</span>
						</div>
						<div className=" flex justify-between mt-6">
							<span>Total:</span>
							<span>40000</span>
						</div>
						<div className="mx-auto mt-4">
							<PrimaryLink text="Proceed to checkout" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
