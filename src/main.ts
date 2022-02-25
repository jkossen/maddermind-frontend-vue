import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import './index.css'

import NumberGuesses from "./components/NumberGuesses.vue"
import ColorGuesses from "./components/ColorGuesses.vue"

const routes = [
    {
        path: '/colors',
        name: 'ColorGuesses',
        component: NumberGuesses,
        props: { showNumbers: false }
    },
    {
        path: '/numbers',
        name: 'NumberGuesses',
        component: NumberGuesses,
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
