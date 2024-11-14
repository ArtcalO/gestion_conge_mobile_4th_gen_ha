<template>
    <ion-toolbar color="warning">
        <ion-buttons slot="start">
            <ion-back-button default-href="#"></ion-back-button>
            </ion-buttons>
            <ion-title>Employés</ion-title>
            <ion-buttons slot="primary">
            <ion-button @click="openModal">
                <ion-icon slot="icon-only" :md="personAddOutline"></ion-icon>
            </ion-button>
        </ion-buttons>
    </ion-toolbar>

    <ion-list>
      <ion-item>
        <ion-label>Pokémon Yellow</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Mega Man X</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>The Legend of Zelda</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Pac-Man</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Super Mario World</ion-label>
      </ion-item>
    </ion-list>
  </template>
  
  <script>
    import CreateEmploye from '../../components/employes/CreateEmploye.vue';
    import {
        IonItem,
        IonLabel,
        IonList,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonButton,
        IonIcon,
        modalController,
        IonicVue
    } from '@ionic/vue';
    import {personAddOutline} from "ionicons/icons"
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      data(){
        return{
            personAddOutline  
        }
      },
      components: {
            IonItem,
            IonLabel,
            IonList,
            IonToolbar,
            IonButtons,
            IonBackButton,
            IonButton,
            IonIcon,
            CreateEmploye
    },
    methods:{
        async openModal (){
            const modal = await modalController.create({
                component: CreateEmploye,
            });

            modal.present();

            const { data, role } = await modal.onWillDismiss();

            if (role === 'confirm') {
            message.value = `Hello, ${data}!`;
            }
        }
    }
    });
  </script>