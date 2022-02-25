import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import './index.css'

import GuessScreen from "./components/GuessScreen.vue"

const routes = [
    {
        path: '/colors',
        name: 'ColorGuesses',
        component: GuessScreen,
        props: { showNumbers: false }
    },
    {
        path: '/numbers',
        name: 'NumberGuesses',
        component: GuessScreen,
        props: { showNumbers: true }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
