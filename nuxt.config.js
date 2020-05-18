/* eslint-disable prettier/prettier */

if (process.env.MODE === 'development' || process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
        // Doc: https://github.com/Developmint/nuxt-purgecss
        'nuxt-purgecss',
        // Doc: https://github.com/Developmint/nuxt-webfontloader
        'nuxt-webfontloader',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        // Doc: https://github.com/nuxt-community/svg-module
        '@nuxtjs/svg'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://pwa.nuxtjs.org/setup.html
        '@nuxtjs/pwa'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: process.env.MODE === 'production' || process.env.NODE_ENV === 'production' ? process.env.BACKEND_URL : 'http://localhost:1337'
    },
    /*
     * See https://github.com/nuxt-community/tailwindcss-module#configuration
     */
    tailwindcss: {
        configPath: '~/tailwind.config.js',
        cssPath: '~/assets/css/tailwind.css',
        exposeConfig: false
    },
    webfontloader: {
        google: {
            families: ['Inter']
        }
    },
    /*
     * See https://purgecss.com/guides/nuxt.html#nuxt-js-plugin
     * Modified based on tailwindUI settings: https://tailwindui.com/documentation#update-your-purgecss-configuration
     */
    purgeCSS: {
        mode: 'postcss',
        enabled: !!(process.env.NODE_ENV === 'production'),
        paths: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js'],
        styleExtensions: ['.css'],
        whitelist: ['body', 'html', 'nuxt-progress'],
        extractors: () => [{
            extractor: (content) => (content || '').match(/[\w-/.:]+(?<!:)/g) || [],
            extensions: ['html', 'vue', 'js']
        }]
    },
    /*
     ** Build configuration
     */
    build: {
        postcss: {
            preset: {
                features: {
                    // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
                    'focus-within-pseudo-class': false
                }
            }
        }
    }
}