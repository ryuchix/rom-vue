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
                @click="$router.push({name: 'cards', query: query({position: position})})">
                <v-list-item-title dense>{{ position }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="all-elements">
          <v-menu max-height="300" bottom offset-y :close-on-click="closeOnClick">
            <template v-slot:activator="{ on, attrs }">
              <span class="v-btn__content" 
                v-bind="attrs"
                v-on="on">Color<v-icon>mdi-menu-down</v-icon></span>
            </template>
            <v-list tile dense min-width="100">
              <v-list-item link v-for="(color, index) in colors" :key="index"
                :class="$route.query.color == color ? '_active' : ''"
                @click="$router.push({name: 'cards', query: query({color: color})})">
                <v-list-item-title dense>{{ color }}</v-list-item-title>
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
                @click="$router.push({name: 'cards', query: query({unlock: unlock})})">
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
                @click="$router.push({name: 'cards', query: query({deposit: deposit})})">
                <v-list-item-title dense>{{ deposit }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div class="cards mt-7" v-for="card in cards" :key="card.id">
        <router-link :to="{ name: 'card', params: { id: card.slug }}">
          <div
            class="card-details clearfix">
            <div class="image" :class="card.quality">
              <img :src="card.icon" :alt="card.name_en" />
            </div>
          </div>
        </router-link>
        <div class="card-info">
          <router-link :to="{ name: 'card', params: { id: card.slug }}">
            <div
              class="card-name">{{ card.name_en }}</div>
          </router-link>
          <div class="card-attr">
            <div class="card-type_">{{ card.type_name }}</div>
            <div class="card-stats">
              <ul>
                <li v-for="(eff, index) in card.stat" :key="index">{{ eff }}</li>
              </ul>
            </div>
            <div class="card-type__">Unlock</div>
            <div class="card-stats unlock">{{ card.unlock_effect }}</div>
            <div class="card-type__">Deposit</div>
            <div class="card-stats deposit">{{ card.deposit_effect }}</div>
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
  name: "Cards",
  components: {
    InfiniteLoading
  },
  metaInfo() {
    let title_ = "Ragnarok cards database, card drop, card crafting, card price, king poring for Ragnarok Mobile Eternal Love"
    let url_ = 'https://www.ragnarokmobile.net/cards'
    let keywords_ = 'Ragnarok cards database, cards drop, card crafting, king poring, ROM, ROM Exchange price, market finance, Ragnarok, online, RO, ragnarok mobile, ragnarok m, ragnarok eternal love, database, guide, job, quest, headgear quest, monster drops, item information, skill description, skill simulator, stat calculator, ragnarok tools, ragnarok mobile english'
    let description_ = 'Browse the Ragnarok Mobile cards, card price, card crafting. Your ultimate guide for Ragnarok Mobile Eternal Love. Your source for Ragnarok M Monsters, Cards, Quests, Database, Headwears, Blueprints, Items, Market Prices, Exchange Price List and Stats and Skills calculator. ROM'

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
      cards: [],
      page: 2,
      closeOnClick: true,
      positions: [
        'All',
        'Off-hand',
        'Armor',
        'Garment',
        'Footgear',
        'Accessory',
        'Weapon',
        'Headwear',
      ],
      colors: [
        'All',
        'White',
        'Green',
        'Blue',
        'Violet',
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
      q: this.$route.query,
      fquery: this.$route.fullPath.replace("/cards", "")

    };
  },
  methods: {
    query(newQuery) {
      return {
        ...this.$route.query,
        ...newQuery
      }
    },
    filterCards() {
      axios
        .get(constant.filterCards + this.fquery)
        .then(response => (this.cards = response.data.data))
        .catch(error => console.log(error))
        .finally(() => (this.loading = false));
    },
    getCards() {
      axios
        .get(constant.getCards)
        .then(response => (this.cards = response.data.data))
        .catch(error => console.log(error))
        .finally(() => (this.loading = false));
    },
    loadmore($state) {
      let vm = this;
      if(Object.entries(this.$route.query).length === 0) {
        axios
          .get(constant.getCards + "?page=" + vm.page)
          .then(response => {
            response.data.data.map(function(value) {
              vm.cards.push(value);
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
          .get(constant.filterCards + vm.fquery +'&page='+vm.page)
          .then(response => {
            response.data.data.map(function(value) {
              vm.cards.push(value);
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
      this.getCards();
    } else {
      this.filterCards();
    }
  }
};
</script>
<style lang="scss">
.cards {
  a {
    height: fit-content;
  }
}
</style>
