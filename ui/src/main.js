import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import vuetify from './plugins/vuetify'
//import VueSocketIO from 'vue-socket.io'
//import SocketIO from "socket.io-client"

Vue.config.productionTip = false

Vue.use(require('vue-moment'));

/*Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://54.77.31.115:5000',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
}))*/


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
