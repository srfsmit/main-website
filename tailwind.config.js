/** @type {import('tailwindcss').Config} */
export default {
       darkMode: 'class',
       content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
       theme: {
	       extend: {
		       fontFamily: {
	               satoshi: ["Satoshi", "sans-serif"],
	               poppins: ["Poppins", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
		       },
		       fontWeight: {
			       regular: 400,
			       medium: 500,
			       bold: 700,
			       light: 300,
		       },
	       },
       },
       plugins: [require("@tailwindcss/forms")],
};
