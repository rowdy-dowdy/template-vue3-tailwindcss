import { InjectionKey } from 'vue'
import { createStore } from 'vuex'

import app from './modules/app'


export const store = createStore({
  modules: {
    app,
  }
})