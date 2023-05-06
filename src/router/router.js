import CreatePost from "@/pages/CreatePost.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/create-post', component: CreatePost},
]

export const router = createRouter({
    routes,
    history: createWebHistory()
})