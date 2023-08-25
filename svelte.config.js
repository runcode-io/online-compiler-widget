// import adapter from '@sveltejs/adapter-auto';
// import preprocess from "svelte-preprocess";

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	preprocess: [
// 		preprocess({
// 		  postcss: true,
// 		}),
// 	],
// 	kit: {
// 		adapter: adapter()
// 	}
// };

// export default config;






import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};
export default config;