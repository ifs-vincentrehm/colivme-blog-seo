/* eslint-disable prettier/prettier */

import axios from 'axios'
require('dotenv').config()

const baseURL = process.env.BACKEND_URL

export default {
    generate: {
        routes() {
            const articles = axios.get(baseURL + '/articles').then((res) => {
                return res.data.map((article) => {
                    return {
                        route: '/articles/' + article.slug,
                        payload: article
                    }
                })
            })

            const categories = axios.get(baseURL + '/categories').then((res) => {
                return res.data.map((category) => {
                    return {
                        route: '/categories/' + category.slug,
                        payload: category
                    }
                })
            })

            return Promise.all([articles, categories]).then((values) => {
                return [...values[0], ...values[1]]
            })
        }
    },
    mode: 'universal',
    server: {
        host: (process.env.MODE === 'production' || process.env.NODE_ENV === 'production') ? '0.0.0.0' : 'localhost', // default: localhost
        port: 3000 // default: 3000
    },
    env: {
        assetsBaseUrl: (process.env.NODE_ENV === 'production' || process.env.STATIC) ?
            'https://static.lescompagnonsducode.fr' : ''
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
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
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
        'nuxt-responsive-loader',
        // Doc: https://github.com/nuxt-community/modules/tree/master/packages/markdownit
        '@nuxtjs/markdownit',
        // Doc: https://www.npmjs.com/package/nuxt-cookie-control
        'nuxt-cookie-control',
        // Doc: https://github.com/nuxt-community/sitemap-module
        '@nuxtjs/sitemap',
        // Doc: https://github.com/nuxt-community/robots-module
        '@nuxtjs/robots',
        // Doc: https://github.com/AlekseyPleshkov/nuxt-social-meta
        ['nuxt-social-meta',
            {
                url: "https://colivme.netlify.app/",
                title: "Blog Colivme",
                site_name: "Blog Colivme",
                description: "Colivme est la 1ère plateforme de référencement des espaces de coliving en France.",
                img: "/image-social-networks.jpg",
                locale: "fr_FR",
                twitter: "@colivme",
                twitter_card: "summary_large_image",
                themeColor: "#223C4B",
            }
        ]
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
    robots: {
        UserAgent: '*',
        Allow: '/',
        Host: 'https://colivme.netlify.app/',
        Sitemap: 'https://colivme.netlify.app/sitemap.xml'
    },
    sitemap: {
        hostname: 'https://colivme.netlify.app/'
    },
    cookies: {
        necessary: [{
            name: {
                fr: "De base"
            },

            description: {
                fr: "Utilisés pour le consentement."
            },
            cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"]
        }],
        optional: [{
            name: {
                fr: "Google Tag Manager"
            },
            description: {
                fr: "Google Tag Manager est un service d'analyse Web proposé par Google qui suit et signale le trafic sur le site Web."
            },
            src: "https://www.googletagmanager.com/gtag/js?id=GTM-MCVX8CP",
            async: true,
            cookies: ['_ga', '_gat', '_gid'],
            accepted: () => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
            },
            declined: () => {}
        }]
    },
    markdownit: {
        preset: 'default',
        linkify: true,
        breaks: false,
        injected: true
    },
    pwa: {
        icon: {
            iconSrc: '~/assets/img/colivme-icon.jpg'
        }
    },
    responsiveLoader: {
        name: 'img/[name]-[width].[ext]', // use [name] to keep the original filename
        sizes: [320, 640, 768, 1024, 1280], // array of image sizes - adjust to your layout needs
        quality: 85, // 85 is default. Tweak this if you need to
        placeholder: true
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
            families: ['Roboto&display=swap']
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
        whitelist: ['lazyload', 'lazyloaded', 'body', 'html', 'nuxt-progress'],
        whitelistPatterns: [/cookieControl/],
        whitelistPatternsChildren: [/cookieControl/],
        extractors: () => [{
            extractor: (content) => (content || '').match(/[\w-/.:]+(?<!:)/g) || [],
            extensions: ['html', 'vue', 'js']
        }]
    },
    /*
     ** Build configuration
     */
    build: {
        // publicPath: 'https://static.lescompagnonsducode.fr',
        postcss: {
            preset: {
                features: {
                    // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
                    'focus-within-pseudo-class': false
                }
            }
        },
        extend(config, { loaders: { vue } }) {
            vue.transformAssetUrls.img = ['data-src', 'src']
            vue.transformAssetUrls.source = ['data-srcset', 'srcset']
        }
    }
}