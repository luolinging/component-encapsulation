import Vue from 'vue'
import Router from 'vue-router'
// import parentCom from '@/components/parentCom'
// import childCom from '@/components/childCom'
import toubaoPerson from '@/components/toubaoPerson'
import personCom from '@/components/personCom'
import houseCom from '@/components/houseCom'
import carCom from '@/components/carCom'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'toubaoPerson',
      component: toubaoPerson
    },
    {
      path: '/personCom',
      name: 'personCom',
      component: personCom
    },
    {
      path: '/houseCom',
      name: 'houseCom',
      component: houseCom
    },
    {
      path: '/carCom',
      name: 'carCom',
      component: carCom
    }

    // {
    //   path: '/',
    //   name: 'parentCom',
    //   component: parentCom
    // },
    // {
    //   path: 'childCom',
    //   name: 'childCom',
    //   component: childCom
    // }
  ]
})
