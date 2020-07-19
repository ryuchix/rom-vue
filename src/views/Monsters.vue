<template>
    <div class="content" v-if="!loading">
      <!-- <div class="filters d-flex flex-row justify-center justify-space-around">
        <div class="all-races">
          <v-menu z-index="9" max-height="300" bottom offset-y :close-on-click="closeOnClick">
            <template v-slot:activator="{ on, attrs }">
              <span class="v-btn__content" 
                v-bind="attrs"
                v-on="on">Race<v-icon>mdi-menu-down</v-icon></span>
            </template>
            <v-list tile>
              <v-list-item link v-for="(race, index) in races" :key="index">
                <v-list-item-title>{{ race }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="all-elements">
          <v-menu max-height="300" bottom offset-y :close-on-click="closeOnClick">
            <template v-slot:activator="{ on, attrs }">
              <span class="v-btn__content" 
                v-bind="attrs"
                v-on="on">Element<v-icon>mdi-menu-down</v-icon></span>
            </template>
            <v-list tile>
              <v-list-item link v-for="(element, index) in elements" :key="index">
                <v-list-item-title>{{ element }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="all-sizes">
          <v-menu max-height="300" bottom offset-y :close-on-click="closeOnClick">
            <template v-slot:activator="{ on, attrs }">
              <span class="v-btn__content" 
                v-bind="attrs"
                v-on="on">Size<v-icon>mdi-menu-down</v-icon></span>
            </template>
            <v-list tile>
              <v-list-item link v-for="(size, index) in sizes" :key="index">
                <v-list-item-title>{{ size }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="all-types">
          <v-menu max-height="300" bottom offset-y :close-on-click="closeOnClick">
            <template v-slot:activator="{ on, attrs }">
              <span class="v-btn__content" 
                v-bind="attrs"
                v-on="on">Type<v-icon>mdi-menu-down</v-icon></span>
            </template>
            <v-list tile>
              <v-list-item link v-for="(type, index) in types" :key="index">
                <v-list-item-title>{{ type }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="order-by">
          <v-menu max-height="300" bottom offset-y :close-on-click="closeOnClick">
            <template v-slot:activator="{ on, attrs }">
              <span class="v-btn__content" 
                v-bind="attrs"
                v-on="on">Order by<v-icon>mdi-menu-down</v-icon></span>
            </template>
            <v-list tile>
              <v-list-item link v-for="(order, index) in orders" :key="index">
                <v-list-item-title>{{ order }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div> -->
        <div class="card_ shadow border-0 mb-3" v-for="monster in monsters" :key="monster.slug">
            <div class="card-body">
                <div class="row">
                    <div class="monsters row no-gutters">
                        <div class="col-sm-12 col-12">
                          <router-link :to="{ name: 'monster', params: { id: monster.slug }}">
                            <div class="monster-details">
                                <div class="monster-image" :class="monster.star != 'star' ? monster.type : 'star'">
                                    <img :src="monster.icon" :alt="monster.name_en">
                                </div>
                            </div>
                          </router-link>
                            <div class="monster-info">
                              <router-link :to="{ name: 'monster', params: { id: monster.slug }}">
                                <div class="monster-name">{{ monster.name_en }}</div>
                              </router-link>
                                <div class="monster-attr">
                                    <div class="monster-stats_">
                                        {{ monster.element }}<span> · </span>
                                        {{ monster.race }}<span> · </span>
                                        {{ monster.size }}
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
  metaInfo() {
    let title_ = "Ragnarok monsters database, monsters drop, monsters location for Ragnarok Mobile Eternal Love"
    let url_ = 'https://www.ragnarokmobile.net/monsters'
    let keywords_ = 'Ragnarok monsters database, monsters drop, monsters location, ROM, ROM Exchange price, market finance, Ragnarok, online, RO, ragnarok mobile, ragnarok m, ragnarok eternal love, database, guide, job, quest, headgear quest, monster drops, item information, skill description, skill simulator, stat calculator, ragnarok tools, ragnarok mobile english'
    let description_ = 'Browse the Ragnarok Mobile monsters database. Your ultimate guide for Ragnarok Mobile Eternal Love. Your source for Ragnarok M Monsters, Cards, Quests, Database, Headwears, Blueprints, Items, Market Prices, Exchange Price List and Stats and Skills calculator. ROM'

    return {
      title: title_,
      meta: [
        { vmid: 'description', name: 'description', content: description_ },
        { vmid: 'keywords', name: 'keywords', content: keywords_ },
        { property: 'og:title', content: title_ }, 
        { property: 'og:description', content: description_ }, 
        { property: 'og:url', content: url_ }, 

        { property: 'twitter:description', content: description_ }, 
        { property: 'twitter:title', content: title_ }, 

        { itemprop: 'name', content: title_ },
        { itemprop: 'description', content: description_},
        { itemprop: 'image', content: 'https://www.ragnarokmobile.net/img/louyang.webp' }
      ],
      link: [
        { rel: 'canonical', href: url_ }
      ]
    };
  },
  data() {
    return {
      fullPage: true,
      url: constant.url,
      loading: true,
      monsters: [],
      page: 2,
      closeOnClick: true,
      races: ['All','Angel', 'Brute', 'DemiHuman', 'Demon', 'Dragon', 'Fish', 'Formless', 'Insect', 'Plant', 'Undead'],
      elements: ['All','Dark','Earth','Fire','Ghost', 'Holy','Neutral','Poison', 'Undead','Water','Wind'],
      sizes: ['All', 'Small', 'Medium', 'Large'],
      types: ['All', 'Mini', 'MVP', 'Star', 'Undead'],
      orders: ['All', 'Name ASC', 'Name Desc', 'Level ASC', 'Level Desc', 'Base Exp', 'Job Exp'],
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
  .filters {
    padding: 0 0 10px;
    position: fixed;
    width: 630px;
    z-index: 9;
    background-color: #fafafa;
  }
  .all-races {
    span {
      font-size: 0.9em;
    }
    .v-icon {
      font-size: 1.5em;
    }
  }
  .all-elements {
    span {
      font-size: 0.9em;
    }
    .v-icon {
      font-size: 1.5em;
    }
  }
  .all-sizes {
    span {
      font-size: 0.9em;
    }
    .v-icon {
      font-size: 1.5em;
    }
  }
  .all-types {
    span {
      font-size: 0.9em;
    }
    .v-icon {
      font-size: 1.5em;
    }
  }
  .order-by {
    span {
      font-size: 0.9em;
    }
    .v-icon {
      font-size: 1.5em;
    }
  }
</style>
