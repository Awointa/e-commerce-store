import PrimaryLink from "../components/PrimaryLink";

const page = () => {
	return (
		<div className="mt-20 mx-[135px] mb-36">
			<ul className="flex gap-2">
				<li>Home</li>
				<li>/</li>
				<li>404 Error</li>
			</ul>

			<div className="flex flex-col items-center">
				<div className="flex flex-col items-center gap-10">
					<h1 className="text-8xl">404 Not Found</h1>
					<p className="text-base">
						Your visited page not found, You may go home page.
					</p>
				</div>
				<div className="mt-20">
					<PrimaryLink text="Back to home page" />
				</div>
			</div>
		</div>
	);
};

export default page;
