// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import fastClick from 'fastclick'
// 导入默认样式
import './common/stylus/index.styl'
// 将fastclick挂载到body上，解决所有元素的点击事件的300ms延迟问题
fastClick.attach(document.body)
Vue.use(Vuex)
Vue.use(VueLazyLoad, {
  preload: 1.3,
  error: '',
  loading: require('common/images/lazyload.png'),
})

const store = new Vuex.Store({
  state: {
    ranking: []
  },
  getters: {
    getdateTab: state => {
      return state.ranking
    }
  },
  mutations: {
    updateTab: (state, data) => {
      state.ranking = data
    }
  }
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
