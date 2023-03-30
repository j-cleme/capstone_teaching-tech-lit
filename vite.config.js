import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	build: {
		rollupOptions: {
			external: './node_modules/svelte-modals/Modals.svelte'
		}
	},
	plugins: [sveltekit()]
};

export default config;
