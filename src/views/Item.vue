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
                        <div class="item-title">
                            <h2>{{ equipment.name_en }}</h2>
                        </div>
                        <div class="item-title-info">
                            <div class="type">
                                {{ equipment.type_name }} - {{ equipment.type_name == 'Blueprint' ? equipment.stat_type : '' }}
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
                      <router-link :to="{ name: 'headwear', params: { id: equipment.item_from['id'] }}"> {{ equipment.item_from['name_en'] }} </router-link>
                      </dd>
                </dl>
                <dl v-if="equipment.compose_output_id != null && equipment.item_to != null">
                    <dt>Upgradable to</dt>
                    <dd class="single-row">              
                      <div class="image">
                        <img :src="equipment.item_to['icon']" alt="equipment.item_to['name_en']">
                      </div>
                      <router-link :to="{ name: 'headwear', params: { id: equipment.item_to['id'] }}"> {{ equipment.item_to['name_en'] }} </router-link>
                      </dd>
                </dl>
              </div>
             </div>

            <div class="sub-heading clear">
                <h3>Dropped by</h3>
            </div>
            <div class="dropped">
              <div v-for="monster in equipment.monsters" :key="monster.id" class="monsters row no-gutters">
                  <div class="col-sm-12 col-12">
                      <div class="monster-details" @click="$router.push({ name: 'monster', params: {id: monster.id} })">
                          <div class="monster-image" :class="monster.star != 'star' ? monster.type : 'star'">
                              <img :src="monster.icon" :alt="monster.name_en">
                          </div>
                      </div>
                      <div class="monster-info" @click="$router.push({ name: 'monster', params: {id: monster.id} })">
                          <div class="monster-name">{{ monster.name_en }}</div>
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
                    <v-expansion-panel-header>LUK +1, Def +13</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
  },
  mounted () {
    this.getItem();
  }
}
</script>
<style lang="scss">

</style>
