import Vue from 'vue'
import VueRouter from 'vue-router'
import Monsters from '../views/Default.vue'
import Monster from '../views/Monster.vue'
import Equipment from '../views/Equipment.vue'
import Equipments from '../views/Equipments.vue'
import Card from '../views/Card.vue'
import Cards from '../views/Cards.vue'
import Headwear from '../views/Headwear.vue'
import Headwears from '../views/Headwears.vue'
import Furniture from '../views/Furniture.vue'
import Furnitures from '../views/Furnitures.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Monsters
  },
  {
    path: '/monsters',
    name: 'monsters',
    component: Monsters
  },
  {
    path: '/monster/:id',
    name: 'monster',
    component: Monster
  },
  {
    path: '/equipments',
    name: 'equipments',
    component: Equipments
  },
  {
    path: '/equipment/:id',
    name: 'equipment',
    component: Equipment
  },
  {
    path: '/cards',
    name: 'cards',
    component: Cards
  },
  {
    path: '/card/:id',
    name: 'card',
    component: Card
  },
  {
    path: '/headwears',
    name: 'headwears',
    component: Headwears
  },
  {
    path: '/headwear/:id',
    name: 'headwear',
    component: Headwear
  },
  {
    path: '/furnitures',
    name: 'furnitures',
    component: Furnitures
  },
  {
    path: '/furniture/:id',
    name: 'furniture',
    component: Furniture
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
