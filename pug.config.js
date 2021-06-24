const pug = require('pug')
const fs = require('fs')
const filename = process.argv[2]
const content = fs.readFileSync(filename, 'utf8' )

const GET_MIXINS = (identationType) =>
    `mixin if(condition)
%_| {#if !{condition}}
%_block
%_| {/if}
mixin else
%_| {:else}
%_block
mixin elseif(condition)
%_| {:else if !{condition}}
%_block
mixin key(expression)
%_| {#key !{expression}}
%_block
%_| {/key}
mixin each(loop)
%_| {#each !{loop}}
%_block
%_| {/each}
mixin await(promise)
%_| {#await !{promise}}
%_block
%_| {/await}
mixin then(answer)
%_| {:then !{answer}}
%_block
mixin catch(error)
%_| {:catch !{error}}
%_block
mixin html(expression)
%_| {@html !{expression}}
mixin debug(variables)
%_| {@debug !{variables}}`.replace(
        /%_/g,
        identationType === 'tab' ? '\t' : '  ',
    );
const transformer = async ({
                               content,
                               filename,
                               options,
                           }) => {
    const pugOptions = {
        doctype: 'html',
        compileDebug: false,
        pretty:true,
        filename,
        ...options,
    };

    const code = `${GET_MIXINS('space')}\n${content}`;
    const compiled = await pug.compile(
        code,
        pugOptions,
        // @types/pug compile() returned value doesn't have `dependencies` prop
    )

    return {
        code: compiled(),
        dependencies: compiled.dependencies ?? null,
    };
};
(transformer({content,filename}).then(result=>console.log(result.code)))

