<template>
  <div class="log-form">
    <div class="g-form">
        <h3>Login</h3>
        <ul>
          <li>
            <i class="uN"></i>
            <input type='text' v-model="userName" placeholder="User Name">
          </li>
          <li>
            <i class="Pwd"></i>
            <input  type='text' v-model="userPwd" placeholder="password" @keyup.enter="login()">
          </li>
        </ul>
        <div class="button-wrapper">
          <a class="button" @click="login()">登录</a>
          <p>{{errorText}}</p>
        </div>
    </div>
  </div>
</template>

<script>
  import  axios  from 'axios'
  export default {
    data() {
      return {
        userName: '',
        userPwd: '',
        errorText: '',
        errorTip:false
      }
    },
    computed: {
      
    },
    methods: {
      login(){
        axios.post('/users/login',{
          userName:this.userName,
          userPwd:this.userPwd
        }).then((response)=>{
          var res = response.data;
          if(res.status=='0'){
            this.errorTip = false;
            this.$emit('has-log',res.result.userName)
          }else{
            this.errorTip = true
          }

        })
      }
    }
  };
</script>

<style scoped>
ul,li,input {
  padding:0;margin:0;
}
.g-form{
  width:80%;
  margin:0 auto;
}

h3{
  font-weight: 600;
  margin:10px;
}

li {
      position: relative;
    height: 42px;
    line-height: 42px;
    background: none;
    margin-bottom: 15px;
    font-size: 14px;
    overflow: hidden;
    border: 1px solid rgba(204,204,204,0.6);
    box-shadow:0 0 1px #ccc;
    padding-bottom: 0;
}

i{
  display:inline-block;
  float:left;
  margin: 6px 10px 0 14px;
}

input{
 width:60%;
 
 border:none;
 }
 
 .uN{
   width:25px;height:29px;
   background:url(../../static/icon.png) no-repeat 4px 5px;
   
 }
 .Pwd{
   width:25px;height:29px;
   background:url(../../static/icon.png) no-repeat -200px 5px;
 }
 .button-wrapper{
 width:100%;
 margin-top:25px;
 }
.button{
 display:block;
 width:100%;
 height:42px;
 line-height:42px;
 background:#009de6;
 text-align:center;
 color:#fff;
 font-size:16px;
 }
</style>
