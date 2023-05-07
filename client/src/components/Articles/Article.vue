<template>
    <div class="container">
        <div class="content">
            <h2 class="title">{{ article.title }}</h2>
            <p class="date">{{ getDate }}</p>
            <p class="text">{{ article.text }}</p>
            <div class="control-block">
                <a :href="'/article/edit/' + this.article.id">
                    <img src="https://www.svgrepo.com/show/510965/edit-pencil-01.svg" alt="edit">
                </a>
                <img src="https://www.svgrepo.com/show/513794/trash-1.svg" alt="trash" @click="deleteArticle">
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Article",
    data() {
        return {
            article: {},
            comments: {},
        }
    },
    props: ['id'],
    beforeMount() {
        axios.get(`http://localhost:3000/api/article/${this.id}`).then(res => this.article = res.data).catch(err => {
            console.log(err)
        })
    },
    computed: {
        getDate() {
            const date = new Date(this.article.createdAt)
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${day}.${month}.${year}`
        },
    },
    methods: {
        deleteArticle() {
            axios.delete(`http://localhost:3000/api/${this.article.id}`)
            location.replace('/')
        },
    }
}
</script>

<style scoped lang="scss">
.container {
  width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.content {
  position: relative;
}

.title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
}

.text {
  word-wrap: break-word;
  font-size: 18px;
}

.date {
  font-size: 12px;
  color: gray;
  margin-bottom: 20px;
}

.control-block {
  position: absolute;
  display: flex;
  gap: 0 20px;
  top: 20px;
  right: 20px;

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
</style>