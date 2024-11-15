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
      <ion-item v-for="employe, i in employes">
        <ion-label>{{ employe.nom }} {{ employe.prenom }}</ion-label>
        <ion-button size="small" @click="editEmploye(employe, i)" >
          <ion-icon slot="icon-only" :md="createOutline"></ion-icon>
        </ion-button>
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
        IonTitle,
        modalController,
        IonicVue
    } from '@ionic/vue';
    import {personAddOutline, createOutline} from "ionicons/icons"
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      data(){
        return{
            personAddOutline,createOutline,
            employes: this.$store.state.employes
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
            IonTitle,
            CreateEmploye
    },
    methods:{
        async openModal (){
            const modal = await modalController.create({
                component: CreateEmploye,
            });

            modal.present();

            const { data, role } = await modal.onWillDismiss();

            if (role === 'createEmnploye') {
              this.employes.push(data)
            }
        },
        async editEmploye(employe, idx){
          const modal = await modalController.create(({
            component:CreateEmploye,
            componentProps:{employeProp:employe, idx:idx}
          }))

          modal.present();

          const { data, role } = await modal.onWillDismiss();

          if (role === 'modifyEmnploye') {
              this.employes[data.idx] = data.employe
            }
        }
    }
    });
  </script>