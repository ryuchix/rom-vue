<template>
  <div>
    <nav class="mobile-bottom-nav">
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
    </nav>
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
