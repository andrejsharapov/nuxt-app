import Vue from 'vue'
import VueDisqus from 'vue-disqus'
import { appMeta } from '~/config/app'

Vue.use(VueDisqus, {
  shortname: `${appMeta.app.short}`,
})
