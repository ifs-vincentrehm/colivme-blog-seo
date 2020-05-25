/* eslint-disable prettier/prettier */

if (process.env.MODE === 'development' || process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

export default {
    mode: 'universal',
    server: {
        host: (process.env.MODE === 'production' || process.env.NODE_ENV === 'production') ? '0.0.0.0' : 'localhost', // default: localhost
        port: 3000 // default: 3000
    },
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
    plugins: [
        '~/plugins/lazysizes.js'
    ],
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
        // '@nuxtjs/svg', // incompatible with nuxt-responsive-loader
        // Doc: https://github.com/geeogi/nuxt-responsive-loader#readme
        'nuxt-responsive-loader'
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
    responsiveLoader: {
        name: 'img/[name]-[width].[ext]', // use [name] to keep the original filename
        sizes: [320, 640, 768, 1024, 1280], // array of image sizes - adjust to your layout needs
        quality: 85, // 85 is default. Tweak this if you need to
        placeholder: true,
        adapter: require('responsive-loader/sharp')
    },
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
            families: ['Inter&display=swap']
        }
    },
    /*
     * See https://purgecss.com/guides/nuxt.html#nuxt-js-plugin
     * Modified based on tailwindUI settings: https://tailwindui.com/documentation#update-your-purgecss-configuration
     */
    purgeCSS: {
        mode: 'postcss',
        enabled: !!(process.env.NODE_ENV === 'production'),
        paths: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js'
        ],
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
        },
        extend(config, { isClient, loaders: { vue } }) {
            if (isClient) {
                vue.transformAssetUrls.img = ['data-src', 'src']
                vue.transformAssetUrls.source = ['data-srcset', 'srcset']
            }
        }
    }
}