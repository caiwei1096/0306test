<template>
  <div class="hello">
    <login></login>
  </div>
</template>

<script>
import  login from '@/components/login/login.vue'
  export default {
  name: 'HelloWorld',
    components:{
    login
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
