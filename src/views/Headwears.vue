<template>
  <div>
    <div class="content" v-if="!loading">
      <div class="filters d-flex flex-row justify-center justify-space-around">
        <div class="all-elements">
          <v-menu max-height="300" bottom offset-y :close-on-click="closeOnClick">
            <template v-slot:activator="{ on, attrs }">
              <span class="v-btn__content" 
                v-bind="attrs"
                v-on="on">Position<v-icon>mdi-menu-down</v-icon></span>
            </template>
            <v-list tile dense min-width="100">
              <v-list-item link v-for="(position, index) in positions" :key="index"
                :class="$route.query.position == position ? '_active' : ''"
                @click="$router.push({name: 'headwears', query: query({position: position})})">
                <v-list-item-title dense>{{ position }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="all-races">
          <v-menu z-index="9" max-height="300" bottom offset-y :close-on-click="closeOnClick">
            <template v-slot:activator="{ on, attrs }">
              <span class="v-btn__content" 
                v-bind="attrs"
                v-on="on">Unlock<v-icon>mdi-menu-down</v-icon></span>
            </template>
            <v-list tile dense flat min-width="100" >
              <v-list-item light link v-for="(unlock, index) in attrs" :key="index"
                :class="$route.query.unlock == unlock ? '_active' : ''"
                @click="$router.push({name: 'headwears', query: query({unlock: unlock})})">
                <v-list-item-title dense>{{ unlock }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="all-sizes">
          <v-menu z-index="9" max-height="300" bottom offset-y :close-on-click="closeOnClick">
            <template v-slot:activator="{ on, attrs }">
              <span class="v-btn__content" 
                v-bind="attrs"
                v-on="on">Deposit<v-icon>mdi-menu-down</v-icon></span>
            </template>
            <v-list tile dense flat min-width="100" >
              <v-list-item light link v-for="(deposit, index) in attrs" :key="index"
                :class="$route.query.deposit == deposit ? '_active' : ''"
                @click="$router.push({name: 'headwears', query: query({deposit: deposit})})">
                <v-list-item-title dense>{{ deposit }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div class="headwears mt-7" v-for="headwear in headwears" :key="headwear.id">
        <router-link :to="{ name: 'headwear', params: { id: headwear.slug }}">
          <div class="card-details clearfix">
            <div class="image">
              <img :src="headwear.icon" :alt="headwear.name_en" />
            </div>
          </div>
        </router-link>
        <div class="card-info">
          <router-link :to="{ name: 'headwear', params: { id: headwear.slug }}">
            <div
              class="card-name"
            >{{ headwear.name_en }}</div>
          </router-link>
          <div class="card-attr">
            <div class="card-type_">{{ headwear.type_name }}</div>
            <div class="card-stats">
              <ul>
                <li v-for="(eff, index) in headwear.stat_extra" :key="index">{{ eff }}</li>
              </ul>
            </div>
            <div v-if="headwear.unlock_effect != null">
              <div class="card-type__">Unlock</div>
              <div class="card-stats unlock">{{ headwear.unlock_effect }}</div>
            </div>
            <div v-if="headwear.deposit_effect != null">
              <div class="card-type__">Deposit</div>
              <div class="card-stats deposit">{{ headwear.deposit_effect }}</div>
            </div>
          </div>
        </div>
      </div>
      <infinite-loading v-if="!loading" spinner="waveDots" @infinite="loadmore">
        <div slot="no-more">End</div>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { constant } from "../router/Constant";
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "Headwears",
  components: {
    InfiniteLoading
  },
  metaInfo() {
    let title_ = 'Ragnarok headwears database, headgears database, back, tail, mouth, face location for Ragnarok Mobile Eternal Love'
    let url_ = 'https://www.ragnarokmobile.net/headwears'
    let keywords_ = title_ + ' ROM, ROM Exchange price, market finance, Ragnarok, online, RO, ragnarok mobile, ragnarok m, ragnarok eternal love, database, guide, job, quest, headgear quest, monster drops, item information, skill description, skill simulator, stat calculator, ragnarok tools, ragnarok mobile english'
    let description_ = title_ + '. Your ultimate guide for Ragnarok Mobile Eternal Love. Your source for Ragnarok M Monsters, Cards, Quests, Database, Headwears, Blueprints, Items, Market Prices, Exchange Price List and Stats and Skills calculator. ROM'

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
      item: {},
      loading: true,
      headwears: [],
      page: 2,
      positions: [
        'All',
        'Head',
        'Face',
        'Mouth',
        'Back',
        'Tail',
        'Costume',
      ],
      attrs: [
        'All',
        'Str',
        'Agi',
        'Vit',
        'Int',
        'Dex',
        'Luk',
        'Max HP',
        'Max SP',
        'Atk',
        'Def',
        'M.Atk',
        'M.Def',
        'Critical',
        'Hit',
        'Flee',
        'Spd',
      ],
      closeOnClick: true,
      q: this.$route.query,
      fquery: this.$route.fullPath.replace("/headwears", "")
    };
  },
  methods: {
    query(newQuery) {
      return {
        ...this.$route.query,
        ...newQuery
      }
    },
    filterHeadwears() {
      axios
        .get(constant.filterHeadwears + this.fquery)
        .then(response => (this.headwears = response.data.data))
        .catch(error => console.log(error))
        .finally(() => (this.loading = false));
    },
    getHeadwears() {
      axios
        .get(constant.getHeadwears)
        .then(response => (this.headwears = response.data.data))
        .catch(error => console.log(error))
        .finally(() => (this.loading = false));
    },
    loadmore($state) {
      let vm = this;
      if(Object.entries(this.$route.query).length === 0) {
        axios
          .get(constant.getHeadwears + "?page=" + vm.page)
          .then(response => {
            response.data.data.map(function(value) {
              vm.headwears.push(value);
            });
            if ((vm.page - 1) == response.data.last_page) {
              $state.complete();
            }
            vm.page += 1;
            $state.loaded();
          })
          .catch(error => console.log(error))
          .finally(() => console.log());
      } else {
        axios
          .get(constant.filterHeadwears + vm.fquery +'&page='+vm.page)
          .then(response => {
            response.data.data.map(function(value) {
              vm.headwears.push(value);
            });
            if ((vm.page - 1) == response.data.last_page) {
              $state.complete();
            }
            vm.page += 1;
            $state.loaded();
          })
          .catch(error => console.log(error))
          .finally(() => console.log());
      }

    }
  },
  mounted() {
    if (Object.entries(this.$route.query).length === 0) {
      this.getHeadwears();
    } else {
      this.filterHeadwears();
    }
  }
};
</script>
<style lang="scss">
.headwears {
  a {
    height: fit-content;
  }
}
</style>
