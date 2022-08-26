import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Axios from 'axios'

import UserList from './pages/UserList'
import UserPost from './pages/UserPostList'
import UserPostDetail from './pages/UserPostDetail'

const routes = [
    { name: 'userList', path: '/', component: UserList},
    { name: 'userPost', path: '/:userId?', component: UserPost},
    { name: 'userDetail', path: '/:userId?/:Id?', component: UserPostDetail}
]


const router = createRouter({
    history: createWebHistory(),
    routes,
  })


const app = createApp(App)
app.use(router)

app.mount('#app')

app.config.globalProperties.$axios = Axios;
app.config.globalProperties.$userList = [];