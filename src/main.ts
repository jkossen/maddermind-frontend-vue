import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from "vue-router";
import App from './App.vue'
import './index.css'
import axios from "axios";

import StartScreen from "./components/StartScreen.vue"
import GuessScreen from "./components/GuessScreen.vue"
import LevelCompletedScreen from "./components/LevelCompletedScreen.vue"

// @ts-ignore
axios.defaults.baseURL = import.meta.env.VITE_API_BASEURL || 'http://localhost:12001/'
axios.defaults.timeout = 1000

const routes = [
    {
        path: '/',
        name: 'StartScreen',
        component: StartScreen,
    },
    {
        path: '/play/:level',
        name: 'GuessScreen',
        component: GuessScreen,
    },
    {
        path: '/completed/:level/:nrAttempts',
        name: 'LevelCompleted',
        component: LevelCompletedScreen
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
