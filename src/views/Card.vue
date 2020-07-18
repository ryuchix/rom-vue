<template>
  <div>    
    <div class="content" v-if="!loading">
        <div class="single card">
            <div class="single-row">
                <div class="image-container">
                    <div class="image">
                        <img :src="card.icon" :alt="card.name_en" />
                    </div>
                </div>
                <div class="title-container">
                    <div class="title-container-inner">
                        <div class="item-title">
                            <h2>{{ card.name_en }}</h2>
                        </div>
                        <div class="item-title-info">
                            <div class="type">{{ card.type_name }}</div>
                        </div>
                        <div class="item-tags">
                            <div class="tag" :class="card.tradable ? 'enable' : 'disable'">
                                <i aria-label="tradable" class="material-icons">{{ card.tradable ? 'check' : 'close' }}</i> Trade
                            </div>
                            <div class="tag" :class="card.compose_recipe != 0 ? 'enable' : 'disable'">
                                <i aria-label="craftable" class="material-icons">{{ card.compose_recipe != 0 ? 'check' : 'close' }}</i> Craft
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sub-heading">
                <h3>Attributes</h3>
            </div>
            <div class="card-stats">
                <ul>
                    <li v-for="(eff, index) in card.stat" :key="index">{{ eff }}</li>
                </ul>
            </div>
            <div class="card-type__">
                Unlock
            </div>
            <div class="card-stats unlock">
                {{ card.unlock_effect }}
            </div>
            <div class="card-type__">
                Deposit
            </div>
            <div class="card-stats deposit">
                {{ card.deposit_effect }}
            </div>

            <div v-if="card.monsters != null">
                <div class="sub-heading clear">
                    <h3>Dropped by</h3>
                </div>
                <div class="dropped">
                <div class="monsters row no-gutters">
                    <div class="col-sm-12 col-12" v-for="mons in card.monsters" :key="mons.id">
                        <div class="monster-details">
                            <div class="monster-image" :class="mons.star != 'star' ? mons.type : 'star'">
                                <img :src="mons.icon" :alt="mons.name_en">
                            </div>
                        </div>
                        <div class="monster-info">
                            <router-link :to="{ name: 'monster', params: { id: mons.slug }}">
                              <div class="monster-name pointer" @click="$router.push({ name: 'monster', params: { id: mons.slug }})">{{ mons.name_en }}</div>
                            </router-link>
                            <div class="monster-attr">
                                <div class="monster-stats_">
                                    {{ mons.element }}<span> · </span>
                                    {{ mons.race }}<span> · </span>
                                    {{ mons.size }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

          <div v-if="card.compose_recipe == 1 && card.compose != null">
            <div class="sub-heading clear">
                <h3>Craft</h3>
            </div>
            <div class="tiers">
              <v-expansion-panels accordion class="accordion" flat="flat">
                <v-expansion-panel v-for="synth in card.compose" :key="synth.id">
                  <v-expansion-panel-header>
                    <div class="attr" style="border: 0; margin-top: 0px;">
                    <dl>
                      <dd class="single-row" style="padding-left: 10px; font-size: 1em; align-items: center;">
                        <div class="image">
                          <img src="../assets/images/defaultcardimg.png" :alt="synth['item_output']">
                        </div>
                        {{ synth['item_output'] }}
                      </dd>
                    </dl>
                    </div></v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-for="equip in synth.materials" :key="equip.id">
                      <div class="item-info">
                          <div class="image is-24x24" :class="equip.item_id['type_name'] == 'Blueprint' ? 'blueprint' : ''">
                              <img :src="equip.item_id['icon'] != null ? equip.item_id['icon'] : '' " :alt="equip.item_id['name_en'] != null ? equip.item_id['name_en'] : ''">
                          </div>
                          <router-link :to="{ name: 'item', params: { id: equip.item_id['slug'] }}" style="line-height: 1.2em; display: flex;">
                              <div class="item-name" @click="$router.push({name: 'item', params: { id: equip.item_id['slug'] }})">
                                  {{ equip.item_id['name_en'] }} x {{ equip.qty }}
                              </div>
                          </router-link>
                      </div>
                    </div>
                      <div class="item-info">
                          <div class="image is-24x24">
                              <img src="https://api.ragnarokmobile.net/uploads/items/100_img.png" alt="Zeny">
                          </div>
                          <router-link :to="{ name: 'item', params: { id: 'zeny' }}" style="line-height: 1.2em; display: flex;">
                              <div class="item-name" @click="$router.push({name: 'item', params: { id: 'zeny' }})">
                                  {{ formatNumber(synth.cost) }} Zeny
                              </div>
                          </router-link>
                      </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>

              </v-expansion-panels>
            </div>
          </div>


        </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import { constant } from "../router/Constant";

export default {
  name: 'Card',
  components: {
    //
  },
  metaInfo() {
    let name_ = this.card.name_en;
    let title_ = name_ + ', ' + name_ + ' crafting requirements, where to get ' + name_ + ' who drops ' + name_ + ' in Ragnarok Mobile'
    let url_ = 'https://www.ragnarokmobile.net/card/' + this.card.slug
    let keywords_ = title_ + ', Ragnarok card database, card drop, ROM, ROM Exchange price, market finance, Ragnarok, online, RO, ragnarok mobile, ragnarok m, ragnarok eternal love, database, guide, job, quest, headgear quest, monster drops, item information, skill description, skill simulator, stat calculator, ragnarok tools, ragnarok mobile english'
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
      card: {},
      fullPage: false
    }
  },
  methods: {
    formatNumber(num) {
      if (num != null)
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    getItem() {
      axios
        .get(constant.getCard + this.id)
        .then(response => (this.card = response.data))
        .catch(error => this.$router.replace({ name: "error" }))
        .finally(() => (this.loading = false));
    }
  },
  mounted() {
    this.getItem();
  }
}
</script>
<style lang="scss">
.card {
  border: 0 !important;
}
</style>
