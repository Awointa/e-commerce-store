interface PrimaryButtonProps {
	text: string;
	type?: "monochrome" | "default";
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
	htmlType?: "button" | "submit" | "reset";
	size?: "small" | "medium" | "large";
	fullWidth?: boolean;
	loading?: boolean;
}

const PrimaryButton = ({ 
	text, 
	type = "default", 
	className = "",
	onClick,
	disabled = false,
	htmlType = "button",
	size = "medium",
	fullWidth = false,
	loading = false
}: PrimaryButtonProps) => {
	
	// Base styles that apply to all buttons
	const baseStyles = "font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";
	
	// Size variants
	const sizeStyles = {
		small: "px-4 py-2 text-sm",
		medium: "px-6 py-3 text-base md:px-8 md:py-3",
		large: "px-8 py-4 text-lg md:px-12 md:py-4"
	};
	
	// Width styles
	const widthStyles = fullWidth ? "w-full" : "w-auto";
	
	// Type-specific styles
	const getTypeStyles = () => {
		switch (type) {
			case "monochrome":
				return "bg-white text-black border border-black hover:bg-gray-50 focus:ring-gray-500 active:bg-gray-100";
			case "default":
			default:
				return "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 active:bg-red-700";
		}
	};
	
	// Combine all styles
	const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${widthStyles} ${getTypeStyles()} ${className}`;
	
	return (
		<button 
			className={buttonStyles}
			onClick={onClick}
			disabled={disabled || loading}
			type={htmlType}
			aria-label={loading ? `${text} - Loading` : text}
		>
			{loading && (
				<svg 
					className="animate-spin -ml-1 mr-2 h-4 w-4" 
					xmlns="http://www.w3.org/2000/svg" 
					fill="none" 
					viewBox="0 0 24 24"
				>
					<circle 
						className="opacity-25" 
						cx="12" 
						cy="12" 
						r="10" 
						stroke="currentColor" 
						strokeWidth="4"
					/>
					<path 
						className="opacity-75" 
						fill="currentColor" 
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
			)}
			{loading ? "Loading..." : text}
		</button>
	);
};

export default PrimaryButton;