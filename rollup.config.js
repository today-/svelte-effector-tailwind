import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import {terser} from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import babel from 'rollup-plugin-babel';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  plugins: [
    svelte({
      dev: !production,
      css: css => {
        css.write('public/bundle.pcss');
      },
      preprocess: sveltePreprocess({postcss: true})
    }),

    resolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),
    commonjs(),

    !production && livereload('public'),

    production && babel({
      extensions: ['.js', '.mjs', '.html', '.svelte'],
      runtimeHelpers: true,
      exclude: ['node_modules/@babel/**'],
      presets: [
        [
          '@babel/preset-env',
          { targets: '> 0.25%, not dead' }
        ]
      ],
      plugins: [
        ['@babel/plugin-transform-runtime',
          { useESModules: true }
        ]
      ]
    }),

    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
