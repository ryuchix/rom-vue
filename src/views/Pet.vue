<template>
  <div>    
    <div class="content" v-if="!loading">
        <div class="single monster">
            <div class="single-row">
                <div class="image-container">
                    <div class="image">
                        <img :src="monster.icon" :alt="monster.name">
                    </div>
                    <div :class="'star-'+ monster.star"></div>
                </div>
                <div class="title-container">
                    <div class="title-container-inner">
                        <div class="item-title">
                            <h2>{{ monster.name }}</h2>
                        </div>
                        <div class="item-title-info">
                            <div class="type">
                                <router-link :to="{ name: 'pets', query: { element: monster.element }}">{{ monster.element }}</router-link> <span> · </span>
                                <router-link :to="{ name: 'pets', query: { race: monster.race }}">{{ monster.race }}</router-link><span> · </span>
                                <router-link :to="{ name: 'pets', query: { size: monster.size }}">{{ monster.size }}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="description" v-if="monster.description != null && monster.description != ''">
                <div class="inner-description">{{ monster.description }}</div>
            </div>

        <div>
          <div v-if="monster.unlock != null && monster.unlock != ''">
            <div class="card-type__">Unlock</div>
            <div class="card-stats unlock">{{ monster.unlock }}</div>
          </div>
          <div v-if="monster.food != null">
            <div class="card-type__">Taming item</div>
            <router-link :to="{ name: 'item', params: { id: monster.food.slug }}">
                <div v-ripple class="card-stats unlock">{{ monster.food.name_en }}</div>
            </router-link>
          </div>
          <div v-if="monster.compose != null && monster.compose.length > 0">
            <div class="card-type__">Pet Fusion</div>
            <div class="pet-fusion">
              <div class="dropped">
                <div v-for="mons in monster.compose" :key="mons.id" class="monsters row no-gutters">
                    <div class="col-sm-12 col-12">
                        <div class="monster-details">
                            <div class="monster-image">
                                <img :src="mons.icon" :alt="mons.name">
                            </div>
                        </div>
                        <div class="monster-info">
                            <router-link :to="{ name: 'pet', params: { id: mons.slug }}" class="d-flex">
                              <div class="monster-name">{{ mons.name }}</div>
                            </router-link>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>


            <div v-if="monster.skills != null && monster.skills.length > 0">
                <div class="sub-heading clear">
                    <h3>Skills</h3>
                </div>
                <div class="drops">
                <div class="attr">
                    <ul>
                        <li v-for="skill in monster.skills" :key="skill.id">
                            <strong>{{ skill.name }}</strong> <span class="skilllvl">(Lvl. {{ skill.lvl }})</span>
                            <div class="skilldesc" v-html="skill.description"> </div>
                        </li>
                    </ul>
    
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { constant } from '../router/Constant';

export default {
  name: 'Pet',
  components: {
    //
  },
  metaInfo() {
    let name_ = this.monster.name_en;
    let title_ = name_ + ', ' + name_ + ' locations, ' + name_ + ' information and attributes, ' + name_ + ' elements, size, race and drops in Ragnarok Mobile'
    let url_ = 'https://www.ragnarokmobile.net/monster/' + this.monster.slug
    let keywords_ = 'Ragnarok monsters database, monsters drop, monsters location, ROM, ROM Exchange price, market finance, Ragnarok, online, RO, ragnarok mobile, ragnarok m, ragnarok eternal love, database, guide, job, quest, headgear quest, monster drops, item information, skill description, skill simulator, stat calculator, ragnarok tools, ragnarok mobile english'
    let description_ = 'Get ' + name_ + ' information and attributes. Your ultimate guide for Ragnarok Mobile Eternal Love. Your source for Ragnarok M Monsters, Cards, Quests, Database, Headwears, Blueprints, Items, Market Prices, Exchange Price List and Stats and Skills calculator. ROM'

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
        id: this.$route.params.id,
        loading: true,
        monster: {},
        fullPage: false,
    }
  },
  created () {
    this.getMonsters()
  },
  methods:  {
    getMonsters() {
      axios
        .get(constant.getPet+this.id)
        .then(response => (this.monster = response.data))
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
    },
    formatNumber(num) {
        if (num != null) return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  }
}
</script>
<style lang="scss">
    @import "../assets/scss/mixins.scss";   
    em {
        font-weight: 500;
    }
    .skilllvl {
        color: $disabled;
        font-size: 0.8em;
    }
    .skilldesc {
        margin-left: -15px;
        font-size: 0.9em;
    }
    .unlock {
        margin-left: 6px;
    }

</style>
