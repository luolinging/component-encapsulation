import Vue from 'vue'
import Router from 'vue-router'
import parentCom from '@/components/parentCom'
import childCom from '@/components/childCom'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [{
      path: '/',
      name: 'parentCom',
      component: parentCom
    },
    {
      path: 'childCom',
      name: 'childCom',
      component: childCom
    }
  ]
})
