import DropDownArrow from "../../../svgs/DropDownArrow";

const Sidebar = () => {
	return (
		<ul className=" text-[16px]">
			<div className="flex flex-col gap-4 border-r-0.5 border-gray-300  pr-4 pt-10">
				<li className="flex justify-between gap-8 items-center">
					<span>Woman's Fashion </span>
					<DropDownArrow />
				</li>
				<li className="flex justify-between gap-8 items-center">
					Men's Fashion <DropDownArrow />
				</li>
				<li className="flex justify-between gap-8 items-center">
					<span>Electronics</span> <DropDownArrow />
				</li>
				<li>Home & Lifestyle</li>
				<li>Medicine</li>
				<li>Sports & Outdoor</li>
				<li>Baby & Toys</li>
				<li>Groceries & Pets</li>
			</div>
			<div>
				<li className="pt-4">Health & Beauty</li>
			</div>
		</ul>
	);
};

export default Sidebar;
