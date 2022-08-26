<template>
    <div>getData</div>
  <hr />
    <div v-if="this.$userList === null" class="loader">
        <img width="70" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif" />
        <h4>데이터를 불러오는 중입니다.</h4>
        
    </div>
    <div v-else-if="this.$userList?.length < 1" class="loader">
        <h4>
            <img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" />
            유저가 발견되지 않았습니다.
        </h4>
    </div>
    <div v-else>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
      setTimeout(() => {
          this.$axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => {
              if(response.status !== 200){
                    alert('통신에러!');
                    this.$userList = [];
                }else{
                    this.$userList[0] = response.data;
                    console.log(this.$userList[0])
                }
            })
      }, 1
      );
          
    },
  methods: {
      async fetchData() {
        const response = this.$axios.get('https://jsonplaceholder.typicode.com/users/')
            if(response.status !== 200){
                alert('통신에러!');
                this.$userList = [0];
            }else{
                this.$userList[0] = response.data;
                console.log(this.$userList[0])
            }
          }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  
  list-style-type: none;
}

ul {
  padding: 0;
}
</style>
