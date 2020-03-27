import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home';
import Impress from './views/Impress';

Vue.use(Router);

const router = new Router({
   routes: [
       {
           path: '/',
           name: 'Home',
           component: Home,
           props: { page_city: 'Regensburg'}
       },
       {
           path: '/W',
           name: 'HomeW',
           component: Home,
           props: { page_city: 'Würzburg'}
       },
       {
           path: '/NM',
           name: 'HomeNM',
           component: Home,
           props: { page_city: 'Neumarkt (i.d. OPf.)'}
       },
       {
           path: '/SR',
           name: 'HomeSR',
           component: Home,
           props: { page_city: 'Straubing-Bogen'}
       },
       {
           path: '/impressum',
           name: 'Impress',
           component: Impress
       }
   ]
});

export default router;