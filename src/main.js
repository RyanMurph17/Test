
import Vue from "vue";
import App from "./App";
import router from "./router/index";
import {store} from './vuex/store'

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
import * as firebase from 'firebase'
import Vuex from 'vuex'
import {config} from './firebaseConfig'

firebase.initializeApp(config)
Vue.use(Vuex)
Vue.use(PaperDashboard);

Vue.config.productionTip = false

/* eslint-disable no-new */


/* eslint-disable no-new */
const check = firebase.auth().onAuthStateChanged((user) => {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
    created() {
      if (user) {
        store.dispatch('autoSignIn', user)
      }
    }
  })
  check()
})
