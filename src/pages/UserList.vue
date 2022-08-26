<template>
    <ul>
        <li v-for="(num,idx) in NumGroup" :key="idx">
            <router-link :to="{name:'userPost',
            params:{
                userId: num,
            }}">
            <ListItem :userId="num" :completed="null"/>
            
            </router-link>
            
        </li>
    </ul>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
    data() {
        return{
            NumGroup : [],
        }
    },
    components: {
        ListItem,
    },
    methods: {
        filterNumGroup: function() {

            this.filteredUserList.filter(
            (user) => {
            
            let groupKey = user.userId;

            if(this.NumGroup.indexOf(groupKey) === -1){
                this.NumGroup.push(groupKey);
            }

            console.log(this.NumGroup);
            console.log(user.userId);
            return true;
            }
        );
        },

    },
    mounted() {
        setTimeout(() => {
        console.log(this.$userList)
        this.filterNumGroup();
    }, 1000);
    }, 
    
    computed: {
        filteredUserList(){
            return this.$userList[0].filter(
                //여기서부터
                (user) => {
                    console.log(user.userId);
                    return user.userId
                }
                //여기까지 함수입니다 :)
            );
        },
    }
}
</script>

<style>
.loader{
    text-align:center;
    border:1px solid #eee;
    border-radius:10px;
    margin:40px;
}
</style>