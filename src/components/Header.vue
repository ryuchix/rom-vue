<template>
    <div>
        <div class="header header-fixed header-logo-center">
            <div class="header-title">Ragnarok Mobile</div>
            <div data-back-button="" class="header-icon header-icon-1">
                <i class="material-icons">arrow_back</i></div>
            <div @click.stop @click="openSearch" data-toggle-theme="" class="header-icon header-icon-4">
                <i class="material-icons">search</i></div>
        </div>
        <div id="search" class="appHeader" v-bind:class="{ show: searchHasClicked }">
          <form class="search-form"  v-on-clickaway="closeSearch">
              <div class="form-group searchbox">
                  <input type="text" class="form-control" placeholder="Search...">
                  <i class="input-icon">
                      <i class="material-icons">search</i>
                  </i>
                  <a @click="closeSearch" href="javascript:void(0)" class="ml-1 close toggle-searchbox">
                      <i class="material-icons">close</i>
                  </a>
              </div>
          </form>
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
    }
  },
  methods: {
    openSearch() {
      this.searchHasClicked = true;
    },
    closeSearch() {
      this.searchHasClicked = false;
    }
  },
}
</script>
<style lang="scss">
    //
</style>