import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	build: {
		rollupOptions: {
			external: 'svelte-modals'
		}
	},
	plugins: [sveltekit()]
};

export default config;
