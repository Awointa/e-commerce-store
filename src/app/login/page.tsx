import Image from "next/image";
import Link from "next/link";
import HeroImage from "../assets/hero-image.svg";

const page = () => {
	return (
		<div>
			<div className="grid grid-cols-[1fr_auto] pt-[60px] pb-[140px] pr-[135px] gap-[129px]">
				<div className="w-full h-[781px] bg-[#CBE4E8] flex justify-center  items-end">
					<Image src={HeroImage} alt="hero image" />
				</div>
				<div className="flex items-center w-[371px]">
					<div className="flex flex-col">
						<h2 className="text-4xl font-medium">Log in to Exclusive</h2>
						<p className="text-base pt-6">Enter your details below</p>
						<div className="mt-12 flex flex-col gap-10">
							<input
								type="email"
								placeholder="Email Or Phone Number"
								className="capitalize border-b-0.5 border-ash-smoke pb-2"
							/>
							<input
								type="password"
								placeholder="password"
								className="capitalize border-b-0.5 border-ash-smoke pb-2"
							/>
						</div>
						<div className="w-full mt-10 flex items-center justify-between">
							<Link
								href="/"
								className=" py-4 px-12 bg-gino-red text-white-smoke rounded-md flex justify-center items-center capitalize"
							>
								Log in
							</Link>
							<Link href="/" className="text-gino-red ">
								Forgot Password?
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
