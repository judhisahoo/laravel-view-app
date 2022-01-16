<template>
<main class="form-signin">
  <form @submit.prevent="handleSubmit">
    <img class="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <label for="floatingInput">Email address</label>
      <input type="email" class="form-control" id="floatingInput" v-model="email" placeholder="name@example.com">
    </div>
    <div class="form-floating">
      <label for="floatingPassword">Password</label>
      <input type="password" class="form-control" id="floatingPassword" v-model="password" placeholder="Password">
    </div>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-right"><router-link to="forgot">Forgot Password</router-link></p>
  </form>
</main>

</template>
<script>
import axios from "axios"



export default{
  
  name:'Login',
  data(){
    return {
      email:'',
      password: ''
    }
  },
  methods: {
    async handleSubmit(){
      const data={
        email:this.email,
        password:this.password
      }
      let resp=null;
      resp=await axios.post('login',data);
      console.log(resp);
      if(resp.data==''){
        this.$toasted.show("Invalid Login");
      }else{
        if(resp.data.type=='fail' && resp==null){
          console.log('error');
          this.$toasted.show("Invalid Login");
        }else{
          localStorage.setItem('token',resp.data.token);
          this.$store.dispatch('user',resp.data.user);
          console.log(resp.data);
          console.log('logedin success fully');
          this.$toasted.show("logedin success fully");
          setTimeout(() => {
            this.$router.push('/');  
          }, 2000);
        }
      }
      
    }
  },
}
</script>