import Forum from '../layout/forum';
const Main = () => import('@/views/forum/Main');
const Post = () => import('@/views/forum/Post');
const Topic = () => import('@/views/forum/Topic');
const Reply = () => import('@/views/forum/Reply');
export default {
    path: '/forum',
    component: Forum,
    redirect: 'forum/main',
    alias: '/forums',
    children:[
        {
            path: '/main',
            component: Main,
            meta: {
                header: 1
            }
        },
        {
            path: '/post',
            component: Post,
            meta: {
                header: 1
            }
        },
        {
            path: '/topic',
            component: Topic,
            meta: {
                header: 1
            }
        },
        {
            path: '/reply',
            component: Reply,
            meta: {
                header: 1
            }
        }
    ]
}