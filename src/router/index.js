import Vue from 'vue'
import VueRouter from 'vue-router'
import Monsters from '../views/Monsters.vue'
import Monster from '../views/Monster.vue'
import Equipment from '../views/Equipment.vue'
import Equipments from '../views/Equipments.vue'
import Card from '../views/Card.vue'
import Cards from '../views/Cards.vue'
import Headwear from '../views/Headwear.vue'
import Headwears from '../views/Headwears.vue'
import Furniture from '../views/Furniture.vue'
import Furnitures from '../views/Furnitures.vue'
import Foods from '../views/Foods.vue'
import Item from '../views/Item.vue'
import Error from '../components/Error.vue'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'
import Search from '../views/Search.vue'
import Privacy from '../views/Privacy.vue'
import Contact from '../views/Contact.vue'
import EndlessTower from '../views/EndlessTower.vue'
import ValhallaRuins from '../views/ValhallaRuins.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/guides',
    name: 'guides',
    component: Blogs
  },
  {
    path: '/guide/:slug',
    name: 'guide',
    component: Blog
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
    path: '/item/:id',
    name: 'item',
    component: Item
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
    path: '/foods',
    name: 'foods',
    component: Foods
  },
  {
    path: '/error',
    name: 'error',
    component: Error
  },
  {
    path: '/search/:query',
    name: 'search',
    component: Search
  },
  {
    path: '/privacy-policy',
    name: 'privacy',
    component: Privacy
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/endless-tower',
    name: 'endless-tower',
    component: EndlessTower
  },
  {
    path: '/valhalla-ruins',
    name: 'valhalla-ruins',
    component: ValhallaRuins
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
