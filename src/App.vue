<template>
  <div id="app">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <Nav />
    <div class="auth-wrapper" style="min-width:minwidth;">
        <div class="auth-inner p-1"  style="overflow-y:scroll;min-height:150px;">
           <!--<home-page></home-page>
           <login-page></login-page>-->
           <router-view ></router-view>
        </div>
    </div>
    <div>
      <ToastNotification/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import ToastNotification from './components/ToastNotification.vue'
import axios from "axios"

export default {
  name: 'App',
  data(){
    return {
      minwidth:'800px'
    }
  },
  async created() {
    let oldToken=localStorage.getItem('token');
    if(oldToken!='' && oldToken!=null){
      console.log('old token ::'+oldToken);
      const resp=await axios.get('get-user');
      this.user=resp.data.allUser;
      this.$store.dispatch('user',resp.data.allUser)
    } 

  },
  mounted() {
    console.log('gettingg url parameter');
    const firstSegment = (new URL(window.location.href)).pathname.split('/')[1];
    if(firstSegment=='product-list'){
      this.minwidth='800px';
    }
  },
  
    components: {
      Nav,
      ToastNotification
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
h1,h2,h3,h4,h5,h6,label,span{
  font-weight: 500;
  font-family:'Fira Sans', sans-serif;
}

body, html, #app, #root, .auth-wrapper {
  height: 100%;
  width: 100%;
  /*display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;*/
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.navbar-light{
  background-color: #fff;
  box-shadow: 0px 14px 80px rgb(34,35,58,0.2);
}


#app{
  text-align: center;
}

.auth-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  background-color: deepskyblue;
}

.auth-inner{
  width: 450px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgb(34,35,58,0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}


.auth-wrapper .form-control:focus{
  border-color: #167bff;
  box-shadow: none;
}

.auth-wrapper h3{
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label{
  font-weight: 400;
}



.forgot-password,
.forgot-password a{
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;  
}

.forgot-password a{
  color: #167bff;
}
</style>
