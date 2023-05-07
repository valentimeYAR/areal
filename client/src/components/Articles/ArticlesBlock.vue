<template>
    <h2 class="title">Список доступных статей</h2>
    <div v-if="articles.length > 0" class="container">
        <ArticlesItem v-for="article in articles" :key="article.id" :article="article"/>
    </div>
</template>

<script>
import axios from "axios";
import ArticlesItem from "./ArticlesItem.vue";

export default {
    name: "PostsBlock",
    components: {ArticlesItem},
    data() {
        return {
            articles: []
        }
    },
    beforeMount() {
        axios.get("http://localhost:3000/api/articles").then(response => this.articles = response.data).catch(err => {
            console.log(err)
        })
    },
}

</script>

<style scoped lang="scss">
.container {
  width: 1400px;
  margin: 0 auto;
  margin-top: 20px;
}

.title {
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

