<template>
  <div>    
    <div class="content" v-if="!loading">
        <div class="single headwear">
            <div class="single-row">
                <div class="image-container">
                    <div class="image">
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
                        </div>
                    </div>
                </div>
            </div>
            <div class="description" v-if="equipment.desc_en != null">
                <div class="inner-description">
                    {{ equipment.desc_en }}
                </div>
            </div>
            
            <div>
              <div class="sub-heading">
                  <h3>Attributes</h3>
              </div>
              <div class="attributes">
                <ul>
                  <li v-for="stat in equipment.item_from['stat']" :key="stat">{{ stat }}</li>
                  <li v-for="extra in equipment.item_from['stat_extra']" :key="extra">{{ extra }}</li>
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

            <div class="clear">
              <div class="attr clear">
                <dl v-if="equipment.compose_id != null && equipment.item_from != null && equipment.item_from['id'] != equipment.id">
                    <dt>Upgradable from</dt>
                    <dd class="single-row">
                      <div class="image" :class="equipment.item_from['type_name'] == 'Blueprint' ? 'blueprint' : ''">
                        <img :src="equipment.item_from['icon']" :alt="equipment.item_from['name_en']">
                      </div>
                      <router-link v-if="equipment.item_from['type_name'] != 'Blueprint'" :to="{ name: 'headwear', params: { id: equipment.item_from['id'] }}"> {{ equipment.item_from['name_en'] }} </router-link>
                      <router-link v-if="equipment.item_from['type_name'] == 'Blueprint'" :to="{ name: 'item', params: { id: equipment.item_from['id'] }}"> {{ equipment.item_from['name_en'] }} </router-link>
                      </dd>
                </dl>
                <dl v-if="equipment.compose_output_id != null && equipment.item_to != null">
                    <dt>Upgradable to</dt>
                    <dd class="single-row">              
                      <div class="image" :class="equipment.item_from['type_name'] == 'Blueprint' ? 'blueprint' : ''">
                        <img :src="equipment.item_to['icon']" alt="equipment.item_to['name_en']">
                      </div>
                      <router-link v-if="equipment.item_to['type_name'] != 'Blueprint'" :to="{ name: 'headwear', params: { id: equipment.item_to['id'] }}"> {{ equipment.item_to['name_en'] }} </router-link>
                      <router-link v-if="equipment.item_to['type_name'] == 'Blueprint'" :to="{ name: 'item', params: { id: equipment.item_to['id'] }}"> {{ equipment.item_to['name_en'] }} </router-link>
                      </dd>
                </dl>
              </div>
             </div>



            <div v-if="equipment['jobs'] != null">
              <div class="sub-heading clear">
                  <h3>Jobs</h3>
              </div>
              <div class="jobs">
                <ul class="pill">
                  <li v-for="job in equipment.jobs" :key="job">{{ job }}</li>
                </ul>
              </div>
            </div>

            <!-- <div class="sub-heading clear">
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
            </div> -->
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
        .get(constant.getHeawear+this.id)
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
