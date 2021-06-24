// tailwind.config.js

const env = process.env.NODE_ENV || 'development';
const target = process.env.TARGET || 'web';
const production = env === 'production';

module.exports = {
    // only needed in Tailwind 1.0 for tailwind 2.0 compat
    // future: {
    //     purgeLayersByDefault: true,
    //     removeDeprecatedGapUtilities: true,
    //   },
    plugins: [
        // for tailwind UI users only
        require('@tailwindcss/ui'),
        // other plugins here
    ],
    purge: {
        content: [
            "./src/**/*.svelte",
            // may also want to include HTML files
            // "./src/**/*.html"
        ],
        // this is for extracting Svelte `class:` syntax but is not perfect yet, see below
        defaultExtractor: content => {
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
            const broadMatchesWithoutTrailingSlash = broadMatches.map(match => _.trimEnd(match, '\\'))
            const matches = broadMatches
                .concat(broadMatchesWithoutTrailingSlash)
            return matches
        },
        enabled: production // disable purge in dev
    }
};
