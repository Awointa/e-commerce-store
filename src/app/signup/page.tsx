import Link from "next/link";
import HeroImage from "../assets/hero-image.svg";
import Image from "next/image";

export default function page() {
	return (
		<div className="min-h-screen">
			<div className="md:flex w-full min-h-screen">
				{/* Hero Image Section - Hidden on mobile */}
				<div className="hidden md:block md:w-1/2 lg:w-3/5">
					<Image 
						src={HeroImage} 
						alt="hero image" 
						className="h-full w-full object-cover" 
					/>
				</div>

				{/* Form Section */}
				<div className="flex items-center justify-center w-full md:w-1/2 lg:w-2/5 px-6 py-8 md:px-8 lg:px-16 xl:px-24">
					<div className="flex flex-col w-full max-w-md">
						{/* Header */}
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center md:text-left">
							Create an account
						</h2>
						<p className="text-sm sm:text-base pt-2 md:pt-3 lg:pt-6 text-center md:text-left text-gray-600">
							Enter your details below
						</p>

						{/* Form Inputs */}
						<div className="mt-8 md:mt-6 lg:mt-12 flex flex-col gap-6 md:gap-5 lg:gap-6">
							<input
								type="text"
								placeholder="Name"
								name="Name"
								className="w-full border-b border-gray-300 pb-3 focus:border-gray-500 focus:outline-none transition-colors text-base"
								required
							/>
							<input
								type="email"
								placeholder="Email Or Phone Number"
								name="email"
								className="w-full border-b border-gray-300 pb-3 focus:border-gray-500 focus:outline-none transition-colors text-base"
								required
							/>
							<input
								type="password"
								placeholder="Password"
								name="password"
								className="w-full border-b border-gray-300 pb-3 focus:border-gray-500 focus:outline-none transition-colors text-base"
								required
							/>
						</div>

						{/* Action Buttons */}
						<div className="w-full mt-8 md:mt-10 flex flex-col gap-4">
							<button
								type="submit"
								className="w-full py-3 md:py-4 bg-red-500 hover:bg-red-600 text-white rounded-md flex justify-center items-center font-medium transition-colors text-base"
							>
								Create Account
							</button>
							<button 
								type="button"
								className="w-full bg-transparent border border-gray-300 hover:border-gray-400 py-3 md:py-4 flex justify-center items-center rounded-md transition-colors text-base"
							>
								Sign up with Google
							</button>
						</div>

						{/* Login Link */}
						<div className="flex justify-center items-center gap-2 mt-6 md:mt-8 text-sm md:text-base">
							<p className="text-gray-600">Already have an account?</p>
							<Link
								className="text-black border-b border-black hover:border-gray-600 transition-colors font-medium"
								href={"/login"}
							>
								Log in
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}