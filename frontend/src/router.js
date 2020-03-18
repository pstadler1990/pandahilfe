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
           component: Home
       },
       {
           path: '/impressum',
           name: 'Impress',
           component: Impress
       }
   ]
});

export default router;