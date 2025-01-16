import PrimaryButton from "../components/PrimaryButton";
import WishListProductCard from "../components/WishListProductCard";

const page = () => {
	return (
		<div className="px-[135px] pt-20">
			<div className="flex items-center justify-between">
				<h2 className="text-xl">Wishlist (4)</h2>
				<PrimaryButton text="Move All To Bag" type="monochrome" />
			</div>
			<div className="grid grid-cols-4 gap-6 mt-16 mb-20">
				<WishListProductCard />
			</div>
		</div>
	);
};

export default page;
