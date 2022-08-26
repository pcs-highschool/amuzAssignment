<template>

  <div>UserPostList</div>
  <button @click="userIdListAll()">전체</button>
  <button @click="userIdListComplated()">완료</button>
  <button @click="userIdListIncomplated()">미완료</button>
  <ul>
    <li v-for="(user,idx) in this.$userList[0]" :key="idx">
        <div v-if="user.userId == userId">
            <div v-if="this.ListMesh == null">
                <router-link :to="{name:'userDetail',
                params:{
                    Id: user.id,
                    userId: userId,
                }}">
                <ListItem :title="user.title" :userId="user.userId" :completed="user.completed"/>
                </router-link>
            </div>
            <div v-else>
                <router-link :to="{name:'userDetail',
                params:{
                    Id: user.id,
                    userId: userId,
                }}">
                <ListItem v-if="user.completed == ListMesh" :title="user.title" :userId="user.userId" :completed="user.completed"/>
                </router-link>
            </div>
        </div>
    </li>
  </ul>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
    name: 'UserPost',
    data(){
        return{
        userId: this.$route.params.userId,
        ListMesh: null,
        }
    
    },
    components: {
        ListItem,
    },
    methods: {
        userIdListAll: function() {
            this.ListMesh = null;
            console.log(this.ListMesh)
        },
        userIdListComplated: function() {
            this.ListMesh = true;
            console.log(this.ListMesh)
        },
        userIdListIncomplated: function() {
            this.ListMesh = false;
            console.log(this.ListMesh)
        },
        
    },
}
</script>

<style>

</style>