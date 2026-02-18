import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/lib/index.js',
  output: [
    { file: 'dist/index.js', format: 'cjs', sourcemap: true },
    { file: 'dist/index.mjs', format: 'esm', sourcemap: true }
  ],
  plugins: [
    svelte({
      compilerOptions: {
        dev: false
      }
    }),
    resolve({ browser: true, dedupe: ['svelte'] }),
    terser()
  ]
};
