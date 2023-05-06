<script setup>

import './app.scss'
import Header from "@/components/Header.vue";
import CreatePost from "@/pages/CreatePost.vue";
import PostsBlock from "@/components/Articles/ArticlesBlock.vue";
</script>

<template>
    <Header/>
    <router-view></router-view>
</template>

<style scoped>

</style>
