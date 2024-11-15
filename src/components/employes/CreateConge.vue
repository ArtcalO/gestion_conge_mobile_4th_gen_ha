<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button color="medium" @click="cancel">Annuler</ion-button>
        </ion-buttons>
        <ion-title>{{ isEdit }} Ajouter congé</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-input
          label-placement="stacked"
          label="Debut congé"
          type="date"
          v-model="conge.debut"
          placeholder="Debut congé"
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-input
          type="date"
          label-placement="stacked"
          label="Fin congé"
          v-model="conge.fin"
          placeholder="Finc congé"
        ></ion-input>
      </ion-item>
      <br>
      <ion-button expand="block" @click="performCreateConge">Valider</ion-button>
    </ion-content>
  </template>
  
  <script>
    import {
      IonSelect,
      IonSelectOption,
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
            IonSelect,
            IonSelectOption,
        },
        props:["employeProp","idxProp"],
        data(){
          return{
            conge:{
                debut:"",
                fin:""
            }
          }
        },
        methods:{
            cancel(){
                modalController.dismiss(null, 'cancel')
            },
            confirm(){
                modalController.dismiss(null, 'confirm');
            },
            performCreateConge(){
                let data = {
                    conge:this.conge,
                    idx:this.idxProp
                }
                modalController.dismiss(data, "createConge")
            }
            
        }
    } 
  </script>