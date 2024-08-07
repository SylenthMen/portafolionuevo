import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				berlin: ['berlin', ...defaultTheme.fontFamily.sans],
				berlinBold: ['berlinBold', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
}
