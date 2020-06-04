/* eslint-disable prettier/prettier */

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            // Server output
            '.nuxt/**/*.html',
            '.nuxt/**/*.vue',
            '.nuxt/**/*.js',
            // SPA output
            'dist/**/*.html',
            'dist/**/*.js'
        ],
        options: {
            whitelist: ['lazyload', 'lazyloaded', 'body', 'html', 'nuxt-progress'],
            whitelistPatterns: [/cookieControl/],
            whitelistPatternsChildren: [/cookieControl/]
        }
    },
    theme: {
        // extend: {
        //     fontFamily: {
        //         sans: ['"Inter var"', ...defaultTheme.fontFamily.sans]
        //     }
        // }
        fontFamily: {
            sans: ['Roboto']
        }
    },
    variants: {},
    plugins: [require('@tailwindcss/ui')]
}