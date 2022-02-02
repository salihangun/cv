import { createStore } from 'vuex'

// Create a new store instance.

const store = createStore({
  state(){
    return{
      selectedLanguage: 'en'
    }
  },
  mutations: {
    setSelectedLanguage (state, selectedLanguage) {
      state.selectedLanguage = selectedLanguage
    }
  },
  actions: {
    updateSelectedLanguage ({commit}, selectedLanguage) {
      commit('setSelectedLanguage',selectedLanguage)
    }
  }
})
export default store;