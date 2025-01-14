import { CiCamera } from "react-icons/ci";

const CategoryCard = () => {
	return (
		<div className="border border-gray-300">
			<div className="flex flex-col items-center justify-center gap-4">
				<CiCamera />
				<div>Camera</div>
			</div>
		</div>
	);
};

export default CategoryCard;
