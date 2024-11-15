import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: null,
      employes:[
        {
          id:1,
          nom:"ArtcalO",
          prenom:"TLW",
          date_naissance:"2020-02-10",
          genre:"M" 
        }
      ]
    }
  },
})

export default store