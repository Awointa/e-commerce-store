import Link from "next/link";
import PrimaryButton from "../components/PrimaryButton";

const page = () => {
	return (
		<div className="mt-20 mx-[135px] mb-36">
			<div className="flex justify-between items-center">
				<nav>
					<Link href="/">Home</Link>
					<span className="px-3">/</span>
					<Link href="/">My Account</Link>
				</nav>
				<div>
					<p>
						Welcome!<span className="text-gino-red">Awointa Akos</span>
					</p>
				</div>
			</div>

			<div className="flex justify-between mt-20">
				<div className="">
					<div>
						<h4 className="font-semibold">Manage my Account</h4>
						<ul className="pl-9 mt-4 flex flex-col gap-2">
							<li>My Profile</li>
							<li>Address Book</li>
							<li>My Payment Options</li>
						</ul>
					</div>
					<div className="mt-6">
						<h4 className="font-semibold">My Orders</h4>
						<ul className="pl-9  mt-4 flex flex-col gap-2">
							<li>My Returns</li>
							<li>My Cancelations</li>
							<li>My Payment Options</li>
						</ul>
					</div>
					<div className=" mt-6">
						<Link href="/" className="font-semibold">
							My WishList
						</Link>
					</div>
				</div>
				<div className="mt-4 px-20 py-10 flex flex-col">
					<h4 className="text-xl text-gino-red">Edit your profile</h4>
					<div className="mt-4 grid grid-cols-2 grid-rows-2 gap-x-[50px] gap-y-6">
						<div className="flex flex-col gap-2">
							<label>First Name</label>
							<input
								type="text"
								placeholder="Awointa"
								className="bg-white-smoke rounded-sm border-none pl-6 py-[13px]"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label>Last Name</label>
							<input
								type="text"
								placeholder="Akos"
								className="bg-white-smoke rounded-sm border-none pl-6 py-[13px]"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label>Email</label>
							<input
								type="email"
								placeholder="yakub@gmail.com"
								className="bg-white-smoke rounded-sm border-none pl-6 py-[13px]"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label>Address</label>
							<input
								type="text"
								placeholder="123, Awolowo way, Ikeja, Lagos"
								className="bg-white-smoke rounded-sm border-none"
							/>
						</div>
					</div>
					<div className="mt-6">
						<label>Password Changes</label>
						<div className="mt-2 flex flex-col gap-4">
							<input
								type="text"
								placeholder="Current Password"
								className="bg-white-smoke rounded-sm border-none pl-4 py-[13px]"
							/>
							<input
								type="text"
								placeholder="New Password"
								className="bg-white-smoke rounded-sm border-none pl-4 py-[13px]"
							/>
							<input
								type="text"
								placeholder="Confirm New Password"
								className="bg-white-smoke rounded-sm border-none pl-4 py-[13px]"
							/>
						</div>
					</div>
					<div className="mt-6 flex gap-2 self-end">
						<PrimaryButton type="monochrome" text="Cancel" />
						<PrimaryButton type="" text="Save Changes" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
