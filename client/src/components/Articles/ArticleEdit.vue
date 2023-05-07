<template>
    <div class="container">
        <div class="text-container">
            <input
                    type="text"
                    class="title text-input"
                    placeholder="Заголовок статьи"
                    name="title" maxlength="50"
                    v-bind:value="title"
                    @input="inputTitle"
            />
            <textarea
                    class="text text-input"
                    placeholder="Основной текст статьи"
                    name="text"
                    maxlength="3000"
                    v-bind:value="text"
                    @input="inputText"
            />
            <p :class="lengthClass">{{ getLength }}/3000</p>
        </div>
        <div class="text-buttons">
            <a :href="'/article/' + this.article.id">
                <button class="add-post text-button" @click="editArticle" :disabled="getLength < 50">Сохранить</button>
            </a>
            <button class="clear-post text-button" @click="clearFields">Очистить</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ArticleEdit",
    data() {
        return {
            article: {},
            title: "",
            text: "",
        }
    },
    props: ['id'],
    beforeMount() {
        axios.get(`http://localhost:3000/api/article/${this.id}`).then(res => {
            this.article = res.data
            this.text = this.article.text
            this.title = this.article.title
        }).catch(err => {
            console.log(err)
        })
    },
    computed: {
        getLength() {
            return this.length = this.text.length
        },
        lengthClass() {
            return this.getLength === 3000 ? 'length red' : 'length'
        },
    },
    methods: {
        editArticle() {
            axios.put(`http://localhost:3000/api/article/${this.id}`, {
                title: this.title,
                text: this.text
            })
                .then(() => {
                    location.replace(`/article/${this.id}`);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        inputTitle(event) {
            this.title = event.target.value
        },
        inputText(event) {
            this.text = event.target.value
        },
    }
}
</script>

<style scoped lang="scss">
.container {
  width: 1440px;
  margin: 0 auto;
  padding: 20px;
}

.text-container {
  display: flex;
  flex-direction: column;
  position: relative;
}

.text-input {
  border: 1px solid black;
  padding: 20px;
}

.text {
  height: 450px;
  resize: none;

  &:focus {
    height: 400px;
  }
}

.title {
  margin-bottom: 20px;
}

.text-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 0 20px;
}

.text-button {
  padding: 10px 10px;
  border-radius: 10px;
}

.clear-post {
  background-color: red;
  color: white;
}

.add-post {
  background-color: greenyellow;
}

.length {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 12px;
  color: gray;
}
</style>