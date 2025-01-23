import Link from "next/link";

const page = () => {
	return (
		<div className="mx-[135px] mt-20 mb-60">
			<nav className="flex items-center space-x-2 text-sm">
				<Link href="/">Home</Link>
				<span>/</span>
				<Link href="/">Cart</Link>
			</nav>
			<div className="mt-20">
				<div className="flex justify-between py-6 px-10 bg-white shadow-md rounded-sm">
					<div>Product</div>
					<div>Price</div>
					<div>Quantity</div>
					<div>Subtotal</div>
				</div>
			</div>
		</div>
	);
};

export default page;
