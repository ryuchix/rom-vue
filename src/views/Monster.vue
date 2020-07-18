<template>
  <div>    
    <div class="content" v-if="!loading">
        <div class="single monster">
            <div class="single-row">
                <div class="image-container">
                    <div class="image" :class="monster.star != 'star' ? monster.type : 'star'">
                        <img :src="monster.icon" :alt="monster.name_en">
                    </div>
                </div>
                <div class="title-container">
                    <div class="title-container-inner">
                        <div class="item-title">
                            <h2>{{ monster.name_en }}</h2>
                        </div>
                        <div class="item-title-info">
                            <div class="type">
                                <a href="javascript:void(0)">{{ monster.element }}</a><span> · </span>
                                <a href="javascript:void(0)">{{ monster.race }}</a><span> · </span>
                                <a href="javascript:void(0)">{{ monster.size }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="description" v-if="monster.desc_en != null">
                <div class="inner-description">{{ monster.desc_en }}</div>
            </div>
            <div class="sub-heading">
                <h3>Monster info</h3>
            </div>
            <div class="basic">
                <div class="attr">
                    <dl>
                        <dt>Level</dt>
                        <dd>{{ monster.level }}</dd>
                    </dl>
                    <dl>
                        <dt>HP</dt>
                        <dd>{{ formatNumber(monster.hp) }}</dd>
                    </dl>
                    <dl>
                        <dt>Type</dt>
                        <dd><a href="#">{{ monster.type == 'mini' ? 'Mini' : '' }} {{ monster.type == 'Normal' ? 'Normal' : '' }} {{ monster.type == 'mvp' ? 'MVP' : '' }}</a></dd>
                    </dl>
                    <dl>
                        <dt>Race</dt>
                        <dd>{{ monster.race }}</dd>
                    </dl>
                    <dl>
                        <dt>Element</dt>
                        <dd>{{ monster.element }}</dd>
                    </dl>
                    <dl>
                        <dt>Size</dt>
                        <dd>{{ monster.size }}</dd>
                    </dl>
                    <dl>
                        <dt>Base exp</dt>
                        <dd>{{ formatNumber(monster.base_exp) }}</dd>
                    </dl>
                    <dl>
                        <dt>Job exp</dt>
                        <dd>{{ formatNumber(monster.job_exp) }}</dd>
                    </dl>
                </div>
            </div>
            <div class="clear"></div>
            <div class="sub-heading">
                <h3>Stats/Attributes</h3>
            </div>
            <div class="basic">
                <div class="attr">
                    <dl>
                        <dt>Str</dt>
                        <dd>{{ monster.str }}</dd>
                    </dl>
                    <dl style="border-top: none;">
                        <dt>Dex</dt>
                        <dd>{{ monster.dex }}</dd>
                    </dl>
                    <dl>
                        <dt>Agi</dt>
                        <dd>{{ monster.agi }}</dd>
                    </dl>
                    <dl>
                        <dt>Luk</dt>
                        <dd>{{ monster.luk }}</dd>
                    </dl>
                    <dl>
                        <dt>Atk</dt>
                        <dd>{{ formatNumber(monster.atk) }}</dd>
                    </dl>
                    <dl>
                        <dt>Def</dt>
                        <dd>{{ formatNumber(monster.def) }}</dd>
                    </dl>
                    <dl>
                        <dt>M.Atk</dt>
                        <dd>{{ formatNumber(monster.matk) }}</dd>
                    </dl>
                    <dl>
                        <dt>M.Def</dt>
                        <dd>{{ formatNumber(monster.mdef) }}</dd>
                    </dl>
                    <dl>
                        <dt>Hit</dt>
                        <dd>{{ formatNumber(monster.hit) }}</dd>
                    </dl>
                    <dl>
                        <dt>Flee</dt>
                        <dd>{{ formatNumber(monster.flee) }}</dd>
                    </dl>
                    <dl>
                        <dt>Move Spd</dt>
                        <dd>{{ formatNumber(monster.move_spd) }}</dd>
                    </dl>
                    <dl>
                        <dt>ASPD</dt>
                        <dd>{{ formatNumber(monster.atk_spd) }}</dd>
                    </dl>
                </div>
            </div>
            <div v-if="monster.items != null && monster.items.length > 0">
                <div class="sub-heading clear">
                    <h3>Drops</h3>
                </div>
                <div class="drops">
                <div class="attr">
                        <dl v-for="drop in monster.items" :key="drop.id">
                            <dt>
                                <div class="item-info">
                                    <div class="image is-24x24">
                                        <img :src="drop.icon" :alt="drop.name_en" v-if="drop.type != 'cards'">
                                        <img v-if="drop.type == 'cards'" src="../assets/images/defaultcardimg.png" :alt="drop.name_en">
                                    </div>
                                    <router-link class="item-info" :to="{ name: 'item', params: { id: drop.slug }}" v-if="drop.type == 'items'">
                                        <div class="item-name" @click="$router.push({name: 'item', params: {id: drop.slug}})">
                                        {{ drop.name_en == 'Zeny' ? formatNumber(drop['pivot'].qty) + ' Zeny' : drop.name_en }}
                                        </div>
                                        <span v-if="drop.name_en != 'Zeny'">&nbsp; x{{ drop['pivot'].qty }}</span>
                                    </router-link>
                                    <router-link class="item-name" :to="{ name: 'card', params: { id: drop.slug }}" v-if="drop.type == 'cards'">
                                        <div class="item-name" @click="$router.push({name: 'card', params: {id: drop.slug}})">
                                        {{ drop.name_en == 'Zeny' ? formatNumber(drop['pivot'].qty) + ' Zeny' : drop.name_en }}
                                        </div>
                                        <span v-if="drop.name_en != 'Zeny'">&nbsp; x{{ drop['pivot'].qty }}</span>
                                    </router-link>
                                    <router-link class="item-name" :to="{ name: 'equipment', params: { id: drop.slug }}" v-if="drop.type == 'equips'">
                                        <div class="item-name" @click="$router.push({name: 'equipment', params: {id: drop.slug}})">
                                        {{ drop.name_en == 'Zeny' ? formatNumber(drop['pivot'].qty) + ' Zeny' : drop.name_en }}
                                        </div>
                                        <span v-if="drop.name_en != 'Zeny'">&nbsp; x{{ drop['pivot'].qty }}</span>
                                    </router-link>
                                </div>
                            </dt>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
            <!-- <div class="sub-heading">
                <h3>Location</h3>
            </div>
            <div class="location">
                <ul>
                    <li><a href="javascript:void(0)">Underwater cave</a></li>
                </ul>
            </div> -->



        </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { constant } from '../router/Constant';

export default {
  name: 'Home',
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
        .get(constant.getMonster+this.id)
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

</style>
