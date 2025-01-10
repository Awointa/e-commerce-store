import Logo from "../../../svgs/Logo";
import NewsLetterSignUp from "./NewsLetterSignUp";

const Footer = () => {
	return (
		<div className="bg-black grid grid-rows-[1fr_auto]">
			<div className="grid grid-cols-5 w-full  pt-20 pb-20 content-center justify-items-center">
				<div className="text-white-smoke">
					<Logo fillColor="white" />
					<p>suscribe</p>
					<p>Get 10% off your first email</p>
					<NewsLetterSignUp />
				</div>
				<div className="text-white-smoke">
					<h3 className="text-white text-lg font-semibold">Support</h3>
					<p>Sabon Tasha, Kaduna, Nigeria</p>
					<p>+234-9124-4856</p>
				</div>
				<div className="text-white-smoke ">
					<h3 className="text-white  text-lg font-semibold">Account</h3>
					<p>My Account</p>
					<p>Login/Register</p>
					<p>Cart</p>
					<p>WishList</p>
					<p>Shop</p>
				</div>
				<div className="text-white-smoke ">
					<h3 className="text-white  text-lg font-semibold">Quick Link</h3>
					<p>Privacy Policy</p>
					<p>Terms of Use</p>
					<p>FAQ</p>
					<p>Contact</p>
				</div>
				<div className="text-white-smoke ">
					<h3 className="text-white  text-lg font-semibold">Download App</h3>
					<p>Save $3 with App new users only</p>
					<div></div>
				</div>
			</div>
			<div className=" text-center pb-6 text-ash-smoke">
				&#169; Copyright Awointa 2024. All right reserved{" "}
			</div>
		</div>
	);
};

export default Footer;
