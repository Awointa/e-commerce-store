import Logo from "../../../../svgs/Logo";
import NewsLetterSignUp from "../NewsLetterSignUp";
// import QrCodeImage from "./FooterImages/Qr-Code.svg";

import Image from "next/image";

import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";

const PlayStoreImage = "/footerImages/playstore.svg";
const AppStoreImage = "/footerImages/appstore.svg";

const Footer = () => {
	return (
		<div className="bg-black grid grid-rows-[1fr_auto] px-6 md:px-16 lg:px-[135px]">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full pt-10 md:pt-16 lg:pt-20 pb-10 md:pb-16 lg:pb-20 content-center justify-items-center gap-6 md:gap-12 lg:gap-20">
				{/* Column 1 */}
				<div className="text-white-smoke flex flex-col gap-4">
					<div className="flex flex-col gap-4 md:gap-6">
						<Logo fillColor="white" />
						<p className="text-lg md:text-xl font-semibold">Subscribe</p>
						<p className="text-sm md:text-base">Get 10% off your first email</p>
					</div>
					<NewsLetterSignUp />
				</div>

				{/* Column 2 */}
				<div className="text-white-smoke flex flex-col gap-4 md:gap-6">
					<h3 className="text-white text-lg font-semibold">Support</h3>
					<div className="flex flex-col gap-2 text-wrap">
						<p>Sabon Tasha, Kaduna, Nigeria</p>
						<p>+234-9124-4856</p>
					</div>
				</div>

				{/* Column 3 */}
				<div className="text-white-smoke flex flex-col gap-4 md:gap-6">
					<h3 className="text-white text-lg font-semibold">Account</h3>
					<div className="flex flex-col gap-2">
						<p>My Account</p>
						<p>Login/Register</p>
						<p>Cart</p>
						<p>WishList</p>
						<p>Shop</p>
					</div>
				</div>

				{/* Column 4 */}
				<div className="text-white-smoke flex flex-col gap-4 md:gap-6">
					<h3 className="text-white text-lg font-semibold">Quick Link</h3>
					<div className="flex flex-col gap-2">
						<p>Privacy Policy</p>
						<p>Terms of Use</p>
						<p>FAQ</p>
						<p>Contact</p>
					</div>
				</div>

				{/* Column 5 */}
				<div className="text-white-smoke flex flex-col gap-4 md:gap-6">
					<h3 className="text-white text-lg font-semibold">Download App</h3>
					<p className="text-sm md:text-base">
						Save $3 with App (new users only)
					</p>
					<div className="grid grid-cols-2 gap-2 md:grid-cols-3">
						<div className="col-span-1 flex justify-center">
							<Image
								src="/footerImages/Qr-Code.svg"
								alt="QR Code"
								width={80}
								height={80}
							/>
						</div>
						<div className="col-span-1 md:col-span-2 flex flex-col gap-2">
							<Image
								src={PlayStoreImage}
								alt="playstore"
								width={110}
								height={40}
							/>
							<Image
								src={AppStoreImage}
								alt="appstore"
								width={110}
								height={40}
							/>
						</div>
					</div>
					<div className="flex justify-center gap-4">
						<Facebook />
						<Twitter />
						<Instagram />
						<Linkedin />
					</div>
				</div>
			</div>

			<div className="text-center pb-4 md:pb-6 text-ash-smoke text-sm md:text-base">
				&#169; Copyright Awointa 2024. All rights reserved.
			</div>
		</div>
	);
};

export default Footer;
