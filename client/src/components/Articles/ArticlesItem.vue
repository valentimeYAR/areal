<template>
    <a :href="'/article/' + this.article.id">
        <div class="container" >
            <div class="secondary-info">
                <h2 class="title">{{ article.title }}</h2>
                <p class="id">{{ article.id }}</p>
            </div>
            <div class="text-container">
                <p class="text">{{ article.text }}</p>
            </div>
            <img src="https://www.svgrepo.com/show/513794/trash-1.svg" alt="trash" class="trash-svg"
                 @click="deleteArticle">
        </div>
    </a>
</template>

<script>
import axios from "axios";

export default {
    name: "ArticlesItem",
    props: {
        article: {
            type: Object,
            required: true,
        },
    },
    methods: {
        deleteArticle() {
            axios.delete(`http://localhost:3000/api/${this.article.id}`)
            location.reload()
        },
        openArticle(article) {

        }
    }
}
</script>

<style scoped lang="scss">
.container {
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  position: relative;
  word-wrap: break-word;
  cursor: pointer;
  color: black;
}

.secondary-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  p {
    color: darkgray;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
  }
}

.text {
  font-weight: 500;
  font-size: 18px;
  text-align: left;
  width: 100%;
}

.trash-svg {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>