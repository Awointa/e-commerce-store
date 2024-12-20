import React from "react";

interface Props {
	type: string;
}

const ArrowButton = ({ type }: Props) => {
	if (type === "left")
		return (
			<button className="rounded-full p-[11px] bg-white-smoke">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#000000"
				>
					<path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
				</svg>
			</button>
		);

	if (type === "right")
		return (
			<button className="rounded-full p-[11px] bg-white-smoke">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#000000"
				>
					<path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
				</svg>
			</button>
		);
};

export default ArrowButton;
