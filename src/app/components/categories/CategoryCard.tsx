import { ReactNode } from "react";

const CategoryCard = ({ children }: { children: ReactNode }) => {
	return (
		<div className="border-0.5 border-gray-300 w-44 h-36 flex justify-center items-center cursor-pointer rounded-sm">
			<div className="flex flex-col items-center justify-center">
				{children}
			</div>
		</div>
	);
};

export default CategoryCard;
