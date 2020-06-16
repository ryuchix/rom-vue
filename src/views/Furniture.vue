<template>
  <div>    
    <div class="content">
        <div class="single furniture">
            <div class="single-row">
                <div class="image-container">
                    <div class="image">
                        <img src="https://www.romcodex.com/icons/item/item_38024.png" alt="Icon">
                    </div>
                </div>
                <div class="title-container">
                    <div class="title-container-inner">
                        <div class="item-title">
                            <h2>Adventurer’s Map</h2>
                        </div>
                        <div class="item-title-info">
                            <div class="type">
                                Back
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="description">
                <div class="inner-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quibusdam voluptate. Odio fugit ullam reiciendis laboriosam! Aspernatur ipsum quod asperiores. Animi corrupti distinctio reprehenderit officia pariatur maiores ducimus iure sed.
                </div>
            </div>
            <div class="sub-heading">
                <h3>Attributes</h3>
            </div>
            <div class="card-type__">
                Unlock
            </div>
            <div class="card-stats unlock">
                Max HP +30, M.Def +1.5
            </div>
            <div class="card-type__">
                Rating
            </div>
            <div class="card-stats deposit">
                60
            </div> 
            <div class="card-type__">
                Requirements
            </div>
            <div class="card-stats deposit">
                Reach Home Prestige Lv.13 to Unlock
            </div>            

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
//import axios from 'axios'

export default {
  name: 'Home',
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
