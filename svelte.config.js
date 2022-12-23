import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';
import dotenv from "dotenv"
dotenv.config() 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: { $utils: resolve('./src/utils/'), $store: resolve('./src/store/') }
	},
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {prependData: `@import 'src/routes/styles.scss';`},
			replace: [["process.env.BSCSCAN_API_KEY", process.env.BSCSCAN_API_KEY]] 
		})
	]
};

export default config;