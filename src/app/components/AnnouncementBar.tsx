import LanguageOptions from "./LanguageOptions";

export default function announcementBar() {
	return (
		<div className="m-auto">
			<div className="bg-black flex justify justify-center items-center gap-[10%]">
				<div className=" text-white py-3 flex items-center justify-center gap-2">
					<p>
						Summer Sales For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
					</p>
					<a className="underline">ShopNow</a>
				</div>

				<LanguageOptions />
			</div>
		</div>
	);
}
