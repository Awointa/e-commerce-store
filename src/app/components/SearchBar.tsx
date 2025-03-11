import { Search } from "lucide-react";

function SearchBar() {
	return (
		<div className="relative">
			<input
				type="text"
				placeholder="What are you looking for?"
				className="pl-5 py-[7px] pr-3 text-sm w-60 bg-white-smoke border-none"
			/>
			<div className="absolute right-2 top-[7px] w-6 h-6 flex items-center justify-center">
				<Search  />
			</div>
		</div>
	);
}

export default SearchBar;
