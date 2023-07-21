/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	//https://stackoverflow.com/a/72323247
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				osans: ["Open Sans", "sans-serif"],
				scode: ["Source Code Pro", "monospace"],
				ssans: ["Source Sans", "sans-serif"],
			},
			colors: {
				custom: {
					primary: "#2563eb",
					secondary: "#111827",
					slight: "#172135",
					white: "#eff2f5",
					wdark: "#E3E8ED",
					dwhite: "#F7F3F3",
					black: "#060504",
					sub: "#898989",
					dsub: "#ABADB2",
				},
			},
		},
	},
	plugins: [],
};
