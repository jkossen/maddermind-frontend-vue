import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from "vue-router";
import App from './App.vue'
import './index.css'

import StartScreen from "./components/StartScreen.vue"
import GuessScreen from "./components/GuessScreen.vue"

const routes = [
    {
        path: '/',
        name: 'StartScreen',
        component: StartScreen,
    },
    {
        path: '/play',
        name: 'GuessScreen',
        component: GuessScreen,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
