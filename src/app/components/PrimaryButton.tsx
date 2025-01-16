import React from "react";

interface PrimaryButtonProps {
	text: string;
	type: string;
}

const PrimaryButton = ({ text, type }: PrimaryButtonProps) => {
	return type === "monochrome" ? (
		<button className="bg-white text-black border-0.5 border-black px-12 py-4 rounded-md">
			{text}
		</button>
	) : (
		<button className="bg-gino-red text-white-smoke  px-12 py-4 rounded-md">
			{text}
		</button>
	);
};

export default PrimaryButton;
