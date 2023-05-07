import CreatePost from "../pages/CreatePost.vue";
import {createRouter, createWebHistory} from "vue-router";
import ArticlesBlock from "../components/Articles/ArticlesBlock.vue";

const routes = [
    {path: '/create-post', component: CreatePost},
    {path: '/', component: ArticlesBlock}
]

export const router = createRouter({
    routes,
    history: createWebHistory()
})