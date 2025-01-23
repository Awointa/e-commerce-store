import Link from "next/link";

interface PrimaryLinkProps {
	text: string;
}

const PrimaryLink = ({ text }: PrimaryLinkProps) => {
	return (
		<Link
			href="/"
			className="bg-gino-red text-white-smoke  px-12 py-4 rounded-md"
		>
			{text}
		</Link>
	);
};

export default PrimaryLink;
