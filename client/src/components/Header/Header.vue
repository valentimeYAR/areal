<script>
export default {
    name: "Header"
}
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <router-link class="logo" to="/">AREAL</router-link>
            <div class="right">
                <router-link class="create-post" to="/create-post">Добавить статью</router-link>
                <router-link to="/groupBy/" class="create-post">Найти комментарии по дате</router-link>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.container {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.wrapper {
    background-color: mediumpurple;
    padding: 20px;
}

.logo {
    font-size: 32px;
    font-weight: 700;
    cursor: pointer;


}

.logo:hover {
    color: white;
}

.create-post {
    padding: 10px 20px;
    background-color: palegoldenrod;
    font-size: 15px;
    border-radius: 10px;
    border: 2px solid palegoldenrod;
    color: black


}
.right{
    display: flex;
    align-items: center;
    gap: 0 20px;
}
.create-post:hover {
    background-color: transparent;
    color: black;
}
</style>