import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// flowbite-react plugin removed; the page uses static CSS instead.

// https://vite.dev/config/
export default defineConfig({
	base: './',
	plugins: [react({
		babel: {
			plugins: [['babel-plugin-react-compiler']],
		},
	})],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
})