import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/Page/Home'
import PageSearche from '@/components/Page/Searche'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: 'Home',
            component: PageHome
        },
        {
            path: '/:user',
            name: 'Searche',
            component: PageSearche  
        }
    ]
})