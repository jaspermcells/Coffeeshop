/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				"custom-background": "url('/src/components/pictures/coffeeshop.jpg')",
			},
			backgroundColor: {
				overlay: "rgba(0, 0, 0, 0.5)",
			},
			fontFamily: {
				unifrakturCook: ["UnifrakturCook"],
				lilitaOne: ["Lilita", "One"],
				Barriecito: ["Barriecito"],
				Poppins: ["Poppins"],
			},
			screens: {
				xs: "360px",
			},
		},
	},
	plugins: [require("daisyui")],
};
