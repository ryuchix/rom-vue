<template>
  <div>
    <div class="content foods">
         <div class="foods_">
            <div class="card-details clearfix">
                <div class="image green">
                    <img src="https://www.romcodex.com/icons/item/item_12301.png" alt="Icon">
                </div>
            </div>
            <div class="card-info">
                <div class="card-name">Satisfied Feast</div>
                <div class="card-attr">
                    <div class="card-type_">
                        Adventure BBQ
                    </div>
                    <div class="stars is_4"></div>
                </div>
            </div>
         </div>
        
        <div class="unlocks">
          <div class="unlocked col col-4">
              Effect
          </div>
          <div class="unlocked-stats col col-8">
              MDef +2, Max HP +30
          </div>
        </div>
        <div class="unlocks">
          <div class="unlocked col col-4">
              Cook
          </div>
          <div class="unlocked-stats col col-8">
              Max HP +30
          </div>
        </div>
        <div class="requirements">
          <div class="unlocked  col col-4">
              Taste
          </div>
          <div class="unlocked-stats col col-8">
              Max HP +30
          </div>
        </div>
        <div class="ingredients">
          <div class="unlocked  col col-4">
              Ingredients
          </div>
          <div class="unlocked-stats col col-8">
              <div>
                <img src="https://www.romcodex.com/icons/item/item_12301.png" alt="">
                <img src="https://www.romcodex.com/icons/item/item_12301.png" alt="">
                <img src="https://www.romcodex.com/icons/item/item_12301.png" alt="">
                <img src="https://www.romcodex.com/icons/item/item_12301.png" alt="">
                <img src="https://www.romcodex.com/icons/item/item_12301.png" alt="">
              </div>
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
