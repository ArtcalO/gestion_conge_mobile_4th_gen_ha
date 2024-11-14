<template>
  <ion-card>
    <ion-input label="Username" v-model="username" label-placement="floating" fill="outline" placeholder="Enter username"></ion-input>
    <br>
    <ion-input label="Password" v-model="password" type="password" label-placement="floating" fill="outline" placeholder="Enter username"></ion-input>
    <br>
    <ion-button expand="block" @click="performLogin" >Connexion</ion-button>
  </ion-card>
</template>

<script>
import { IonInput,IonButton, IonCard } from '@ionic/vue';
export default {
    components:{
        IonInput,
        IonButton,
        IonCard
    },
    data(){
      return{
        username:"",
        password:""
      }
    },
    methods:{
      performLogin(){
        let data = {
          "username":this.username,
          "password":this.password
        }
        this.$store.state.user = data
      }
    }
}
</script>

<style scoped>
.login{
    margin: 10px;
    margin-top: 30%;
}
</style>