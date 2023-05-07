<template>
    <div class="wrapper">
        <p class="avatar"></p>
        <p>{{comment.text}}</p>
        <p class="date">{{getDate}}</p>
    </div>
</template>

<script>
export default {
    name: "CommentItem",
    props: {
        comment: {
            type: Object,
            required: true,
        },
    },
    computed:{
        getDate() {
            const date = new Date(this.comment.createdAt)
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${day}.${month}.${year}`
        },
    }
}
</script>

<style scoped lang="scss">
.wrapper{
    width: 1360px;
    padding: 30px 70px;
    position: relative;
    border-bottom: 1px solid gainsboro;
}
.avatar{
    position: absolute;
    top: 30px;
    left: 20px;
    width: 40px;
    height: 40px;
    background-color: gray;
    border-radius: 50%;
}
.date{
    font-size: 12px;
    color: gray;
    margin-top: 15px;
}

</style>