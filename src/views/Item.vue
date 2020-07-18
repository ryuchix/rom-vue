<template>
    <div class="content" v-if="!loading">
        <div class="single equipment">
            <div class="single-row">
                <div class="image-container">
                    <div class="image" :class="equipment.type_name == 'Blueprint' ? 'blueprint' : ''">
                        <img :src="equipment.icon" :alt="equipment.name_en">
                    </div>
                </div>
                <div class="title-container">
                    <div class="title-container-inner">
                        <div class="item-title mb-1">
                            <h2>{{ equipment.name_en }}</h2>
                        </div>
                        <div class="item-title-info">
                            <div class="type">
                                {{ equipment.type_name }} {{ equipment.type_name == '- Blueprint' ? equipment.stat_type : '' }}
                            </div>
                        </div>
                        <div class="item-tags">
                            <div class="tag disable" v-if="equipment.tradable == false">
                                <i class="material-icons">close</i> Trade
                            </div>
                            <div class="tag enable" v-if="equipment.tradable == true">
                                <i class="material-icons">check</i> Trade
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="description" v-if="equipment.desc_en != null">
                <div class="inner-description">
                    {{ equipment.desc_en }}
                </div>
            </div>
            <div v-if="equipment.type_name == 'Blueprint' && equipment.stat_extra != null && equipment.stat_extra.length != 0">
              <div class="sub-heading">
                  <h3>Attributes</h3>
              </div>
              <div class="attributes">
                <ul>
                  <li v-for="stat in equipment.stat" :key="stat">{{ stat }}</li>
                  <li v-for="extra in equipment.stat_extra" :key="extra">{{ extra }}</li>
                </ul>
              </div>
              <div v-if="equipment.unlock_effect != null || equipment.deposit_effect != null">
                <div v-if="equipment.unlock_effect != null">
                  <div class="card-type__">
                      Unlock
                  </div>
                  <div class="card-stats unlock">
                      {{ equipment.unlock_effect }}
                  </div>
                </div>
                <div v-if="equipment.deposit_effect != null">
                  <div class="card-type__">
                      Deposit
                  </div>
                  <div class="card-stats deposit">
                      {{ equipment.deposit_effect }}
                  </div>
                </div>   
              </div>
            </div>

            <div v-if="equipment.type_name == 'Blueprint'">
              <div class="attr clear">
                <dl v-if="equipment.compose_id != null && equipment.item_from != null && equipment.item_from['id'] != equipment.id">
                    <dt>Upgradable from</dt>
                    <dd class="single-row">
                      <div class="image">
                        <img :src="equipment.item_from['icon']" :alt="equipment.item_from['name_en']">
                      </div>
                      <router-link :to="{ name: 'headwear', params: { id: equipment.item_from['slug'] }}"> {{ equipment.item_from['name_en'] }} </router-link>
                    </dd>
                </dl>
                <dl v-if="equipment.compose_output_id != null && equipment.item_to != null">
                    <dt>Upgradable to</dt>
                    <dd class="single-row">              
                      <div class="image">
                        <img :src="equipment.item_to['icon']" alt="equipment.item_to['name_en']">
                      </div>
                      <router-link :to="{ name: 'headwear', params: { id: equipment.item_to['slug'] }}"> {{ equipment.item_to['name_en'] }} </router-link>
                      </dd>
                </dl>
              </div>
             </div>

            <div v-if="equipment.monsters != null && equipment.monsters.length > 0">
              <div class="sub-heading clear">
                  <h3>Dropped by</h3>
              </div>
              <div class="dropped">
                <div v-for="monster in equipment.monsters" :key="monster.id" class="monsters row no-gutters">
                    <div class="col-sm-12 col-12">
                      <router-link :to="{ name: 'monster', params: { id: monster.slug }}" class="d-flex">
                        <div class="monster-details" @click="$router.push({ name: 'monster', params: {id: monster.slug} })">
                            <div class="monster-image" :class="monster.star != 'star' ? monster.type : 'star'">
                                <img :src="monster.icon" :alt="monster.name_en">
                            </div>
                        </div>
                        <div class="monster-info" @click="$router.push({ name: 'monster', params: {id: monster.slug} })">
                            <div class="monster-name">{{ monster.name_en }}</div>
                            <div class="monster-attr">
                                <div class="monster-stats_">
                                    {{ monster.element }}<span> · </span>
                                    {{ monster.race }}<span> · </span>
                                    {{ monster.size }}
                                </div>
                            </div>
                        </div>
                      </router-link>
                    </div>
                </div>
              </div>
            </div>

             <div v-if="equipment.item_set == 1">
                <div class="clear"></div>
                <div class="sub-heading">
                    <h3>Set effect</h3>
                </div>
                <div class="set-effect">
                  <v-expansion-panels accordion class="accordion" flat="flat">
                    <v-expansion-panel v-for="set in equipment['sets']" :key="set.id">
                      <v-expansion-panel-header>{{ set.equip_suit_desc_en }}</v-expansion-panel-header>
                      <v-expansion-panel-content>
                        {{ set.effect_desc_en }}
                        <div style="display: flex">
                          <div class="col-6" v-for="item in set['items']" :key="item['id']">
                              <div class="item-info">
                                  <div class="image is-24x24">
                                      <img :src="item['icon'] != null ? item['icon'] : '' " :alt="item['name_en'] != null ? item['name_en'] : ''">
                                  </div>
                                  <router-link :to="{ name: 'equipment', params: { id: item.id }}">
                                      <div class="item-name" @click="openItem(item.id)">
                                          {{ item['name_en'] }}
                                      </div>
                                  </router-link>
                              </div>
                          </div>
                        </div>
                      </v-expansion-panel-content>
                    </v-expansion-panel>

                  </v-expansion-panels>
                </div>
              </div>

            <div  v-if="equipment.type_name == 'Blueprint'">
              <div class="sub-heading clear">
                  <h3>Craft</h3>
              </div>
              <div class="tiers">
                <v-expansion-panels accordion class="accordion" flat="flat">
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      <div class="attr" style="border: 0; margin-top: 0px;">
                      <dl>
                        <dd class="single-row" style="padding-left: 10px; font-size: 1em;">
                          <div class="image">
                            <img :src="equipment.item_from['icon']" :alt="equipment.item_from['name_en']">
                          </div>
                          {{ equipment.compose[0]['item_output'] }}
                        </dd>
                      </dl>
                      </div>
                      </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="tier_materials">
                        <dl v-for="material in equipment.compose[0]['materials']" :key="material.id">
                            <dt>
                                <div class="item-info">
                                    <div class="image is-24x24" :class="material['item_id']['type_name'] == 'Blueprint' ? 'blueprint' : ''">
                                        <img :src="material['item_id'] != null ? material['item_id']['icon'] : '' " :alt="material['item_id'] != null ? material['item_id']['name'] : ''">
                                    </div>
                                  <router-link v-if="material['item_id']['type'] == 'items'" :to="{ name: 'item', params: { id: material['item_id']['slug'] }}" style="line-height: 1.2em; display: flex;">
                                    <div @click="openItem(material['item_id']['slug'])" class="item-name">
                                        {{ material['item_id'] != null ? material['item_id']['name_en'] : '' }} x {{ material['qty'] }}
                                    </div>
                                  </router-link>
                                  
                                  <router-link v-if="material['item_id']['type'] == 'equips'" :to="{ name: 'equipment', params: { id: material['item_id']['slug'] }}" style="line-height: 1.2em; display: flex;">
                                    <div @click="$router.push({ name: 'equipment', params: { id: material['item_id']['slug'] }})" class="item-name" v-if="material['item_id'] != null && material['item_id']['name_en'] != 'Zeny'">
                                        {{ material['item_id'] != null ? material['item_id']['name_en'] : '' }} x {{ material['qty'] }}
                                    </div>
                                    <div @click="$router.push({ name: 'equipment', params: { id: material['item_id']['slug'] }})" class="item-name" v-else>
                                        {{ material['item_id'] != null ? formatNumber(material['qty']) + ' ' + material['item_id']['name_en'] : '' }}
                                    </div>
                                  </router-link>
                                  <router-link v-if="material['item_id']['type'] == 'cards'" :to="{ name: 'card', params: { id: material['item_id']['slug'] }}" style="line-height: 1.2em; display: flex;">
                                    <div @click="$router.push({ name: 'card', params: { id: material['item_id']['slug'] }})" class="item-name" v-if="material['item_id'] != null && material['item_id']['name_en'] != 'Zeny'">
                                        {{ material['item_id'] != null ? material['item_id']['name_en'] : '' }} x {{ material['qty'] }}
                                    </div>
                                    <div @click="$router.push({ name: 'card', params: { id: material['item_id']['slug'] }})" class="item-name" v-else>
                                        {{ material['item_id'] != null ? formatNumber(material['qty']) + ' ' + material['item_id']['name_en'] : '' }}
                                    </div>
                                  </router-link>
                                </div>
                            </dt>
                        </dl>
                          <dl>
                            <dt>
                                <div class="item-info">
                                    <div class="image is-24x24">
                                        <img src="https://api.ragnarokmobile.net/uploads/items/100_img.png" alt="Zeny">
                                    </div>
                                  <router-link :to="{ name: 'item', params: { id: 'zeny' }}" style="line-height: 1.2em; display: flex;">
                                    <div @click="openItem('zeny')" class="item-name">
                                        {{ formatNumber(equipment.compose[0]['cost']) }} Zeny
                                    </div>
                                  </router-link>
                                </div>
                            </dt>
                        </dl>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                </v-expansion-panels>
              </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import { constant } from '../router/Constant';

export default {
  name: 'Item',
  components: {
    //
  },
  metaInfo() {
    let name_ = this.equipment.name_en;
    let title_ = name_ + ', ' + name_ + ' drop rate, ' + name_ + ' information and attributes, ' + name_ + ' source in Ragnarok Mobile'
    let url_ = 'https://www.ragnarokmobile.net/item/' + this.equipment.slug
    let keywords_ = title_ + ' ROM, ROM Exchange price, market finance, Ragnarok, online, RO, ragnarok mobile, ragnarok m, ragnarok eternal love, database, guide, job, quest, headgear quest, monster drops, item information, skill description, skill simulator, stat calculator, ragnarok tools, ragnarok mobile english'
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
        equipment: {},
        fullPage: false,
    }
  },
  methods: {
    formatNumber(num) {
        if (num != null) return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    getItem() {
      axios
        .get(constant.getItem+this.id)
        .then(response => (this.equipment = response.data))
        .catch(error => this.$router.replace({name: 'error'}))
        .finally(() => this.loading = false)
    },
    openItem(id) {
      axios
        .get(constant.getItem+id)
        .then(response => (this.equipment = response.data, this.id = this.equipment.id))
        .catch(error => this.$router.replace({name: 'error'}))
        .finally(() => this.loading = false)
    },
  },
  mounted () {
    this.getItem();
  }
}
</script>
<style lang="scss">

</style>
