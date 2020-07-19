<template>
  <div>
    <div class="content" v-if="!loading">
      <div class="cards" v-for="card in cards" :key="card.id">
        <router-link :to="{ name: 'card', params: { id: card.slug }}">
          <div
            class="card-details clearfix"
            @click="$router.push({name: 'card', params: { id: card.slug }})">
            <div class="image" :class="card.quality">
              <img :src="card.icon" :alt="card.name_en" />
            </div>
          </div>
        </router-link>
        <div class="card-info">
          <router-link :to="{ name: 'card', params: { id: card.slug }}">
            <div
              class="card-name"
              @click="$router.push({name: 'card', params: { id: card.slug }})"
            >{{ card.name_en }}</div>
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
      page: 2
    };
  },
  methods: {
    getCards() {
      axios
        .get(constant.getCards)
        .then(response => (this.cards = response.data.data))
        .catch(error => console.log(error))
        .finally(() => (this.loading = false));
    },
    loadmore($state) {
      let vm = this;
      axios
        .get(constant.getCards + "?page=" + vm.page)
        .then(response => {
          response.data.data.map(function(value) {
            vm.cards.push(value);
          });
          vm.page += 1;
          $state.loaded();
        })
        .catch(error => console.log(error))
        .finally(() => console.log());
    }
  },
  mounted() {
    this.getCards();
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
