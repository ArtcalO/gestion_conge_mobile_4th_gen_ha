<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button color="medium" @click="cancel">Annuler</ion-button>
        </ion-buttons>
        <ion-title>{{ isEdit }} Enployé</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-input
          label-placement="stacked"
          label="Entrer l'ID"
          v-model="employe.id"
          placeholder="ID de l'employé"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-input
          label-placement="stacked"
          label="Nom"
          v-model="employe.nom"
          placeholder="Entrer le nom de l'employé"
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-input
          label-placement="stacked"
          label="Prenom"
          v-model="employe.prenom"
          placeholder="Entrer le prénom de l'employé"
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-input
          type="date"
          label-placement="stacked"
          label="Date naissance"
          v-model="employe.date_naissance"
          placeholder="Entrer la date de naissance"
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-select 
          v-model="employe.genre"
          label="Genre"
          laceholder="Entrer le genre de l'employé"
        >
          <ion-select-option value="M">Masculin</ion-select-option>
          <ion-select-option value="F">Féminin</ion-select-option>
        </ion-select>
      </ion-item>
      <br>
      <ion-button expand="block" @click="performAction">{{isEdit}}</ion-button>
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
        props:["employeProp", "idx"],
        mounted(){
          if(this.employeProp){
            this.employe.id = this.employeProp.id
            this.employe.nom = this.employeProp.nom
            this.employe.date_naissance = this.employeProp.date_naissance
            this.employe.prenom = this.employeProp.prenom
            this.employe.genre = this.employeProp.genre
          }
        },
        data(){
          return{
            employe:{
              id:"",
              nom:"",
              date_naissance:"",
              prenom:"",
              genre:""
            }
          }
        },
        computed:{
          isEdit(){
            return this.employeProp?'Modifier':'Ajouter'
          }
        },
        methods:{
            cancel(){
                modalController.dismiss(null, 'cancel')
            },
            confirm(){
                modalController.dismiss(null, 'confirm');
            },
            performAction(){
              this.isEdit?this.performModify():this.performCreate()
            },
            performCreate(){
              modalController.dismiss(this.employe, 'createEmnploye');
            },
            performModify(){
              let data = {employe:this.employe,idx:this.idx}
              modalController.dismiss(data, 'modifyEmnploye');
            }
        }
    } 
  </script>