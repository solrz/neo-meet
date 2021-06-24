const preprocess = require('svelte-preprocess');

module.exports = {
    extensions: ['.svelte', '.svx'],
    preprocess: preprocess({
        typescript: false, // for typescript, use the typescript examples!
        postcss: true,
        pug: true
    })

};

