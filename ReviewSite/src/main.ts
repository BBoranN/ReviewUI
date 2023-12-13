
import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory} from "vue-router"
import Landing from './components/landing.vue';

const routes=[
    {path:'/Login',name: 'Login', component:Landing},

]

const router= createRouter({
    history:createWebHashHistory(),
    routes,
})




createApp(App).use(router).mount('#app')
