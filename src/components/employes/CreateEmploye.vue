<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button color="medium" @click="cancel">Cancel</ion-button>
        </ion-buttons>
        <ion-title>Ajouter Embployé</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="confirm" :strong="true">Confirm</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-input label-placement="stacked" label="Enter your name" v-model="name" placeholder="Your name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label-placement="stacked" label="Enter your name" v-model="name" placeholder="Your name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label-placement="stacked" label="Enter your name" v-model="name" placeholder="Your name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label-placement="stacked" label="Enter your name" v-model="name" placeholder="Your name"></ion-input>
      </ion-item>
    </ion-content>
  </template>
  
  <script>
    import {
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      IonButtons,
      IonButton,
      IonItem,
      IonInput,
      modalController,
    } from '@ionic/vue';

    export default{
        components:{
            IonContent,
            IonHeader,
            IonTitle,
            IonToolbar,
            IonButtons,
            IonButton,
            IonItem,
            IonInput,
        },
        methods:{
            cancel(){
                modalController.dismiss(null, 'cancel')
            },
            confirm(){
                modalController.dismiss(null, 'confirm');
            }
        }
    } 
  </script>