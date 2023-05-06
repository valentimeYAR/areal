<script>
export default {
    name: "CreatePost",
    data() {
        return {
            text: "",
            title: ''
        }
    },
    methods: {
        inputTitle(event) {
            this.title = event.target.value
        },
        inputText(event) {
            this.text = event.target.value
        },
        clearFields(){
            this.title = ''
            this.text = ''
        }
    }

}
</script>

<template>
    <div class="container">
        <div class="text-container">
            <input
                    type="text"
                    class="title
                    text-input"
                    placeholder="Заголовок статьи"
                    name="title" maxlength="50"
                    v-bind:value="title"
                    @input="inputTitle"
            />
            <textarea
                    class="text text-input"
                    placeholder="Основной текст статьи"
                    name="text"
                    maxlength="3500"
                    v-bind:value="text"
                    @input="inputText"
            />
            <p>{{ text }}</p>
        </div>
        <div class="text-buttons">
            <button class="add-post text-button">Добавить статью</button>
            <button class="clear-post text-button" @click="clearFields">Очистить</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 1440px;
    margin: 0 auto;
    padding: 20px;
}

.text-container {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}

.text-input {
    border: 1px solid black;
    padding: 20px;
}

.text {
    height: 400px;
    resize: none;
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
</style>