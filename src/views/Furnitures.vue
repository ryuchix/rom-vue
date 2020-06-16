<template>
  <div>
    <div class="content furnitures">
         <div class="furnitures_">
            <div class="card-details clearfix" @click="$router.push('/furniture/1')">
                <div class="image green">
                    <img src="https://www.romcodex.com/icons/item/item_3001401.png" alt="Icon">
                </div>
            </div>
            <div class="card-info">
                <div class="card-name" @click="$router.push('/furniture/1')">Beast Mask</div>
                <div class="card-attr">
                    <div class="card-type_">
                        Artwork
                    </div>
                </div>
            </div>
         </div>
        <div class="unlocks">
          <div class="unlocked col col-4">
              Unlock
          </div>
          <div class="unlocked-stats col col-8">
              MDef +2, Max HP +30
          </div>
        </div>
        <div class="unlocks">
          <div class="unlocked col col-4">
              Rating
          </div>
          <div class="unlocked-stats col col-8">
              40
          </div>
        </div>
        <div class="requirements">
          <div class="unlocked  col col-4">
              Requirements
          </div>
          <div class="unlocked-stats col col-8">
              Reach Home Prestige Lv.16 to Unlock
          </div>
        </div>

    </div>
  </div>
</template>

<script>
//import axios from 'axios'
export default {
  name: 'Cards',
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
