<template>
    <div class="content" v-if="!loading">
        <div class="single equipment">
            <div class="single-row">
                <div class="image-container">
                    <div class="image">
                        <img :src="equipment.icon" :alt="equipment.name_en">
                    </div>
                </div>
                <div class="title-container">
                    <div class="title-container-inner">
                        <div class="item-title mt-n1">
                            <h2>{{ equipment.name_en }}</h2>
                        </div>
                        <div class="item-title-info">
                            <div class="type">
                                {{ equipment.type_name }}
                            </div>
                        </div>
                        <div class="item-tags">
                            <div class="tag disable" v-if="equipment.tradable == false">
                                <i class="material-icons">close</i> Trade
                            </div>
                            <div class="tag enable" v-if="equipment.tradable == true">
                                <i class="material-icons">check</i> Trade
                            </div>
                            <div v-if="equipment.slot == false" class="tag disable" >
                                <i class="material-icons">close</i> Slot
                            </div>
                            <div v-if="equipment.slot == true" class="tag enable" >
                                <i class="material-icons">check</i> Slot
                            </div>
                            <div class="tag disable" v-if="equipment.tier_list == null">
                                <i class="material-icons">close</i> Upgrade
                            </div>
                            <div class="tag enable" v-if="equipment.tier_list == 1">
                                <i class="material-icons">check</i> Upgrade
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
            <div class="sub-heading">
                <h3>Attributes</h3>
            </div>
            <div class="attributes">
              <ul>
                <li v-for="stat in equipment.stat" :key="stat">{{ stat }}</li>
                <li v-for="extra in equipment.stat_extra" :key="extra">{{ extra }}</li>
              </ul>
            </div>

            <div class="attr clear" v-if="equipment.before != null || equipment.after != null && equipment.after['id'] != equipment.id">
              <dl v-if="equipment.before != null">
                  <dt>Upgradable from</dt>
                  <dd class="single-row">
                    <div class="image">
                      <img :src="equipment.before['icon']" :alt="equipment.before['name_en']">
                    </div>
                    <router-link :to="{ name: 'equipment', params: { id: equipment.before['slug'] }}">{{ equipment.before['name_en'] }}</router-link></dd>
              </dl>
              <dl v-if="equipment.after != null && equipment.after['id'] != equipment.id">
                  <dt>Upgradable to</dt>
                  <dd class="single-row">              
                    <div class="image">
                      <img :src="equipment.after['icon']" :alt="equipment.after['name_en']">
                    </div>
                    <router-link :to="{ name: 'equipment', params: { id: equipment.after['slug'] }}">{{ equipment.after['name_en'] }}</router-link></dd>
              </dl>
              </div>

            <div v-if="equipment['monsters'] != null && equipment['monsters'].length != 0">
              <div class="sub-heading clear">
                  <h3>Dropped by</h3>
              </div>
              <div class="dropped">
                <div v-for="monster in equipment.monsters" :key="monster.id" class="monsters row no-gutters">
                    <div class="col-sm-12 col-12">
                      <div style="line-height: 1.2em; display: flex;">
                        <div class="monster-details">
                            <div class="monster-image" :class="monster.star != 'star' ? monster.type : 'star'">
                                <img :src="monster.icon" :alt="monster.name_en">
                            </div>
                        </div>
                      </div>
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
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div v-if="equipment['jobs'] != null && equipment['jobs'].length">
              <div class="sub-heading clear">
                  <h3>Jobs</h3>
              </div>
              <div class="jobs">
                <ul class="pill">
                  <li v-for="job in equipment.jobs" :key="job">{{ job }}</li>
                </ul>
              </div>
            </div>
             <div v-if="equipment['sets'] != null && equipment['sets'].length != 0">
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
                        <div style="display: flex; margin-left: -10px;">
                          <div class="col" v-for="item in set['items']" :key="item['id']">
                              <div class="item-info">
                                  <div class="image is-24x24">
                                      <img :src="item['icon'] != null ? item['icon'] : '' " :alt="item['name_en'] != null ? item['name_en'] : ''">
                                  </div>
                                  <router-link v-if="item.type == 'equips'" :to="{ name: 'equipment', params: { id: item.slug }}" style="line-height: 1.2em; display: flex;">
                                      <div class="item-name">
                                          {{ item['name_en'] }}
                                      </div>
                                  </router-link>
                                  <router-link v-if="item.type == 'headwears'" :to="{ name: 'headwear', params: { id: item.slug }}" style="line-height: 1.2em; display: flex;">
                                      <div class="item-name">
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
            <div v-if="equipment.tier_list == 1">
                <div class="clear"></div>
                <div class="sub-heading">
                    <h3>Item tier</h3>
                </div>
                <div class="tiers">
                  <v-expansion-panels accordion class="accordion" flat="flat">
                    <v-expansion-panel v-for="(tier, k) in equipment.tiers" :key="tier.id">
                      <v-expansion-panel-header>
                        <div class="col-3">
                          Tier {{ convertToRoman(k+1) }}  
                        </div>
                        <div class="col-9">
                          {{ tier.tier_buff }}
                        </div>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <div class="tier_materials">
                            <dl v-for="material in tier['materials']" :key="material.id">
                                <dt v-if="material.tier_item_id != null">
                                    <div class="item-info">
                                        <div class="image is-24x24">
                                            <img :src="material['tier_item_id'] != null ? material['tier_item_id']['icon'] : '' " :alt="material['tier_item_id'] != null ? material['tier_item_id']['name'] : ''">
                                        </div>
                                      <router-link v-if="material['tier_item_id']['type'] == 'items'" :to="{ name: 'item', params: { id: material['tier_item_id']['slug'] }}" style="line-height: 1.2em; display: flex;">
                                        <div class="item-name" v-if="material['tier_item_id'] != null && material['tier_item_id']['name_en'] != 'Zeny'">
                                            {{ material['tier_item_id'] != null ? material['tier_item_id']['name_en'] : '' }} x {{ material['qty'] }}
                                        </div>
                                        <div class="item-name" v-else>
                                            {{ material['tier_item_id'] != null ? formatNumber(material['qty']) + ' ' + material['tier_item_id']['name_en'] : '' }}
                                        </div>
                                      </router-link>
                                      <router-link v-if="material['tier_item_id']['type'] == 'equips'" :to="{ name: 'equipment', params: { id: material['tier_item_id']['slug'] }}" style="line-height: 1.2em; display: flex;">
                                        <div v-if="material['tier_item_id'] != null && material['tier_item_id']['name_en'] != 'Zeny'">
                                            {{ material['tier_item_id'] != null ? material['tier_item_id']['name_en'] : '' }} x {{ material['qty'] }}
                                        </div>
                                        <div v-else>
                                            {{ material['tier_item_id'] != null ? formatNumber(material['qty']) + ' ' + material['tier_item_id']['name_en'] : '' }}
                                        </div>
                                      </router-link>
                                      <router-link v-if="material['tier_item_id']['type'] == 'cards'" :to="{ name: 'card', params: { id: material['tier_item_id']['slug'] }}" style="line-height: 1.2em; display: flex;">
                                        <div class="item-name" v-if="material['tier_item_id'] != null && material['tier_item_id']['name_en'] != 'Zeny'">
                                            {{ material['tier_item_id'] != null ? material['tier_item_id']['name_en'] : '' }} x {{ material['qty'] }}
                                        </div>
                                        <div class="item-name" v-else>
                                            {{ material['tier_item_id'] != null ? formatNumber(material['qty']) + ' ' + material['tier_item_id']['name_en'] : '' }}
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

            <div v-if="equipment.synth != null && equipment.synthesis_recipe == 1">
              <div class="sub-heading clear">
                  <h3>Synthesis</h3>
              </div>
              <div class="tiers">
                <v-expansion-panels accordion class="accordion" flat="flat">
                  <v-expansion-panel v-for="synth in equipment.synth" :key="synth.id">
                    <v-expansion-panel-header>
                      <div class="attr" style="border: 0; margin-top: 0px;">
                      <dl>
                        <dd class="single-row" style="padding-left: 10px; font-size: 1em;">
                          <div class="image">
                            <img :src="synth['item_output']['icon']" :alt="synth['item_output']['name_en']">
                          </div>
                          {{ synth['item_output']['name_en'] }}
                        </dd>
                      </dl>
                      </div></v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div v-for="equip in synth.equipments" :key="equip.id">
                        <div class="item-info">
                            <div class="image is-24x24">
                                <img :src="equip.item_id['icon'] != null ? equip.item_id['icon'] : '' " :alt="equip.item_id['name_en'] != null ? equip.item_id['name_en'] : ''">
                            </div>
                            <router-link :to="{ name: 'equipment', params: { id: equip.item_id['slug'] }}" style="line-height: 1.2em; display: flex;">
                                <div class="item-name">
                                    {{ equip.item_id['name_en'] }} {{ equip.tier == '0' ? '' : convertToRoman(equip.tier) }}
                                </div>
                            </router-link>
                        </div>
                        
                      </div>
                      <div v-for="equip in synth.materials" :key="equip.id">
                        <div class="item-info">
                            <div class="image is-24x24">
                                <img :src="equip.item_id['icon'] != null ? equip.item_id['icon'] : '' " :alt="equip.item_id['name_en'] != null ? equip.item_id['name_en'] : ''">
                            </div>
                            <router-link :to="{ name: 'item', params: { id: equip.item_id['slug'] }}" style="line-height: 1.2em; display: flex;">
                                <div class="item-name">
                                    {{ equip.item_id['name_en'] }} x {{ equip.quantity }}
                                </div>
                            </router-link>
                        </div>
                      </div>
                        <div class="item-info">
                            <div class="image is-24x24">
                                <img src="https://api.ragnarokmobile.net/uploads/items/100_img.png" alt="Zeny">
                            </div>
                            <router-link :to="{ name: 'item', params: { id: 'zeny' }}" style="line-height: 1.2em; display: flex;">
                                <div class="item-name">
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
</template>

<script>
import axios from 'axios'
import { constant } from '../router/Constant';

export default {
  name: 'Equipment',
  components: {
    //
  },
  metaInfo() {
    let name_ = this.equipment.name_en;
    let title_ = name_ + ', ' + name_ + ' crafting requirements, synthesis, tiers, ' + name_ + ' information and attributes, where to get ' + name_ + ' in Ragnarok Mobile'
    let url_ = 'https://www.ragnarokmobile.net/equipment/' + this.equipment.slug
    let keywords_ = title_ + ', Ragnarok equipments database, equipment drop, ROM, ROM Exchange price, market finance, Ragnarok, online, RO, ragnarok mobile, ragnarok m, ragnarok eternal love, database, guide, job, quest, headgear quest, monster drops, item information, skill description, skill simulator, stat calculator, ragnarok tools, ragnarok mobile english'
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
        romanMatrix: [
          [10, 'X'],
          [9, 'IX'],
          [5, 'V'],
          [4, 'IV'],
          [1, 'I']
        ],
    }
  },
  methods: {
    getEquipment() {
      axios
        .get(constant.getEquipment+this.id)
        .then(response => (
          this.equipment = response.data
        ))
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
    },
    formatNumber(num) {
        if (num != null) return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    convertToRoman(num) {
      if (num === 0) {
        return '';
      }
      for (var i = 0; i < this.romanMatrix.length; i++) {
        if (num >= this.romanMatrix[i][0]) {
          return this.romanMatrix[i][1] + this.convertToRoman(num - this.romanMatrix[i][0]);
        }
      }
      return num;
    },
    openItem(id) {
      axios
        .get(constant.getEquipment+id)
        .then(response => (this.equipment = response.data, this.id = this.equipment.id))
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
    },
  },
  mounted () {
    this.getEquipment();
   // document.addEventListener("backbutton", this.$router.go(-1), false);
  }
}
</script>
<style lang="scss">

</style>
