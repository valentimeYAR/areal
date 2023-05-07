<template>
    <div class="list">
        <div class="inputs">
            <input type="text" placeholder="Введите дату от XX.XX.XXX" class="input" v-bind:value="dateFrom" @input="inputDateFrom"/>
            <input type="text" placeholder="Введите дату до XX.XX.XXX" class="input" v-bind:value="dateTo" @input="inputDateTo"/>
        </div>
        <button class="getComments2" @click="getComments">Получить комментарии</button>
        <div class="result" v-for="comment in comments">
            <div class="resultBlock">
                <p class="text">{{comment.text}}</p>
                <a class="linkToPost" :href="'/article/' + comment.forPost">Ссылка на статью</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import CommentItem from "@/components/Articles/CommentItem.vue";

export default {
    name: "GroupByDate",
    components: {CommentItem},
    data(){
        return{
            dateFrom: "",
            dateTo: "",
            comments: {}
        }
    },
    methods: {
        getComments(){
            axios.get(`http://localhost:3000/api/analytic/comments?dateFrom=${this.dateFrom}&dateTo=${this.dateTo}`)
                .then(response => {
                    this.comments = response.data
                })
        },
        inputDateFrom(event){
            this.dateFrom = event.target.value
        },
        inputDateTo(event){
            this.dateTo = event.target.value
        }
    },
    computed:{

    }
}
</script>

<style scoped>
.list {
    width: 1400px;
    margin: 0 auto;
    margin-top: 50px;
}
.input{
    border: 1px solid black;
    padding: 20px;
    margin-right: 20px;
}
.getComments2{
    margin-top: 20px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: honeydew;
}
.result{
    display: flex;
    gap: 20px 0;
    flex-direction: column;

}
.resultBlock{
    padding: 20px;
    border-bottom: 1px solid gray;
}
.linkToPost{
    color: red;
}
.text{
    margin-bottom: 20px;
}
</style>