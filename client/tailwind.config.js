/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'], // Configured to all html, js, and jsx files in the src folder.
	mode: 'jit', // Enables just-in-time for performance.
	theme: {
		extend: {
			// Color palette.
			colors: {
				orange: '#dfb175',
				blue: '#2da4f8',
				'light-blue': '#0de7f8',
				black: '#0c101b',
				'transparent-black': 'rgba(19, 25, 28, 0.8)',
				white: '#ffffff',
				'off-white': '#F9F6ED'
			},
			// Background images.
			backgroundImage: {
				'login-crowd': "url('./assets/login-crowd.jpg')",
				'register-crowd': "url('./assets/register-crowd.jpg')"
			},
			// Fonts.
			fontFamily: {
				playfair: ['Playfair Display', 'serif'],
				source: ['Source Sans Pro', 'sans-serif']
			},
			flex: {
				2: '2 2 0%',
				3: '3 3 0%',
				6: '6 6 0%'
			}
		}
	},
	plugins: []
};
