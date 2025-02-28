import { BsTelephone } from "react-icons/bs";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import PrimaryButton from "../components/PrimaryButton";

const page = () => {
	return (
		<div className="mt-20 mx-[135px] mb-36">
			<ul className="flex gap-2">
				<li>Home</li>
				<li>/</li>
				<li>Contact</li>
			</ul>

			<div className="flex gap-6 mt-32">
				<div className="px-9 py-10 shadow-md rounded-sm">
					<div className="flex flex-col gap-6 border-b-0.5 border-ash-smoke ">
						<div className="flex items-center gap-4">
							<span className="flex justify-center items-center rounded-full w-10 h-10 bg-gino-red">
								<BsTelephone className="text-white w-5 h-5" />
							</span>
							<p>Call To Us</p>
						</div>
						<p>We are available 24 hours, 7 days a week</p>
						<div className="mb-8">
							<span>Phone:</span>
							<span>+23491244856</span>
						</div>
					</div>

					<div className="mt-8">
						<div className="flex flex-col gap-6">
							<div className="flex items-center gap-4">
								<span className="flex justify-center items-center rounded-full w-10 h-10 bg-gino-red">
									<PiEnvelopeSimpleThin className="text-white w-5 h-5" />
								</span>
								<p>Write To Us</p>
							</div>

							<div className=" flex flex-col gap-4">
								<p>Fill out our form and we will contact you within 24 hours</p>
								<div className="flex gap-[2px]">
									<span>Emails:</span>
									<span>Customer@exclusive.com</span>
								</div>
								<div className="flex gap-[2px]">
									<span>Emails:</span>
									<span>Support@exclusive.com</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center gap-8 py-10 px-8 text-ash-smoke shadow-md rounded-sm w-full">
					<div className="w-full flex gap-4 ">
						<input
							type="text"
							placeholder="Your Name"
							className="bg-white-smoke py-3 pl-4 flex-grow rounded-sm"
						/>
						<input
							type="email"
							placeholder="your Email"
							className="bg-white-smoke py-3 pl-4 flex-grow rounded-sm"
						/>
						<input
							type="text"
							placeholder="Your Phone"
							className="bg-white-smoke py-3 pl-4 flex-grow rounded-sm"
						/>
					</div>

					<textarea
						placeholder="Your Message"
						className="bg-white-smoke pt-3 pl-4 text-ash-smoke w-full h-full rounded-sm"
					></textarea>

					<div className="ml-auto">
						<PrimaryButton type="" text="Send Message" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
