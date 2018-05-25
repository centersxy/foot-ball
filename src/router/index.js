import Vue from 'vue'
import Router from 'vue-router'
import NewsList from 'views/news-list/news-list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['views/news/news'], resolve)
    },
    {
      path: '/news',
      name: 'News',
      component: resolve => require(['views/news/news'], resolve)
    },
    {
      path: '/match',
      name: 'Match',
      component: resolve => require(['views/match/match'], resolve)
    },
    {
      path: '/video',
      name: 'Video',
      component: resolve => require(['views/video/video'], resolve)
    },
    {
      path: '/data',
      name: 'Data',
      component: resolve => require(['views/data/data'], resolve)
    },
    {
      path: '/NewsList',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: resolve => require(['views/detail/detail'], resolve)
    }
  ]
})
