import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

export default new Vuetify({
    icons: {
        iconfont: 'md',
      },
});
