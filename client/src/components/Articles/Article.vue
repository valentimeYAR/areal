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
            <div class="comments">
                <p>Комментарии</p>
                <div class="add-comment">
                    <input
                        class="comment-input"
                        type="text"
                        placeholder="Введите ваш комментарий"
                        name="comment"
                        v-bind:value="commentText"
                        @input="inputComment"
                    />
                    <img
                        src="https://www.svgrepo.com/show/491123/send.svg"
                         alt="Send comment btn"
                         class="send-btn"
                         @click="addComment"
                    />
                </div>
                <div class="comments-list" v-if="comments.length > 0">
                        <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import CommentItem from "@/components/Articles/CommentItem.vue";

export default {
    name: "Article",
    components: {CommentItem},
    data() {
        return {
            article: {},
            comments: {},
            commentText: "",
        }
    },
    props: ['id'],
    beforeMount() {
        axios.get(`http://localhost:3000/api/article/${this.id}`).then(res => this.article = res.data).catch(err => {
            console.log(err)
        })
        axios.get(`http://localhost:3000/api/article/${this.id}/comments`).then(res => this.comments = res.data)
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
        inputComment(e){
            this.commentText = e.target.value
        },
        addComment(){
            axios.post(`http://localhost:3000/api/article/${this.id}/comment/`,{
                text: this.commentText,
                forPost: this.id
            }).then(res => {
                location.reload()
                this.commentText = ""
            }).catch(err => console.log(err))
        }
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
.comments{
    margin-top: 40px;
    p{
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
    }
}
.comments-list{
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}
.add-comment{
    position: relative;
    margin-bottom: 20px;
}
.comment-input{
    border: 1px solid black;
    padding: 20px;
    width: 100%;
    border-radius: 10px;
}
.send-btn{
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 50%;
    padding: 5px;
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
}
</style>