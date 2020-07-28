<template>
  <div>
    <div class="content" v-if="!loading">
      <div class="single headwear">
        <div class="single-row">
          <div class="image-container">
            <div class="image">
              <img :src="equipment.icon" :alt="equipment.name_en" />
            </div>
          </div>
          <div class="title-container">
            <div class="title-container-inner">
              <div class="item-title mt-n1 mb-1">
                <h2>{{ equipment.name_en }}</h2>
              </div>
              <div class="item-title-info">
                <div class="type">{{ equipment.type_name }}</div>
              </div>
              <div class="item-tags">
                  <div class="tag" :class="equipment.tradable ? 'enable' : 'disable'">
                      <i class="material-icons">{{ equipment.tradable ? 'check' : 'close' }}</i> Trade
                  </div>
                  <div class="tag" :class="equipment.compose_recipe != 0 ? 'enable' : 'disable'">
                      <i class="material-icons">{{ equipment.compose_recipe != 0 ? 'check' : 'close' }}</i> Craft
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="description" v-if="equipment.desc_en != null">
          <div class="inner-description">{{ equipment.desc_en }}</div>
        </div>

        <div>
          <div v-if="equipment.unlock_effect != null || equipment.deposit_effect != null">
            <div v-if="equipment.unlock_effect != null">
              <div class="card-type__">Unlock</div>
              <div class="card-stats unlock">{{ equipment.unlock_effect }}</div>
            </div>
            <div v-if="equipment.score != null">
              <div class="card-type__">Score</div>
              <div class="card-stats deposit">{{ equipment.score }}</div>
            </div>
            <div v-if="equipment.requirements != null">
              <div class="card-type__">Requirement</div>
              <div class="card-stats deposit">{{ equipment.requirements }}</div>
            </div>
          </div>
        </div>

        <div class="clear">
          <div class="attr clear">
            <dl
              v-if="equipment.compose_id != null && equipment.item_from != null && equipment.item_from['id'] != equipment.id">
              <dt>Upgradable from</dt>
              <dd class="single-row">
                <div
                  class="image"
                  :class="equipment.item_from['type_name'] == 'Furniture Blueprint' ? 'fblueprint' : ''" >
                  <img :src="equipment.item_from['icon']" :alt="equipment.item_from['name_en']" />
                </div>
                <router-link
                  v-if="equipment.item_from['type_name'] != 'Furniture Blueprint'"
                  :to="{ name: 'furniture', params: { id: equipment.item_from['slug'] }}">{{ equipment.item_from['name_en'] }}</router-link>
                <router-link
                  v-if="equipment.item_from['type_name'] == 'Furniture Blueprint'"
                  :to="{ name: 'item', params: { id: equipment.item_from['slug'] }}">{{ equipment.item_from['name_en'] }}</router-link>
              </dd>
            </dl>
            <dl v-if="equipment.compose_output_id != null && equipment.item_to != null">
              <dt>Upgradable to</dt>
              <dd class="single-row">
                <div
                  class="image"
                  :class="equipment.item_from['type_name'] == 'Furniture Blueprint' ? 'fblueprint' : ''">
                  <img :src="equipment.item_to['icon']" alt="equipment.item_to['name_en']" />
                </div>
                <router-link
                  v-if="equipment.item_to['type_name'] != 'Furniture Blueprint'"
                  :to="{ name: 'furniture', params: { id: equipment.item_to['slug'] }}">{{ equipment.item_to['name_en'] }}</router-link>
                <router-link
                  v-if="equipment.item_to['type_name'] == 'Furniture Blueprint'"
                  :to="{ name: 'item', params: { id: equipment.item_to['slug'] }}">{{ equipment.item_to['name_en'] }}</router-link>
              </dd>
            </dl>
          </div>
        </div>

        <div v-if="equipment.jobs != null && equipment.jobs.length > 0">
          <div class="sub-heading clear">
            <h3>Jobs</h3>
          </div>
          <div class="jobs">
            <ul class="pill">
              <li v-for="job in equipment.jobs" :key="job">{{ job }}</li>
            </ul>
          </div>
        </div>

        <div v-if="equipment.compose != null && equipment.compose_recipe == 1">
          <div class="sub-heading clear">
              <h3>Craft</h3>
          </div>
          <div class="tiers">
            <v-expansion-panels accordion class="accordion" flat="flat">
              <v-expansion-panel v-for="synth in equipment.compose" :key="synth.id">
                <v-expansion-panel-header>
                  <div class="attr" style="border: 0; margin-top: 0px;">
                  <dl>
                    <dd class="single-row" style="padding-left: 10px; font-size: 1em;">
                      <div class="image">
                        <img :src="equipment.icon" :alt="synth['item_output']">
                      </div>
                      {{ synth['item_output'] }}
                    </dd>
                  </dl>
                  </div></v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div v-for="equip in synth.materials" :key="equip.id">
                    <div class="item-info">
                        <div class="image is-24x24" :class="equip.item_id['type_name'] == 'Furniture Blueprint' ? 'fblueprint' : ''">
                            <img :src="equip.item_id['icon'] != null ? equip.item_id['icon'] : '' " :alt="equip.item_id['name_en'] != null ? equip.item_id['name_en'] : ''">
                        </div>
                        <router-link v-if="equip.item_id['type'] != 'headwears'" :to="{ name: 'item', params: { id: equip.item_id['slug'] }}" style="line-height: 1.2em; display: flex;">
                            <div class="item-name" @click="$router.push({name: 'item', params: { id: equip.item_id['slug'] }})">
                                {{ equip.item_id['name_en'] }} x {{ equip.qty }}
                            </div>
                        </router-link>
                        <router-link v-if="equip.item_id['type'] == 'headwears'" :to="{ name: 'headwear', params: { id: equip.item_id['slug'] }}" style="line-height: 1.2em; display: flex;">
                            <div class="item-name" @click="$router.push({name: 'headwear', params: { id: equip.item_id['slug'] }})">
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
  name: "Item",
  components: {
    //
  },
  metaInfo() {
    let name_ = this.equipment.name_en;
    let title_ = name_ + ', ' + name_ + ' crafting requirements, ' + name_ + ' information and attributes, where to get ' + name_ + ' in Ragnarok Mobile'
    let url_ = 'https://www.ragnarokmobile.net/headwear/' + this.equipment.slug
    let keywords_ = title_ + ', Ragnarok headwear database, headwear drop, ROM, ROM Exchange price, market finance, Ragnarok, online, RO, ragnarok mobile, ragnarok m, ragnarok eternal love, database, guide, job, quest, headgear quest, monster drops, item information, skill description, skill simulator, stat calculator, ragnarok tools, ragnarok mobile english'
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
      equipment: [],
      fullPage: false
    };
  },
  methods: {
    formatNumber(num) {
      if (num != null)
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    getItem() {
      axios
        .get(constant.getFurniture + this.id)
        .then(response => (this.equipment = response.data))
        .catch(error => this.$router.replace({ name: "error" }))
        .finally(() => (this.loading = false));
    }
  },
  mounted() {
    this.getItem();
  }
};
</script>
<style lang="scss">
</style>
