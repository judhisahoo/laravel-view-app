<template>

  <form class="p-5" @submit.prevent="forgotSubmit">

      <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="email" placeholder="Enter email">
      </div>

      <button class="btn btn-primary btn-block">Submit</button>

  </form>

</template>

<script>
  import axios from "axios"

  export default{
    name:'Forgot' ,
    data(){
      return {
        email:''
      }
    },
    methods: {
      async forgotSubmit(){
        const resp=await axios.post('forgot-password',{
          email:this.email
        });
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