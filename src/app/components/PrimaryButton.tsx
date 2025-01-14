import React from "react";

interface PrimaryButtonProps {
	text: string;
}

const PrimaryButton = ({ text }: PrimaryButtonProps) => {
	return (
		<button className="bg-gino-red text-white-smoke text-[16px] px-12 py-4 rounded-md">
			{text}
		</button>
	);
};

export default PrimaryButton;
