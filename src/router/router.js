import { createRouter, createWebHistory } from 'vue-router';
import OmegaView from '../views/OmegaView'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'omega',
        component: OmegaView,
      }
    ]
  })
  
  export default router