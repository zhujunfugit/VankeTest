import Vue from 'vue'
import Vuex from 'vuex'
import base from './base'
import hr from './hr'
import pm from './pm'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    base,
    hr,
    pm
  }
})

export default store
