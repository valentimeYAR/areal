<template>
    <div :class="$style.wrapper">
        <p :class="$style.avatar"></p>
        <div v-if="!isEditing">
            <p :class="$style.text">{{ comment.text }}</p>
        </div>
        <div v-else>
            <input v-model="comment.text" :class='$style.edit' @input="inputComment"/>
        </div>
        <p :class="$style.date">{{ getDate }}</p>
        <p :class="$style.date" v-if="comment.editedAt !== null">Дата изменения: {{getEditDate}}</p>
        <div :class="$style.controlBlock">
            <img
                    v-if="!isEditing"
                    src="https://www.svgrepo.com/show/510965/edit-pencil-01.svg"
                    alt="edit"
                    @click.prevent="isEditing = true"
            />
            <img
                    src="https://www.svgrepo.com/show/390473/accept-approved-check-done-ok-tick.svg"
                    alt="accept"
                    v-if="isEditing"
                    @click.prevent="isEditing = false"
                    @click="editComment"
            />
            <img
                src="https://www.svgrepo.com/show/513794/trash-1.svg"
                alt="trash"
                @click="deleteComment"
                v-if="!isEditing"
            />
            <img src="https://www.svgrepo.com/show/445699/decline.svg"
                 alt="decline"
                 @click.prevent="isEditing=false"
                 v-if="isEditing"
            />
        </div>
    </div>
</template>

<script>
import axios from "axios";


export default {
    name: "CommentItem",
    props: {
        comment: {
            type: Object,
            required: true,
        },
        id: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            isEditing: false,
            commentText: ''
        }
    },
    computed: {
        getDate() {
            const date = new Date(this.comment.createdAt)
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${day}.${month}.${year}`
        },
        getEditDate() {
            const date = new Date(this.comment.editedAt)
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${day}.${month}.${year}`
        },
    },
    methods: {
        inputComment(e) {
            return this.commentText = e.target.value
        },
        deleteComment(e) {
            axios.delete(`http://localhost:3000/api/article/${this.id}/comment/${this.comment.id}`)
        },
        editComment(e) {
            axios.put(`http://localhost:3000/api/article/${this.id}/comment/${this.comment.id}`,{
                text: this.commentText,
            })
        },

    }
}
</script>

<style module lang="scss">
.wrapper {
  width: 1360px;
  padding: 30px 70px;
  position: relative;
  border-bottom: 1px solid gainsboro;
}

.avatar {
  position: absolute;
  top: 30px;
  left: 20px;
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 50%;
}

.date {
  font-size: 12px;
  color: gray;
  margin-top: 15px;
}

.panel {
  position: absolute;
  right: 20px;
  top: 50px;

  img {
    height: 20px;
    width: 20px;
  }
}

.controlBlock {
  position: absolute;
  right: 30px;
  top: 50px;
  display: flex;
  gap: 0 20px;
  cursor: pointer;

  img {
    height: 20px;
    width: 20px;
  }
}

.edit {
  border: 1px solid black;
  width: 900px;
  padding: 20px;
}
</style>