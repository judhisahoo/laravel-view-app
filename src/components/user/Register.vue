<template>
<main class="form-signin">
  <form @submit.prevent="handleSubmit">
    <img class="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Please Sign Up</h1>

    <div class="form-floating">
      <label for="floatingInput">Name</label>
      <input type="text" class="form-control" id="full_name"  v-model="full_name" placeholder="Enter the name">
    </div>
    <div class="form-floating">
      <label for="floatingInput">Email address</label>
      <input type="email" class="form-control" id="email"  v-model="email" placeholder="name@example.com">
    </div>
    <div class="form-floating">
      <label for="floatingInput">Phone</label>
      <input type="tel" class="form-control" id="phone"  v-model="phone" placeholder="Enter Phone number">
    </div>
    <div class="form-floating">
      <label for="floatingPassword">Password</label>
      <input type="password" class="form-control" id="password"  v-model="password" placeholder="Password ">
    </div>
    <div class="form-floating">
      <label for="floatingPassword">Confirm Password</label>
      <input type="password" class="form-control" id="confirmPassword"  v-model="confirmPassword" placeholder="Confirm Password">
    </div>
    
    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    <!--<p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>-->
  </form>
</main>
</template>

<script>
import axios from 'axios'

export default{
  name:'Register',
  data(){
    return {
      full_name:'',
      email:'',
      phone:'',
      password:'',
      confirmPassword:''
    }
  }, 
  methods:{
    async handleSubmit(){
      const data={
        name:this.full_name,
        email:this.email,
        phone:this.phone,
        password:this.password,
        password_confirmation:this.confirmPassword
      }
      //console.log(data);
      const resp=await axios.post('register',data);
      console.log(resp);
      //this.$router.push('/login');
    }
  }
}
</script>