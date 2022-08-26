<template>
  유저상세디테일페이집니당.{{Id}}
  <button v-on:click="Id --">이전</button>
  <button v-on:click="Id ++">다음</button>

  <ul>
    <li v-for="(user,idx) in this.$userList[0]" :key="idx">
        <div v-if="user.id == Id">
            <div v-if="user.userId == userId">
                <ListItem :title="user.title" :userId="user.userId" :completed="user.completed"/>
            </div>
            <div v-else>
                유저아이디가 달라요
            </div>
        </div>
    </li>
  </ul>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
    name: 'userDetail',
    data(){
        return{
        userId: this.$route.params.userId,
        Id: this.$route.params.Id,
        }
    
    },
    components: {
        ListItem,
    },
}
    
</script>

<style>

</style>