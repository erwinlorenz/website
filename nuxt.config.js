const { resolve } = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV === 'development';

export default {
  srcDir: './src',
  ssr: true,
  modern: isDev ? false : 'client',

  head: {
    title: 'Erwin Lorenz - Art Director',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  router: {
    base: getBasePath()
  },

  modules: [
    '@/modules/svg',

    [
      'nuxt-speedkit', {
        ignorePerformance: false,
        fonts: [{
          family: 'Montserrat',
          locals: ['Montserrat Black'],
          fallback: ['sans-serif'],
          variances: [
            {
              style: 'normal',
              weight: 300,
              sources: [
                { src: '@/assets/fonts/montserrat-v15-latin/montserrat-v15-latin-300.woff', type: 'woff' },
                { src: '@/assets/fonts/montserrat-v15-latin/montserrat-v15-latin-300.woff2', type: 'woff2' }
              ]
            },
            {
              style: 'normal',
              weight: 900,
              sources: [
                { src: '@/assets/fonts/montserrat-v15-latin/montserrat-v15-latin-900.woff', type: 'woff' },
                { src: '@/assets/fonts/montserrat-v15-latin/montserrat-v15-latin-900.woff2', type: 'woff2' }
              ]
            }
          ]
        }]
      }
    ]
  ],

  build: {
    postcss: {
      plugins: {
        'postcss-nesting': {}
      }
    },

    extend (config) {
      if (hasBuildAnalyze()) {
        config.plugins.push(new BundleAnalyzerPlugin({
          reportFilename: resolve(`.reports/webpack/${config.name}.html`),
          statsFilename: resolve(`.reports/webpack/stats/${config.name}.json`),
          analyzerMode: 'static',
          generateStatsFile: true,
          openAnalyzer: false,
          logLevel: 'info',
          defaultSizes: 'gzip',
          statsOptions: 'normal'
        }));
      }
    }
  }
};

function getBasePath () {
  return process.env.npm_config_base || process.env.BASE_PATH || '/';
}

function hasBuildAnalyze () {
  return process.env.npm_config_build_analyze || process.env.BUILD_ANALYZE;
}
