import CreatePost from "../pages/CreatePost.vue";
import {createRouter, createWebHistory} from "vue-router";
import ArticlesBlock from "../components/Articles/ArticlesBlock.vue";
import Article from "@/components/Articles/Article.vue";
import ArticleEdit from "@/components/Articles/ArticleEdit.vue";

const routes = [
    {path: '/create-post', component: CreatePost},
    {path: '/', component: ArticlesBlock},
    {path: '/article/:id', component: Article, props: true},
    {path: "/article/edit/:id", component: ArticleEdit, props: true},
]

export const router = createRouter({
    routes,
    history: createWebHistory()
})