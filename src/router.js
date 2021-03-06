import Vue from 'vue'
import Router from 'vue-router'
import PageHome from './components/PageHome'
import Admin from './components/Admin'
import FormularioAdmin from './components/FormularioAdmin'
import Noticia from './components/Noticia'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {path: '/', component: PageHome, name: 'PageHome'},
        {path: '/login', component: Admin, name: 'Admin'},
        {path: '/FormularioAdmin', component:FormularioAdmin, name: 'FormularioAdmin'},
        {path: '/noticia/:id', component:Noticia, name: 'Noticia'}
    ]

})

router.beforeEach((to, from, next) => {
    if(!window.uid && to.name === 'FormularioAdmin'){
      next({path: '/login'})
    }else{
      next()
    }
})

export default router