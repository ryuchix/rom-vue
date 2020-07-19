<template>
    <div class="content" v-if="!loading">
         <div class="equipments" v-for="equipment in equipments" :key="equipment.id">
           <router-link :to="{ name: 'equipment', params: { id: equipment.slug }}" >
            <div class="equipment-details clearfix">
                <div class="image">
                    <img :src="equipment.icon" :alt="equipment.name_en">
                </div>
            </div>
            </router-link>
            <div class="equipment-info">
              <router-link :to="{ name: 'equipment', params: { id: equipment.slug }}" >
                <div class="equipment-name">{{ equipment.name_en }}</div>
                </router-link>
                <div class="equipment-attr">
                    <div class="equipment-type_">
                        {{ equipment.type_name }}
                    </div>
                    <div class="equipment-stats">
                       <ul>
                           <li v-for="stat in equipment.stat" :key="stat">{{ stat }}</li>
                           <li v-for="o_stat in equipment.stat_extra" :key="o_stat">{{ o_stat }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            
         </div>
        <infinite-loading v-if="!loading" spinner="waveDots" @infinite="loadmore">
            <div slot="no-more">End</div>          
        </infinite-loading>
    </div>
    
</template>

<script>
import axios from 'axios'
import { constant } from '../router/Constant';
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'Equipments',
  components: {
    InfiniteLoading
  },
  metaInfo() {
    let title_ = "Ragnarok equipments database, equipments drop, item synthesis, item tiers for Ragnarok Mobile Eternal Love"
    let url_ = 'https://www.ragnarokmobile.net/equipments'
    let keywords_ = 'Ragnarok equipments database, equipments drop, item synthesis, item tiers, ROM, ROM Exchange price, market finance, Ragnarok, online, RO, ragnarok mobile, ragnarok m, ragnarok eternal love, database, guide, job, quest, headgear quest, monster drops, item information, skill description, skill simulator, stat calculator, ragnarok tools, ragnarok mobile english'
    let description_ = 'Browse the Ragnarok Mobile equipments, items, weapons, armors and other gears database. Your ultimate guide for Ragnarok Mobile Eternal Love. Your source for Ragnarok M Monsters, Cards, Quests, Database, Headwears, Blueprints, Items, Market Prices, Exchange Price List and Stats and Skills calculator. ROM'

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
      fullPage: true,
      url: constant.url,
      loading: true,
      equipments: [],
      page: 2,
    }
  },
  methods: {
    getEquipments() {
      axios
        .get(constant.getEquipments)
        .then(response => (this.equipments = response.data.data))
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
    },
    loadmore($state) {
      let vm = this;
      axios
        .get(constant.getEquipments+'?page='+vm.page)
        .then(response => {
          response.data.data.map(function(value) {
              vm.equipments.push(value);
          });
          vm.page += 1;
          $state.loaded();
        })
        .catch(error => console.log(error))
        .finally(() => console.log())

    },
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  },
  mounted () {
      this.getEquipments();
  },
    computed: {
        nonNullItems: function() {
            return this.items.filter(function(item) {
            return item !== null;
            });
        }
    }
}
</script>
<style lang="scss">

</style>
