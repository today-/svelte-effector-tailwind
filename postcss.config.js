// only needed if you want to purge
// const purgecss = require("@fullhuman/postcss-purgecss")({
// 	content: ["./src/**/*.svelte", "./public/**/*.html"],
// 	defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
// });

module.exports = {
  plugins: [
    require('postcss-import'),
    require("tailwindcss"),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('autoprefixer')
    // only needed if you want to purge
    // ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
