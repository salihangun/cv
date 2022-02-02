import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex';


const store = createStore({
  state(){
    return{
      selectedLanguage: 'EN'
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
createApp(App).use(store).mount('#app')
