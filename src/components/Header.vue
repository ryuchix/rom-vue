<template>
  <div>
      <v-app-bar v-if="$route.name != 'home'"
      fixed
      :height="50">
      <v-btn icon @click="goBack" aria-label="Go back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Ragnarok Mobile</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop @click="openSearch" aria-label="Open search form">
        <v-icon >mdi-magnify</v-icon>
      </v-btn>
      </v-app-bar>
      <v-app-bar v-if="$route.name == 'home'"
      fixed
      :height="50">
      <v-toolbar-title class="left"><img width="35px" src="../assets/images/whitelogo.png" alt="Ragnarok Mobile">Ragnarok Mobile</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop @click="openSearch" aria-label="Open search form">
        <v-icon >mdi-magnify</v-icon>
      </v-btn>
      </v-app-bar>
    <!-- search field -->
    <div id="search" class="appHeader" v-bind:class="{ show: searchHasClicked }">
      <form class="search-form" v-on-clickaway="closeSearch" v-on:submit.prevent="submitSearch">
          <div class="form-group searchbox">
              <label for="search__" aria-label="Search anything">
                <input autofocus id="search__" ref="inputSearch" name="q" type="text" class="form-control" placeholder="Search..." v-model="search"/>
              </label>
              <i class="input-icon">
                  <i class="material-icons">search</i>
              </i>
              <a @click="closeSearch" href="javascript:void(0)" class="ml-1 close toggle-searchbox" aria-label="Close search form">
                  <i class="material-icons">close</i>
              </a>
          </div>
      </form>
    </div>
    <!-- drawer -->
    <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary>
      <v-list-item class="drawer-header">
        <v-list-item-content>
          <v-list-item-title>Ragnarok Mobile</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <div class="subheader">Database</div>

      <v-list dense>
        
        <v-list-item
          class="drawer-menu"
          v-for="item in items"
          :key="item.title"
          link >
          
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    </div>
  </div>
    
</template>

<script>
//import axios from 'axios'
import { directive as onClickaway } from 'vue-clickaway';

export default {
  name: 'Header',
  components: {
    //
  },
  directives: {
    onClickaway: onClickaway,
  },
  data() {
    return {
        sorts: '',
        searchHasClicked: false,
        loading: false,
        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'Monster', icon: 'dashboard' },
          { title: 'Equipment', icon: 'dashboard' },
          { title: 'Card', icon: 'dashboard' },
          { title: 'Headwear', icon: 'dashboard' },
          { title: 'Furniture', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ],
        search: '',
    }
  },
  methods: {
    openSearch() {
      this.searchHasClicked = true;
      this.$refs.inputSearch.focus();
    },
    closeSearch() {
      this.$refs.inputSearch.blur();
      this.searchHasClicked = false;
    },
    submitSearch() {
      this.$router.push({name: 'search', params: {query: this.search}});
      this.searchHasClicked = false;
      this.search = '';
    },
    goBack() {
      if (this.$route.name == 'monsters' || 
          this.$route.name == 'guides' || 
          this.$route.name == 'headwears' || 
          this.$route.name == 'equipments' || 
          this.$route.name == 'cards') {
            this.$router.push({name: 'home'})
          } else {
            this.$router.go(-1)
          }
    }
  },
}
</script>
<style lang="scss">
</style>