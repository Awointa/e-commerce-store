import CartIcon from "../../../svgs/CartIcon";
import HeartIcon from "../../../svgs/WishListIcon";
import Logo from "../../../svgs/Logo";
import SearchBar from "./SearchBar";
import UserIcon from "../../../svgs/UserIcon";
import MallBagIcon from "../../../svgs/MallBagIcon";
import CancelIcon from "../../../svgs/CancelIcon";
import ReviewsIcon from "../../../svgs/ReviewsIcon";
import LogoutIcon from "../../../svgs/LogoutIcon";

export default function NavBar() {
	return (
		<nav className="flex items-center justify-between  w-full px-[135px] pt-10 pb-4 border-b-0.5 border-gray-300 bg-white">
			<Logo />
			<div>
				<ul className="flex flex-row gap-12 ">
					<li>Home</li>
					<li>Contact</li>
					<li>About</li>
					<li>Sign Up</li>
				</ul>
			</div>
			<div className="flex gap-6">
				<SearchBar />
				<div className="flex items-center gap-4">
					<HeartIcon />
					<CartIcon />
					<div className=" rounded-full bg-gino-red p-1 postition relative">
						<UserIcon />
						<div className="absolute top-12 right-0 bg-black bg-opacity-50 backdrop-blur-md backdrop-saturate-150 border border-black/20 shadow-md z-10 flex flex-col  gap-[13px]  w-56 pt-[18px] pl-[16px] pr-[8px] pb-[10px] rounded-md">
							<div className="flex gap-4">
								<UserIcon />{" "}
								<p className="capitalize text-white-smoke-2">
									Manage My Account
								</p>
							</div>
							<div className="flex gap-4">
								<MallBagIcon />
								<p className="capitalize  text-white-smoke-2">My Order</p>
							</div>
							<div className="flex gap-4">
								<CancelIcon />
								<p className="capitalize text-white-smoke-2">
									My Cancellations
								</p>
							</div>
							<div className="flex gap-4">
								<ReviewsIcon />
								<p className="capitalize text-white-smoke-2">My Reviewws</p>
							</div>
							<div className="flex gap-4">
								<LogoutIcon />
								<p className="capitalize text-white-smoke-2">Logout</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
