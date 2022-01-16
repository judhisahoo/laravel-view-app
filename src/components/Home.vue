<template>
  <div>
    <h1 v-if="user">Hi, {{user.name}}</h1>
    <button v-if="user"  class="btn btn-primary btn-block" @click="showProduct">Manage Product</button>
    <h1 v-if="!user">Hello</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default{
  name:'Home',
  computed:{
    ...mapGetters(['user'])
  },
  methods: {
    showProduct(){
      this.$router.push('/product-list');
    }
  },
}
</script>