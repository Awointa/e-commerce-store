import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		borderWidth: { "0.5": "0.5px" },
		extend: {
			colors: {
				"white-smoke": "#F5F5F5",
				"ash-smoke": "#7D8184",
				"dark-ash-smoke": "#2F2E30",
				"gino-red": "#DB4444",
				"lemon-green": "#00FF66",
			},
		},
	},
	plugins: [],
} satisfies Config;
