import CategoryCard from "./CategoryCard";
import { Smartphone } from "lucide-react";
import { LaptopMinimal } from "lucide-react";
import { Camera } from "lucide-react";
import { Watch } from "lucide-react";
import { Headphones } from "lucide-react";
import { Gamepad } from "lucide-react";

const CategoriesSlider = () => {
	return (
		<div className="flex justify-center gap-8">
			<CategoryCard>
				<div>{<Smartphone className="w-14 h-14" />}</div>
				<p>Phones</p>
			</CategoryCard>

			<CategoryCard>
				<div>{<LaptopMinimal className="w-14 h-14" />}</div>
				<p>Computers</p>
			</CategoryCard>

			<CategoryCard>
				<div>{<Watch className="w-14 h-14" />}</div>
				<p>Watch</p>
			</CategoryCard>

			<CategoryCard>
				<div>{<Camera className="w-14 h-14 " />}</div>
				<p>Camera</p>
			</CategoryCard>

			<CategoryCard>
				<div>{<Headphones className="w-14 h-14 " />}</div>
				<p>Headphones</p>
			</CategoryCard>

			<CategoryCard>
				<div>{<Gamepad className="w-14 h-14 " />}</div>
				<p>Gaming</p>
			</CategoryCard>
		</div>
	);
};

export default CategoriesSlider;
