<template>
  <div>
    <div class="content">
         <div class="equipments">
            <div class="equipment-details clearfix">
                <div class="image">
                    <img src="https://cdn.romwiki.net/uploads/items/elegant-doram-shoes-2190.png" alt="Icon">
                </div>
            </div>
            <div class="equipment-info">
                <div class="equipment-name">Boitata</div>
                <div class="equipment-attr">
                    <div class="equipment-type_">
                        Armor
                    </div>
                    <div class="equipment-stats">
                       <ul>
                           <li>Atk +645</li>
                           <li>STR +10, INT +8</li>
                           <li>Max HP +1000</li>
                           <li>Increase the basic rate of equipment destruction caused by alchemy using Acid Terror, Acid Demonstration, Improved Acid Demonstration</li>
                       </ul>
                    </div>
                </div>
            </div>
         </div>

         <div class="equipments">
            <div class="equipment-details clearfix" @click="$router.push('equipment/2')">
                <div class="image">
                    <img src="https://cdn.romwiki.net/uploads/items/elegant-doram-shoes-2190.png" alt="Icon">
                </div>
            </div>
            <div class="equipment-info">
                <div class="equipment-name" @click="$router.push('equipment/2')">Boitata</div>
                <div class="equipment-attr">
                    <div class="equipment-type_">
                        Armor
                    </div>
                    <div class="equipment-stats">
                       <ul>
                           <li>Atk +645</li>
                           <li>STR +10, INT +8</li>
                           <li>Max HP +1000</li>
                           <li>Increase the basic rate of equipment destruction caused by alchemy using Acid Terror, Acid Demonstration, Improved Acid Demonstration</li>
                       </ul>
                    </div>
                </div>
            </div>
         </div>

         <div class="equipments">
            <div class="equipment-details clearfix">
                <div class="image">
                    <img src="https://cdn.romwiki.net/uploads/items/elegant-doram-shoes-2190.png" alt="Icon">
                </div>
            </div>
            <div class="equipment-info">
                <div class="equipment-name">Boitata</div>
                <div class="equipment-attr">
                    <div class="equipment-type_">
                        Armor
                    </div>
                    <div class="equipment-stats">
                       <ul>
                           <li>Atk +645</li>
                           <li>STR +10, INT +8</li>
                           <li>Max HP +1000</li>
                           <li>Increase the basic rate of equipment destruction caused by alchemy using Acid Terror, Acid Demonstration, Improved Acid Demonstration</li>
                       </ul>
                    </div>
                </div>
            </div>
         </div>


    </div>
  </div>
</template>

<script>
//import axios from 'axios'
export default {
  name: 'Equipments',
  components: {
    //
  },
  data() {
    return {
      item: {},
      loading: false,
    }
  },
  methods: {
    //
  },
  mounted () {
    // axios
    //   .get('https://www.romcodex.com/api/item/52162')
    //   .then(response => (this.item = response.data))
    //   .catch(error => console.log(error))
    //   .finally(() => this.loading = false)
  }
}
</script>
<style lang="scss">

</style>
