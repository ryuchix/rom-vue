<template>
  <div>
  <v-bottom-navigation
    v-if="$route.name != 'home'"
    fixed
    grow>
    <v-btn @click="$router.push({name: 'home'})">
      <span>Home</span>
      <img class="icon" src="../assets/images/icons/home-icon.png">
    </v-btn>

    <v-btn @click="$router.push({name: 'monsters'}).catch(err => {})">
      <span>Monster</span>
      <img class="icon" src="../assets/images/icons/monster-icon.png">
    </v-btn>

    <v-btn @click="$router.push({name: 'equipments'}).catch(err => {})">
      <span>Equipment</span>
      <img class="icon" src="../assets/images/icons/armor-icon.png">
    </v-btn>

    <v-btn @click="$router.push({name: 'cards'}).catch(err => {})">
      <span>Card</span>
      <img class="icon" src="../assets/images/icons/card-icon.png">
    </v-btn>

    <v-btn @click="$router.push({name: 'cards'}).catch(err => {})">
      <span>More</span>
      <v-icon>mdi-dots-horizontal</v-icon>
    </v-btn>
    
  </v-bottom-navigation>


    <!-- <nav class="mobile-bottom-nav">
      <div class="mobile-bottom-nav__item mobile-bottom-nav__item--active" @click="$router.push({name: 'home'})">
        <div class="mobile-bottom-nav__item-content">
          <i class="material-icons">home</i>
          <span>home</span>
        </div>		
      </div>
      <div class="mobile-bottom-nav__item" @click="$router.push({name: 'monsters'}).catch(err => {})">		
        <div class="mobile-bottom-nav__item-content">
          <i class="material-icons">mail</i>
          <span>monster</span>
        </div>
      </div>
      <div class="mobile-bottom-nav__item" @click="$router.push({name: 'equipments'}).catch(err => {})">
        <div class="mobile-bottom-nav__item-content">
          <i class="material-icons">person</i>
          EQUIPMENT
        </div>		
      </div>
      <div class="mobile-bottom-nav__item" @click="$router.push({name: 'furnitures'}).catch(err => {})">
        <div class="mobile-bottom-nav__item-content">
          <i class="material-icons">phone</i>
          Furnitures
        </div>		
      </div>
      <div class="mobile-bottom-nav__item" @click="$router.push({name: 'foods'}).catch(err => {})">
        <div class="mobile-bottom-nav__item-content">
          <i class="material-icons">settings</i>
          Food
        </div>		
      </div>
    </nav> -->
  </div>
</template>

<script>
//import axios from 'axios'
export default {
  name: 'Footer',
  components: {
    //
  },
  data() {
    return {
      item: {},
      loading: false,
    }
  },
  methods: {
    //
  },
}
</script>
<style lang="scss">
    //
</style>
