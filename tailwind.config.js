/* eslint-disable prettier/prettier */

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './.nuxt/**/*.html',
        './.nuxt/**/*.vue',
        './.nuxt/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    variants: {},
    plugins: [require('@tailwindcss/ui')]
}