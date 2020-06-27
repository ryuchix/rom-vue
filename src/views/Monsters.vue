<template>
    <div class="content" v-if="!loading">
        <div class="card_ shadow border-0 mb-3" v-for="monster in monsters" :key="monster.id">
            <router-link :to="{ name: 'monster', params: { id: monster.id }}" >
            <div class="card-body">
                <div class="row">
                    <div class="monsters row no-gutters" @click="$router.push('monster/'+monster.id)">
                        <div class="col-sm-12 col-12">
                            <div class="monster-details">
                                <div class="monster-image" :class="monster.star != 'star' ? monster.type : 'star'">
                                    <img :src="monster.icon" alt="Icon">
                                </div>
                            </div>
                            <div class="monster-info">
                                <div class="monster-name">{{ monster.name_en }}</div>
                                <div class="monster-attr">
                                    <div class="monster-stats_">
                                        {{ monster.element }}<span> · </span>
                                        {{ monster.race }}<span> · </span>
                                        {{ monster.size == 'M' ? 'Medium' : '' }}
                                        {{ monster.size == 'S' ? 'Small' : '' }}
                                        {{ monster.size == 'L' ? 'Large' : '' }}
                                    </div>
                                    <div class="monster-stats">
                                        Lv: <strong>{{ monster.level }}</strong> <span> · </span> HP: <strong>{{ formatNumber(monster.hp) }}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </router-link>
        </div>
        <infinite-loading v-if="!loading" spinner="waveDots" @infinite="loadmore">
          <div slot="no-more">End</div>          
        </infinite-loading>
    </div>
</template>

<script>
import axios from 'axios'
import { constant } from '../router/Constant';
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'Monsters',
  components: {
    InfiniteLoading
  },
  data() {
    return {
      fullPage: true,
      url: constant.url,
      loading: true,
      monsters: [],
      page: 2,
    }
  },
  mounted() {
    this.getMonsters();
  },
  methods: {
    getMonsters() {
      axios
        .get(constant.getMonsters)
        .then(response => (this.monsters = response.data.data))
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
    },
    loadmore($state) {
      let vm = this;
      axios
        .get(constant.getMonsters+'?page='+vm.page)
        .then(response => {
          response.data.data.map(function(value) {
              vm.monsters.push(value);
          });
          vm.page += 1;
          $state.loaded();
        })
        .catch(error => console.log(error))
        .finally(() => console.log())

    },
    formatNumber(num) {
      if (num != null) return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  },
}
</script>
<style lang="scss">
    //
</style>
