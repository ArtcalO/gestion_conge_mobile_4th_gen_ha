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
        <ion-button color="danger" size="small" @click="deleteEemploye(employe, i)" >
          <ion-icon slot="icon-only" :md="trashOutline"></ion-icon>
        </ion-button>
        <ion-button color="success" size="small" @click="createConge(employe, i)" >
          <ion-icon slot="icon-only" :md="addCircleOutline"></ion-icon>
        </ion-button>
      </ion-item> 
    </ion-list>
  </template>
  
  <script>
    import CreateEmploye from '../../components/employes/CreateEmploye.vue';
    import CreateConge from '../../components/employes/CreateConge.vue';
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
        alertController,
        IonAlert,
        IonicVue
    } from '@ionic/vue';
    import {personAddOutline, createOutline, trashOutline, addCircleOutline} from "ionicons/icons"
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      data(){
        return{
            personAddOutline,createOutline,trashOutline,addCircleOutline,
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
            CreateEmploye,
            IonAlert,
            CreateConge
    },
    methods:{
        async openModal (){
            const modal = await modalController.create({
                component: CreateEmploye,
            });

            modal.present();

            const { data, role } = await modal.onWillDismiss();

            if (role === 'createEmnploye') {
              this.$store.state.employes.push(data)
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
        },
        async deleteEemploye(employe, idx){
          const alert = await alertController.create({
            header: 'Information',
            message:`Voulez-vous supprimer l'employé ${employe.nom} ${employe.prenom}`,
            buttons: [
            {
              text: 'Non',
              role: 'cancel',
              handler: () => {
                console.log('Alert canceled');
              },
            },
            {
              text: 'Oui',
              role: 'confirm',
              handler: () => {
                this.$store.state.employes.splice(idx, 1)
              },
            },
            
            ],
          });

          await alert.present();
        },
        async createConge(employe, idx){
           const modal = await modalController.create({
            component : CreateConge,
            componentProps : {employeProp:employe, idxProp:idx}
           })

           modal.present();

           const { data, role } = await modal.onWillDismiss();
           console.log(data, role)
           if(role == "createConge"){
             this.$store.state.employes[data.idx].debut = data.conge.debut
             this.$store.state.employes[data.idx].fin = data.conge.fin
             console.log(this.$store.state.employes)
           }
           
        }
    }
    });
  </script>