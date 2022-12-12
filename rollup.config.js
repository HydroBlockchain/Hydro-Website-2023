import replace from '@rollup/plugin-replace';
import includeEnv from "module/svelte-environment-variables";

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [
    replace({
      'process.env.BSCSCAN_API_KEY': JSON.stringify('Production API Key'),
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15,
      ...includeEnv(),
    })
  ]
};