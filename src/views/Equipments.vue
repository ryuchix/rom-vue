<template>
    <div class="content" v-if="!loading">
         <div class="equipments" v-for="equipment in equipments" :key="equipment.id">
           <router-link :to="{ name: 'equipment', params: { id: equipment.id }}" >
            <div class="equipment-details clearfix">
                <div class="image" @click="$router.push('equipment/'+equipment.id)">
                    <img :src="equipment.icon" :alt="equipment.name_en">
                </div>
            </div>
            </router-link>
            <div class="equipment-info">
              <router-link :to="{ name: 'equipment', params: { id: equipment.id }}" >
                <div class="equipment-name" @click="$router.push('equipment/'+equipment.id)">{{ equipment.name_en }}</div>
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
