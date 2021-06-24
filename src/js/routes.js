import firebase from "firebase";

const analytics = firebase.analytics();
const ga_router_track = {
    pageAfterIn: function (e, page) {
        window.dispatchEvent(new Event('resize'))

        analytics.logEvent('screen_view', {
            screen_name: page.name || page.route.path
        })
        // analytics.logEvent('page_view', {
        //   page_title: page.name || page.route.path,
        //   page_path: page.route.path
        // })
        console.log(e)
        console.log(page)
    }
}
var routes = [
    {
        path: '/',
        asyncComponent: () => import('/src/pages/index.svelte'),
        on: ga_router_track,
        master: true
    },
    {
        path: '/today',
        asyncComponent: () => import('/src/pages/index.svelte'),
        on: ga_router_track,
        master: true
    },
    {
        path: '/withdraw/nctu',
        asyncComponent: () => import('/src/pages/withdraw/nctu.pug.svelte'),
        on: ga_router_track,
        master: false
    },
    {
        path: '/withdraw/nthu',
        asyncComponent: () => import('/src/pages/withdraw/nthu.pug.svelte'),
        on: ga_router_track,
        master: false
    },
    {
        path: '/timetable',
        asyncComponent: () => import('/src/pages/course/index.svelte'),
        on: ga_router_track
    },
    {
        path: '/aboutme',
        asyncComponent: () => import('/src/pages/about.svelte'
            ),
        on: ga_router_track
    },
    {
        path: '/homeworks',
        asyncComponent: () => import(
            '@/pages/homework/index.svelte'
            ),
        on: ga_router_track
    },
    {
        path: '/announcements',
        asyncComponent: () => import(
            '@/pages/bulletin/index.svelte'

            ),
        on: ga_router_track
    },
    {
        path: '/students',
        asyncComponent: () => import(
            '@/pages/student/index.svelte'

            ),
        on: ga_router_track
    },
    {
        path: '/chats',
        asyncComponent: () => import(
            '@/pages/chat.svelte'

            ),
        on: ga_router_track
    },
    {
        path: '/course/:courseID',
        asyncComponent: () => import(
            '@/pages/course/[courseid].svelte'

            ),
        on: ga_router_track
    },
    {
        path: '/media/',
        asyncComponent: () => import(
            '@/pages/media-viewer/[mediahref].svelte'

            ),
        on: ga_router_track
    },
    {
        path: '/forum/:forumID/:moduleID',
        asyncComponent: () => import(
            '@/pages/forum.svelte'
            ),
        on: ga_router_track
    },
    {
        path: '/homework/:homeworkID',
        asyncComponent: () => import(
            '@/pages/homework/[hw-id].svelte'
            ),
        on: ga_router_track
    },
    {
        path: '/how-to-install',
        asyncComponent: () => import(
            '@/pages/howinstall.pug.svelte'
            ),
        on: ga_router_track
    },
    {
        path: '(.*)',
        asyncComponent: () => import(
            '@/pages/404.svelte'
            ),
        on: ga_router_track
    },
];

export default routes;
