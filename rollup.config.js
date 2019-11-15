import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import {terser} from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from 'rollup-plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: !production,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  plugins: [
    typescript({module: 'CommonJS'}),

    svelte({
      dev: !production,
      css: css => {
        css.write('public/bundle.pcss');
      },
      preprocess: sveltePreprocess({postcss: true, typescript: true})
    }),

    resolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),
    commonjs({extensions: ['.js', '.ts']}),

    !production && livereload('public'),

    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
