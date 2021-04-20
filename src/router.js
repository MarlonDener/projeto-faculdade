import Vue from 'vue'
import Router from 'vue-router'
import PageHome from './components/PageHome'
import Admin from './components/Admin'
import FormularioAdmin from './components/FormularioAdmin'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {path: '/', component: PageHome, name: 'PageHome'},
        {path: '/admin', component: Admin, name: 'Admin'},
        {path: '/FormularioAdmin', component:FormularioAdmin, name: 'FormularioAdmin'}
    ]

})

export default router