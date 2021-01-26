const { resolve, join } = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV === 'development';

export default {
  srcDir: './src',
  ssr: true,
  fullstatic: true,

  modern: isDev ? false : 'client',

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    ['@nuxtjs/pwa', {
      manifest: {
        display: 'browser'
      },
      workbox: {
        cachingExtensions: '@/workbox/workbox-range-request.js',
        runtimeCaching: [
          {
            urlPattern: /\/.*/,
            handler: 'networkFirst'
          }
        ]
      }
    }]
  ],

  router: {
    base: getBasePath()
  },

  modules: [
    '@/modules/svg',
    [
      'nuxt-speedkit', {
        ignorePerformance: true,
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
    ],
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Sitemap: join(getWebsiteHost(), getBasePath(), 'sitemap.xml')
      }
    ],
    [
      '@nuxtjs/sitemap', {
        path: 'sitemap.xml',
        hostname: getWebsiteHost(),
        cacheTime: 1000 * 60 * 15,
        gzip: false,
        exclude: [],
        defaults: {
          changefreq: 'daily',
          priority: 1,
          lastmod: new Date(),
          lastmodrealtime: true
        }
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
  },
  head: {
    title: 'Erwin Lorenz - Art Director',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Erwin Lorenz - Art Director' },

      { hid: 'description', name: 'description', content: 'Erwin Lorenz - Art Director' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Erwin Lorenz - Art Director' },
      { hid: 'og:title', property: 'og:title', content: 'Erwin Lorenz - Art Director' },
      { hid: 'og:description', property: 'og:description', content: 'Erwin Lorenz - Art Director' },
      { hid: 'og:url', property: 'og:url', content: getWebsiteHost() },
      { hid: 'og:image', property: 'og:image', content: `${getWebsiteHost().replace('https', 'http')}/sharing.jpg` },
      { hid: 'og:secure_url', property: 'og:secure_url', content: `${getWebsiteHost()}/sharing.jpg` },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpeg' },
      { hid: 'og:image:width', property: 'og:image:width', content: 1200 },
      { hid: 'og:image:height', property: 'og:image:height', content: 630 }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]

  }
};

function getBasePath () {
  return process.env.npm_config_base || process.env.BASE_PATH || '/';
}

function hasBuildAnalyze () {
  return process.env.npm_config_build_analyze || process.env.BUILD_ANALYZE;
}

export function getWebsiteHost (defaultValue = 'http://localhost:8050') {
  return process.env.npm_config_website_host || process.env.WEBSITE_HOST || defaultValue;
}
