<template>
  <div id="app">
    <div class="content">
      <div v-if="
       monsters.length == 0 && 
                  equipments.length == 0 && 
                  items.length == 0 && 
                  cards.length == 0 && 
                  furnitures.length == 0 && 
                  headwears.length == 0 && 
                  blogs.length == 0 && !loading ">
          <h2>No results found!</h2>
      </div>
      <div class="monsters-container mb-3" v-if="monsters.length > 0">
        <h2>Monsters</h2>
        <div
          v-for="monster in monsters"
          :key="monster.id"
          class="monsters">
          <div class="d-flex">

          <router-link :to="{ name: 'monster', params: { id: monster.slug }}">
            <div class="monster-details">
              <div class="monster-image pointer" :class="monster.star != 'star' ? monster.type : 'star'">
                <img :src="monster.icon" :alt="monster.name_en" />
              </div>
            </div>
          </router-link>
            <div class="monster-info">
              <router-link :to="{ name: 'monster', params: { id: monster.slug }}">
              <div class="monster-name pointer">{{ monster.name_en }}</div>
              </router-link>
              <div class="monster-attr">
                <div class="monster-stats_">
                  {{ monster.element }}
                  <span>·</span>
                  {{ monster.race }}
                  <span>·</span>
                  {{ monster.size }}
                </div>
                <div class="monster-stats">
                  Lv:
                  <strong>{{ monster.level }}</strong>
                  <span>·</span> HP:
                  <strong>{{ formatNumber(monster.hp) }}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="equipments-container mb-3" v-if="cards.length > 0">
        <h2>Cards</h2>
        <div class="equipments" v-for="item in cards" :key="item.id">
          <router-link :to="{ name: 'card', params: { id: item.slug }}">
            <div class="equipment-details clearfix">
              <div class="image">
                <img src="../assets/images/defaultcardimg.png" :alt="item.name_en" />
              </div>
            </div>
          </router-link>
          <div class="equipment-info">
            <router-link :to="{ name: 'card', params: { id: item.slug }}">
              <div class="equipment-name">{{ item.name_en }}</div>
            </router-link>
            <div class="equipment-attr">
              <div class="equipment-type_">{{ item.type_name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="equipments-container mb-3" v-if="equipments.length > 0">
        <h2>Equipments</h2>
        <div class="equipments" v-for="equipment in equipments" :key="equipment.id">
          <router-link :to="{ name: 'equipment', params: { id: equipment.slug }}">
            <div class="equipment-details clearfix">
              <div class="image">
                <img :src="equipment.icon" :alt="equipment.name_en" />
              </div>
            </div>
          </router-link>
          <div class="equipment-info">
            <router-link :to="{ name: 'equipment', params: { id: equipment.slug }}">
              <div class="equipment-name">{{ equipment.name_en }}</div>
            </router-link>
            <div class="equipment-attr">
              <div class="equipment-type_">{{ equipment.type_name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="equipments-container mb-3" v-if="items.length > 0">
        <h2>Items</h2>
        <div class="equipments" v-for="item in items" :key="item.id">
          <router-link :to="{ name: 'item', params: { id: item.slug }}">
            <div class="equipment-details clearfix">
              <div class="image" :class="item.type_name == 'Blueprint' ? 'blueprint' : (item.type_name == 'Furniture Blueprint' ? 'fblueprint' : '')">
                <img :src="item.icon" :alt="item.name_en" />
              </div>
            </div>
          </router-link>
          <div class="equipment-info">
            <router-link :to="{ name: 'item', params: { id: item.slug }}">
              <div class="equipment-name">{{ item.name_en }}</div>
            </router-link>
            <div class="equipment-attr">
              <div class="equipment-type_">{{ item.type_name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="equipments-container mb-3" v-if="headwears.length > 0">
        <h2>Headwears</h2>
        <div class="equipments" v-for="item in headwears" :key="item.id">
          <router-link :to="{ name: 'headwear', params: { id: item.slug }}">
            <div class="equipment-details clearfix">
              <div class="image">
                <img :src="item.icon" :alt="item.name_en" />
              </div>
            </div>
          </router-link>
          <div class="equipment-info">
            <router-link :to="{ name: 'headwear', params: { id: item.slug }}">
              <div class="equipment-name">{{ item.name_en }}</div>
            </router-link>
            <div class="equipment-attr">
              <div class="equipment-type_">{{ item.type_name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="equipments-container mb-3" v-if="headwears.length > 0">
        <h2>Furnitures</h2>
        <div class="equipments" v-for="item in furnitures" :key="item.id">
          <router-link :to="{ name: 'furniture', params: { id: item.slug }}">
            <div class="equipment-details clearfix">
              <div class="image">
                <img :src="item.icon" :alt="item.name_en" />
              </div>
            </div>
          </router-link>
          <div class="equipment-info">
            <router-link :to="{ name: 'furniture', params: { id: item.slug }}">
              <div class="equipment-name">{{ item.name_en }}</div>
            </router-link>
            <div class="equipment-attr">
              <div class="equipment-type_">{{ item.type_name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="blogs-container mb-3" v-if="blogs.length > 0">
        <h2>Guides</h2>
        <div v-for="blog in blogs" :key="blog.id">
          <router-link :to="{ name: 'guide', params: { slug: blog.slug }}">
            {{ blog.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { constant } from "../router/Constant";

export default {
  name: "Search",
  components: {
    //
  },
  metaInfo() {
    let title_ = "Search results for " + this.query + " | Ragnarok Mobile - Guide, Quest, Build and Database for Ragnarok M Eternal Love"
    let url_ = 'https://www.ragnarokmobile.net/search/' + this.query
    let keywords_ = this.query + ' ROM, ROM Exchange price, market finance, Ragnarok, online, RO, ragnarok mobile, ragnarok m, ragnarok eternal love, database, guide, job, quest, headgear quest, monster drops, item information, skill description, skill simulator, stat calculator, ragnarok tools, ragnarok mobile english'
    let description_ = "Search results for " + this.query + ' Your ultimate guide for Ragnarok Mobile Eternal Love. Your source for Ragnarok M Monsters, Cards, Quests, Database, Headwears, Blueprints, Items, Market Prices, Exchange Price List and Stats and Skills calculator. ROM'

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
      loading: false,
      results: [],
      query: this.$route.params.query,
      items: [],
      cards: [],
      equipments: [],
      blogs: [],
      monsters: [],
      headwears: []
    };
  },
  methods: {
    getResults() {
      this.loading = true;
      this.results = [];
      axios
        .get(constant.getSearch + this.query)
        .then(response => {
          this.items = response.data.items;
          this.cards = response.data.cards;
          this.equipments = response.data.equipments;
          this.blogs = response.data.blogs;
          this.monsters = response.data.monsters;
          this.headwears = response.data.headwears;
          this.furnitures = response.data.furnitures;
        })
        .catch(error => console.log(error))
        .finally(() => (this.loading = false));
    },
    formatNumber(num) {
      if (num != null)
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  },
  mounted() {
    this.getResults();
  }
};
</script>
<style lang="scss">
@import "../assets/scss/mixins.scss";
.monsters-container {
.monsters {
  margin-left: 7px;
  padding: 0;
  width: 100%;
  margin-bottom: 0;
  transition: 0.2s ease-in-out;
  padding: 8px 0;
  display: flex;
  border: 1px solid transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #e8ebf7;
  &:last-child {
    border-bottom: 0;
  }
  .monster-details {
    display: inline-block;
    line-height: 10px;
  }
  .col-12 {
    display: flex;
  }
  .monster-image {
    @include imagecontainer;
    &.mvp {
      &:after {
        background: url("../assets/images/monster-icon-min.png") 0;
        background-repeat: no-repeat;
        position: absolute;
        top: -4px;
        left: -4px;
        background-size: 150px;
        content: "";
        width: 23px;
        height: 27px;
        background-position: 0 0;
      }
    }
    &.mini {
      &:after {
        background: url("../assets/images/monster-icon-min.png") 0;
        background-repeat: no-repeat;
        position: absolute;
        top: -4px;
        left: -4px;
        background-size: 150px;
        content: "";
        width: 27px;
        height: 24px;
        background-position: -30px 0;
      }
    }
    &.star {
      &:after {
        background: url("../assets/images/monster-icon-min.png") 0;
        background-repeat: no-repeat;
        position: absolute;
        top: 0px;
        left: auto;
        right: 0;
        background-size: 150px;
        content: "";
        width: 18px;
        height: 18px;
        background-position: 0 -30px;
      }
    }
    &.undead {
      &:after {
        background: url("../assets/images/monster-icon-min.png") 0;
        background-repeat: no-repeat;
        position: absolute;
        top: -5px;
        left: -4px;
        background-size: 150px;
        content: "";
        width: 30px;
        height: 30px;
        background-position: -30px -26px;
      }
    }
  }
  img {
    @include imagecontainer_img;
    padding: 0px;
  }
  .monster-info {
    align-self: center;
    .monster-name {
      margin-left: 6px;
      font-size: 1.3em;
      font-weight: 500;
      color: $primary;
    }
    .monster-attr {
      color: $disabled;
      margin-left: 6px;
    }
    .monster-stats {
      color: $black;
      font-size: 1em;
    }
    .monster-stats_ {
      text-transform: uppercase;
      font-size: 0.9em;
    }
  }
}
}

.equipments-container {
  .equipments {
    &:last-child {
      border-bottom: 0;
    }
  }
  .equipment-info {
    align-self: flex-start;
  }
  .image {
    &.blueprint {
        background: url('../assets/images/blueprint.png');
        background-repeat: no-repeat;
        border: 2px solid #c6a460;
        background-size: cover;
    }
    &.fblueprint {
        background-color: #4b8ad5;
        border: 2px solid #4b8ad5;
    }
  }
}
</style>