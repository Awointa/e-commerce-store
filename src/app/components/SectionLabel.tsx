interface Props {
	text: string;
}

const SectionLabel = ({ text }: Props) => {
	return (
		<div className="flex gap-9 items-center">
			<div className="w-5 h-10 bg-gino-red  rounded-md"></div>
			<h4 className="text-gino-red text-[16px] font-bold">{text}</h4>
		</div>
	);
};

export default SectionLabel;
