<template>
  <div class="hello">
       <login></login>
  </div>
</template>

<script>
  import  Login from '@/components/login/login.vue'
export default {

  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
