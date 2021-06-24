<template lang="pug">
script.
    import {
        Page, Navbar, PageContent,
        List, ListInput, ListItem, Button,
        Segmented, Tab, Tabs
    } from 'framework7-svelte'
    import devConfig from '/dev-config.js'
    import {onMount} from 'svelte'
    import {
        f7,
        f7ready,
        App,
        LoginScreen,
        View,
    } from 'framework7-svelte'
    export let f7router

    import {sendForm} from "./js/net/gform";
    import axios from "axios";
    const styleDebug = devConfig.styleDebug
    let f7params = {
        ...{
            name: 'NCTU-MEGA', // App name
            theme: 'auto', // Automatic theme detection
            serviceWorker: {
                path: '/service-worker.js',
            },
        }
    }

    onMount(async () => {
    })
App&attributes({f7params})
    Page
        Navbar(title="Framework7-svelte-vite")
        PageContent.bg-white
            p Welcome use framework7 on vite!
style(global).
    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
    }

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
        display: block;
        vertical-align: middle;
    }


</template>
