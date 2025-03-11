import PrimaryButton from "../components/ui/Button";
import SectionLabel from "../components/shared/SectionLabel";
import WishListProductCard from "../components/WishListProductCard";

const page = () => {
	return (
		<div className="px-[135px] mt-20 mb-60">
			<div>
				<div className="flex items-center justify-between">
					<h2 className="text-xl">Wishlist (4)</h2>
					<PrimaryButton text="Move All To Bag" type="monochrome" />
				</div>
				<div className="grid grid-cols-4 gap-6 mt-16 ">
					<WishListProductCard type="wishlist" />
				</div>
			</div>
			<div className="mt-20">
				<div className="flex items-center justify-between">
					<SectionLabel text="Just For You" />
					<PrimaryButton text="See All" type="monochrome" />
				</div>
				<div className="grid grid-cols-4 gap-6 mt-16 ">
					<WishListProductCard type="for-you" />
				</div>
			</div>
		</div>
	);
};

export default page;
