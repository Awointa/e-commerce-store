import CartIcon from "../../../svgs/CartIcon";
import HeartIcon from "../../../svgs/WishListIcon";
import Logo from "../../../svgs/Logo";
import SearchBar from "./SearchBar";
import UserIcon from "../../../svgs/UserIcon";
import MallBagIcon from "../../../svgs/MallBagIcon";
import CancelIcon from "../../../svgs/CancelIcon";
import ReviewsIcon from "../../../svgs/ReviewsIcon";
import LogoutIcon from "../../../svgs/LogoutIcon";
import Link from "next/link";
import {v4  as uuidv4} from 'uuid';

export default function NavBar() {

	const navItems = [{
		id: uuidv4(),
		item: "Home",
		link: "/"
	},
	{
		id: uuidv4(),
		item:"Contact",
		link: "/contact"
	},
	{
		id: uuidv4(),
		item:"About",
		link:"/about"
	},
	{
		id: uuidv4(),
		item:"Sign Up",
		link: "/signup"
	}
]

	return (
		<nav className="flex items-center justify-between w-full px-6 md:px-12 lg:px-[135px] pt-6 md:pt-8 lg:pt-10 pb-4  border-b-0.5 border-gray-300 bg-white">
			<Logo />
			<div className="hidden md:flex">
				<ul className="flex flex-row gap-6 md:gap-8 lg:gap-12 text-sm md:text-base">
					{navItems.map(item => <li className="cursor-pointer" key={item.id}><Link href={item.link}>{item.item}</Link></li>)}		
				</ul>
			</div>
			<div className="flex gap-4 md:gap-6 items-center">
				<SearchBar />
				<div className="flex items-center gap-3 md:gap-4">
					<HeartIcon />
					<CartIcon />
					<div className="relative rounded-full bg-gino-red p-1">
						<UserIcon />
						<div className="absolute top-12 right-0 bg-black bg-opacity-50 backdrop-blur-md backdrop-saturate-150 border border-black/20 shadow-md z-10 flex flex-col gap-3 w-48 md:w-56 pt-4 pl-4 pr-2 pb-3 rounded-md text-white-smoke">
							<div className="flex gap-2 md:gap-4 cursor-pointer">
								<UserIcon /> <p className="capitalize">Manage My Account</p>
							</div>
							<div className="flex gap-2 md:gap-4 cursor-pointer">
								<MallBagIcon />
								<p className="capitalize text-white-smoke-2">My Order</p>
							</div>
							<div className="flex gap-2 md:gap-4 cursor-pointer">
								<CancelIcon />
								<p className="capitalize text-white-smoke-2">
									My Cancellations
								</p>
							</div>
							<div className="flex gap-2 md:gap-4 cursor-pointer">
								<ReviewsIcon />
								<p className="capitalize text-white-smoke-2">My Reviews</p>
							</div>
							<div className="flex gap-2 md:gap-4 cursor-pointer">
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
