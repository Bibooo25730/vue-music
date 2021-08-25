<template>
  <div class="login">
    <div class="nav-top">
      <div class="message">欢迎登陆</div>
    </div>
    <div class="bg">
      <div class="input">
        <input
          v-model.number="phone"
          placeholder="请输入手机号码"
          type="text"
          name=""
          id=""
        
          :class="{active:isStyle}"
        />
        <input
          v-model="password"
          placeholder="请输入密码"
          type="password"
          name=""
          id=""
        />
         <!-- <input
          v-model="coded"
          placeholder="验证码"
          type="text"
          name=""
          id=""
        /> -->
      </div>
      <div @click="LoginBtn" class="login">登录</div>
      <div class="loginitem">--- 其他登录方式 ---</div>
      <!-- <div class="btncode">
          <button @click="ncode">发送验证码</button>
      </div> -->
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    
        phone: "",
        password: "",
        coded:"",
        isStyle:false
   
    };
  },
  methods: {
   async LoginBtn() {
    //  if(this.coded !== ''){
       
    // let result = await  this.$store.dispatch('Ccaptcha',{phone:this.phone,coded:this.coded})
    // // this.$store.dispatch('SendUserid',result.data.account.id)
    // console.log(result)
    //    result.status==200 ? this.$router.push('/loMin') :  alert('验证码错误')
    //     // if(result.data.code ==200){
    //     //       this.$router.push('/loMin')
    //     // }else{
    //     //   alert('验证码错误')
    //     // }
        
    //  }else{
   
      let result  = await  this.$store.dispatch("Login",{phone:this.phone,password:this.password});
      if(result.data.code ==200){
       
        
        //  content.commit('setIsUrer',result)
        this.$store.commit('setIsUrer',result)
        //  let id =608647243
      //  this.$store.dispatch('SendUserid',result.data.account.id)
          // console.log(result.data.account.id)
          this.$router.push('/LoMe')
           
      // }else{
      //   alert(this.$store.state.isLoginState)
      // }
     }
     
    },
    //邮箱验证码
  async ncode(){
       this.$store.dispatch('Sendncode',this.phone)
    }
  },
  watch:{
    phone(){
      
        if(this.phone.toString().length !=11){
            this.isStyle = true
        }else if(this.phone.toString().length==11){
           this.isStyle = false
        }else{
          this.isStyle = true
        }
    }
  }
};
</script>
<style scoped lang="scss">

  .nav-top {
    width: 7.5rem;
    height: 2.5rem;
    background-color: coral;
    display: flex;
    align-items: center;
    .message {
      height: auto;
      background-image: -webkit-linear-gradient(bottom, red, #fd8403, green);
      -webkit-background-clip: text;
      font-size: 40px;
      font-weight: bolder;
      -webkit-text-fill-color: transparent;
      margin: 0 auto;
    }
  }
  .bg {
    background-image: url("../assets/img/56.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    width: 7.5rem;
    height: 85vh;
    position: absolute;
    bottom: 0;
    .input {
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        width: 7.1rem;
        margin-top: 0.4rem;
        height: 0.6rem;
      }
       .active{
        width: 7.1rem;
        margin-top: 0.4rem;
        height: 0.6rem;
        border: 1px solid red;
      }
    }
    .login {
      width: 5rem;
      margin: 1rem auto;
      height: 1rem;
      border-radius: 10px;
      font-size: 0.6rem;
      color: greenyellow;
      text-align: center;
      background-color: orangered;
    }
    .btncode{
        display: flex;
        justify-content: center;
        margin-top: 0.4rem;
        button{
          width: 1.5rem;
          height: 1rem;
          border-radius: .4rem;
          cursor: pointer;
        }
    }
    .loginitem {
      width: 7.5rem;
      height: auto;
      margin: 0 auto;
      font-size: 0.5rem;
      text-align: center;
      color: #fff;
    }

}
</style>