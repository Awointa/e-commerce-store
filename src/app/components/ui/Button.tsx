import React from "react";

interface PrimaryButtonProps {
	text: string;
	type: string;
}

const PrimaryButton = ({ text, type }: PrimaryButtonProps) => {
	if (type === "monochrome") {
		return (
			<button className="bg-white text-black border-0.5 border-black px-12 py-4 rounded-md">
				{text}
			</button>
		);
	} else if (type === "default") {
		return (
			<button className="bg-gino-red text-white-smoke  px-12 py-4 rounded-md">
				{text}
			</button>
		);
	}
};

export default PrimaryButton;
