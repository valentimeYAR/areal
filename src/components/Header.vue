<script>
export default {
    name: "Header"
}
import '../assets/styles/header.scss'
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <router-link class="logo" to="/">AREAL</router-link>
            <router-link class="create-post" to="/create-post">Добавить статью</router-link>
        </div>
    </div>
</template>


<style scoped>

</style>