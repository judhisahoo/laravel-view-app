<template>
  <form @submit.prevent="handleSubmit" style="min-height:200px;">
      <h3 class="text-center">Reset Password</h3>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" placeholder="password">
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input type="password" class="form-control" v-model="password_confirm" placeholder="Confirm password">
      </div>

      <button class="btn btn-primary btn-block">Submit</button>
  </form>
</template>

<script>
  import axios from "axios"
  export default{
    name:'Resetpass',
    data(){
      return {
        password : '',
        password_confirm:''
      }
    },
    methods: {
      async handleSubmit(){
        const resp=await axios.post('reset-user-pass',{
          password:this.password,password_confirmation:this.password_confirm,token:this.$route.params.token
        });
        console.log(resp);
        setTimeout(() => {
          if(resp.data.type=='success'){
            this.$toasted.show(resp.data.message);
            setTimeout(() => {
              this.$router.push('/login');  
            }, 700);
          }else{
            this.$toasted.show(resp.data.message[0]);
          }
        }, 2000);
      }
    },
  }
</script>