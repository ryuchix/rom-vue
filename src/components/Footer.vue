<template>
  <div id="bottom-nav">
    <v-bottom-navigation v-if="$route.name != 'home'" fixed grow>
      <router-link :to="{ name: 'home'}" class="v-btn">
        <v-btn @click="$router.push({name: 'home'})" aria-label="Home">
          <span>Home</span>
          <img class="icon" src="../assets/images/icons/home-icon.png" />
        </v-btn>
      </router-link>

      <router-link :to="{ name: 'monsters'}" class="v-btn">
        <v-btn @click="$router.push({name: 'monsters'}).catch(err => {})" aria-label="Monster">
          <span>Monster</span>
          <img class="icon" src="../assets/images/icons/monster-icon.png" />
        </v-btn>
      </router-link>

       <router-link :to="{ name: 'equipments'}" class="v-btn">
        <v-btn @click="$router.push({name: 'equipments'}).catch(err => {})" aria-label="Equipment">
          <span>Equipment</span>
          <img class="icon" src="../assets/images/icons/armor-icon.png" />
        </v-btn>
       </router-link>
       
      <router-link :to="{ name: 'headwears'}" class="v-btn">
        <v-btn @click="$router.push({name: 'headwears'}).catch(err => {})" aria-label="Headwear">
          <span>Headwear</span>
          <img class="icon" src="../assets/images/icons/headwear-icon.png" />
        </v-btn>
      </router-link>
       
      <router-link :to="{ name: 'cards'}" class="v-btn">
        <v-btn @click="$router.push({name: 'cards'}).catch(err => {})" aria-label="Card">
          <span>Card</span>
          <img class="icon" src="../assets/images/icons/card-icon.png" />
        </v-btn>
      </router-link>

    </v-bottom-navigation>
<!-- 
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom>
        <v-bottom-navigation v-if="$route.name != 'home'" grow>
          <v-btn @click="$router.push({name: 'home'})">
            <span>Headwear</span>
            <img class="icon" src="../assets/images/icons/headwear-icon.png" />
          </v-btn>

          <v-btn @click="$router.push({name: 'monsters'}).catch(err => {})">
            <span>Food</span>
            <img class="icon" src="../assets/images/icons/food-icon.png" />
          </v-btn>

          <v-btn @click="$router.push({name: 'equipments'}).catch(err => {})">
            <span>Pet</span>
            <img class="icon" src="../assets/images/icons/pet-icon.png" />
          </v-btn>

          <v-btn @click="$router.push({name: 'cards'}).catch(err => {})">
            <span>Furniture</span>
            <img class="icon" src="../assets/images/icons/furniture-icon.png" />
          </v-btn>

          <v-btn @click="$router.push({name: 'cards'}).catch(err => {})">
            <span>Furniture</span>
            <img class="icon" src="../assets/images/icons/furniture-icon.png" />
          </v-btn>

        </v-bottom-navigation>
    </v-navigation-drawer> -->
  </div>
</template>

<script>
//import axios from 'axios'
export default {
  name: "Footer",
  components: {
    //
  },
  data() {
    return {
      item: {},
      loading: false,
      offset: true,
      text: "text",
      drawer: false
    };
  },
  methods: {
    //
  }
};
</script>
<style lang="scss">
@import "../assets/scss/mixins.scss";
.v-bottom-navigation {
  a {
    &:last-child {
      @media only screen and (max-width: 768px) {
          display: none;  
      }
    }

  }
}
.v-navigation-drawer {
    left: auto;
    bottom: 0;
    position: fixed !important;
    max-height: 111px !important;
    min-width: 640px !important;

    @media only screen and (max-width: 768px) {
        min-width: 100% !important;  
    }

    .drawer-header {
      background: none !important;
    }

    .section3 {
      display: flex;
    }

    .icons .icon {
        width: 30px;
    }
}

#bottom-nav {
  .more-menu {
    border-radius: 0 !important;
  }

}
  .menuable__content__active {
    border-radius: 0 !important;
    box-shadow: 11px 4px 4px -3px rgba(0, 0, 0, 0.2), 8px 0px 13px 0px rgba(0, 0, 0, 0.14), 7px 4px 10px -2px rgba(0, 0, 0, 0.12) !important;
  
    img {
      width: 25px;
    }
    span {
      font-style: normal;
      font-weight: 300;
      font-weight: 400;
      color: $primary;
      line-height: 1.2;
      font-size: 14px;
      margin-left: 5px;
    }
  }
  
</style>
