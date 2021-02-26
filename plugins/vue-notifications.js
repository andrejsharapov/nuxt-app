import Vue from 'vue'
import VueNotifications from 'vue-notification'

Vue.use(VueNotifications)

export default (context, inject) => {
  inject('notify', Vue.notify)
}
