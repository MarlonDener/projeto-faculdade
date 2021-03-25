import Vue from 'vue'
import Router from 'vue-router'
import PageHome from './components/PageHome'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {path: '/', component: PageHome, name: 'PageHome'}
    ]

})

export default router