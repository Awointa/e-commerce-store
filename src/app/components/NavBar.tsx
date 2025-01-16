import CartIcon from "../../../svgs/CartIcon";
import HeartIcon from "../../../svgs/WishListIcon";
import Logo from "../../../svgs/Logo";
import SearchBar from "./SearchBar";
import UserIcon from "../../../svgs/UserIcon";

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
					<span className="rounded-full bg-gino-red p-1">
						<UserIcon />
					</span>
				</div>
			</div>
		</nav>
	);
}
