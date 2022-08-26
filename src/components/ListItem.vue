<template>
    <div class="userTodoListItem">
        <p v-if="userId != null">{{userId}}</p>
        <p v-if="id != null">{{id}}</p>
        <p v-if="title != null">{{title}}</p>
        <p v-if="completed != null">{{completed}}</p>
    </div>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        userId : Number,
        id : Number,
        title : String,
        completed : Boolean,
    }
}
</script>

<style>
.userTodoListItem {
    border: 2px solid #000;
    border-radius: 30px;
    padding: 30px;
    margin: 20px 0px;
}
</style>