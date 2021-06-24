const svelte = require('@sveltejs/vite-plugin-svelte')
import {defineConfig} from 'vite'
import pugPlugin from 'vite-plugin-pug'
import sveltePreprocess from 'svelte-preprocess'
import devConfig from './dev-config.js'
// import WindiCSS from 'vite-plugin-windicss'
// import windiconfig from './windi.config'
const path = require('path')

module.exports = defineConfig(({command, mode}) => {
  const isProduction = mode === 'production'
  return {
    optimizeDeps: {
      exclude: ['svelte', 'skeleton-elements', 'framework7-svelte', 'framework7', 'dom7', 'swiper']
    },
    plugins: [
      svelte({
        hot: devConfig.styleDebug && !isProduction,
        // Svelte compiler options
        compilerOptions: {dev: devConfig.styleDebug && !isProduction},
        // Svelte preprocessors
        preprocess: [
          sveltePreprocess({
            pug: true
          }),
          require('svelte-windicss-preprocess').preprocess({
            config: 'tailwind.config.js', // tailwind config file path (optional)
            compile: false, // false: interpretation mode; true: compilation mode
            prefix: 'windi-', // set compilation mode style prefix
            globalPreflight: false, // set preflight style is global or scoped
            globalUtility: true, // set utility style is global or scoped
          })
        ]
        // Plugin options
      }),
      pugPlugin(),
      // WindiCSS(windiconfig)


    ],
    build: {
      minify: isProduction,
      outDir: 'www'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})
