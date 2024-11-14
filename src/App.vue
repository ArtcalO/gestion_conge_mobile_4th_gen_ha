<template>
  <ion-app>
    <ion-router-outlet v-if="$store.state.user" />
    <login-view v-else />
  </ion-app>
</template>

<script  >
import LoginView from './views/auth/LoginView.vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
export default{
  components:{
    IonApp,
    IonRouterOutlet,
    LoginView
  },
  data(){
    return{

    }
  },
  watch:{
    "$store.state.user":{
      handler(newVal){
        if(newVal)
          localStorage.setItem("user", JSON.stringify(newVal))
      }
    }
  },
  mounted(){
    let user = JSON.parse(localStorage.getItem("user"))
    if(user)
      this.$store.state.user = user

  }
}
</script>
