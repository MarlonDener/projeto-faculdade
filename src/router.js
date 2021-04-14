import Vue from 'vue'
import Router from 'vue-router'
import PageHome from './components/PageHome'
import Admin from './components/Admin'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {path: '/', component: PageHome, name: 'PageHome'},
        {path: '/admin', component: Admin, name: 'Admin'}
    ]

})

export default router