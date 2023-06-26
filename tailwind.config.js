/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				osans: ["Open Sans", "sans-serif"],
				scode: ["Source Code Pro", "monospace"],
				ssans: ["Source Sans 3", "sans-serif"],
			},
			colors: {
				custom: {
					primary: "#2563eb",
					secondary: "#111827",
					white: "#eff2f5",
					black: "060504",
				},
			},
		},
	},
	plugins: [],
};
