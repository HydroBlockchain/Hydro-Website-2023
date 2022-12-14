import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    kit: {
        adapter: adapter({
            fallback: 'index.html',
            edge: false,
            split: false
        })
    },
    preprocess: [
        preprocess({
            scss: {
                prependData: `@import 'src/routes/styles.scss';`
            }
        }),
    ],
    onwarn: (warning, handler) => {
        const { code } = warning;
        if (code === 'css-semicolonexpected' || code === 'css-ruleorselectorexpected' || code === 'css-unused-selector')
            return;
        handler(warning);
    }
}

export default config