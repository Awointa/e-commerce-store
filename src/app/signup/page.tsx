import Link from "next/link";
import HeroImage from "../assets/hero-image.svg";
import Image from "next/image";


export default function page() {
	return (
		<div className="flex justify-center items-center md:block">
			<div className="flex py-16 md:pt-[60px] md:pb-[140px] md:pr-[135px] md:gap-52">
				<div className="hidden lg:block">
					<Image src={HeroImage} alt="hero image" />
				</div>

				<form className="flex items-center">
					<div className="flex flex-col">
						<h2 className="text-4xl font-medium">Create an account</h2>
						<p className="text-base pt-6">Enter your details below</p>

						<div className="mt-12 flex flex-col gap-10">
							<input
								type="text"
								placeholder="Name"
								name="Name"
								className="capitalize border-b-0.5 border-ash-smoke pb-2"
								required
							/>
							<input
								type="email"
								placeholder="Email Or Phone Number"
								name="email"
								className="capitalize border-b-0.5 border-ash-smoke pb-2"
								required
							/>
							<input
								type="password"
								placeholder="password"
								name="password"
								className="capitalize border-b-0.5 border-ash-smoke pb-2"
								required
							/>
						</div>
						<div className="w-full mt-10 flex flex-col gap-4">
							<button
								type="submit"
								className=" py-4 bg-gino-red text-white-smoke rounded-md flex justify-center items-center capitalize"
							></button>
							<button className="bg-transparent capitalize border-0.5 border-ash-smoke py-4 flex justify-center items-center rounded-md">
								Sign up with Google
							</button>
						</div>
						<div className="flex justify-center gap-4 mt-8">
							<p>Already have an account? </p>
							<Link
								className="text-black border-b-0.5 border-black pb-1 font-normal"
								href={"/login"}
							>
								Log in
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
