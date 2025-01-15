import Logo from "../../../svgs/Logo";
import NewsLetterSignUp from "./NewsLetterSignUp";
import QrCodeImage from "./FooterImages/Qr-Code.svg";
import PlayStoreImage from "./FooterImages/playstore.svg";
import AppStoreImage from "./FooterImages/appstore.svg";

import Image from "next/image";

import TwitterIcon from "../../../svgs/TwitterIcon";
import LinkedInIcon from "../../../svgs/LinkedInIcon";
import InstagramIcon from "../../../svgs/InstagramIcon";
import FacebookIcon from "../../../svgs/FacebookIcon";

const Footer = () => {
	return (
		<div className="bg-black grid grid-rows-[1fr_auto] px-[135px] ">
			<div className="grid grid-cols-5 w-full  pt-20 pb-20 content-center justify-items-center gap-20">
				<div className="text-white-smoke flex flex-col gap-4">
					<div className="flex flex-col gap-6">
						<Logo fillColor="white" />
						<p className="text-xl font-semibold">suscribe</p>
						<p>Get 10% off your first email</p>
					</div>

					<NewsLetterSignUp />
				</div>
				<div className="text-white-smoke flex flex-col gap-6">
					<h3 className="text-white text-lg font-semibold">Support</h3>
					<div className="flex flex-col gap-4 text-wrap">
						<p>Sabon Tasha, Kaduna, Nigeria</p>
						<p>+234-9124-4856</p>
					</div>
				</div>
				<div className="text-white-smoke flex flex-col gap-6">
					<h3 className="text-white  text-lg font-semibold">Account</h3>
					<div className="flex flex-col gap-4">
						{" "}
						<p>My Account</p>
						<p>Login/Register</p>
						<p>Cart</p>
						<p>WishList</p>
						<p>Shop</p>
					</div>
				</div>
				<div className="text-white-smoke flex flex-col gap-6">
					<h3 className="text-white  text-lg font-semibold">Quick Link</h3>
					<div className="flex flex-col gap-4">
						<p>Privacy Policy</p>
						<p>Terms of Use</p>
						<p>FAQ</p>
						<p>Contact</p>
					</div>
				</div>
				<div className="text-white-smoke flex flex-col gap-6">
					<h3 className="text-white  text-lg font-semibold">Download App</h3>
					<div>
						<p className="text-white-smoke">Save $3 with App new users only</p>
						<div className="grid grid-cols-2 grid-rows-1 pt-3">
							<span className="col-start-1 row-span-2 justify-self-center w-full">
								<Image src={QrCodeImage} alt="QR Code" className="w-full" />
							</span>
							<div className="col-start-2 grid grid-row-2">
								{" "}
								<span className="row-start-1 w-full">
									<Image
										src={PlayStoreImage}
										alt="playstore"
										className="w-full"
									/>
								</span>
								<span className="row-start-2 w-full">
									<Image
										src={AppStoreImage}
										alt="appstore"
										className="w-full "
									/>
								</span>
							</div>
						</div>
					</div>
					<div className="flex justify-center gap-6">
						<FacebookIcon />
						<TwitterIcon />
						<InstagramIcon />
						<LinkedInIcon />
					</div>
				</div>
			</div>
			<div className=" text-center pb-6 text-ash-smoke">
				&#169; Copyright Awointa 2024. All right reserved{" "}
			</div>
		</div>
	);
};

export default Footer;
