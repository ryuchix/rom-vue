<template>
  <div>    
    <div class="content">
        <div class="single card">
            <div class="single-row">
                <div class="image-container">
                    <div class="image">
                        <img src="https://www.romcodex.com/pic/cards/card_23122.jpg" alt="Icon">
                    </div>
                </div>
                <div class="title-container">
                    <div class="title-container-inner">
                        <div class="item-title">
                            <h2>Abysmal Knight Card</h2>
                        </div>
                        <div class="item-title-info">
                            <div class="type">
                                Weapon Card
                            </div>
                        </div>
                        <div class="item-tags">
                            <div class="tag disable">
                                <i class="material-icons">check</i> Trade
                            </div>
                            <div class="tag enable">
                                <i class="material-icons">close</i> Craft
                            </div>
                        </div>
                        <div class="item-tags">
                            <div class="tag disable">
                                Green
                            </div>
                            <div class="tag enable">
                                 Normal
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sub-heading">
                <h3>Attributes</h3>
            </div>
            <div class="card-stats">
                <ul>
                    <li>Atk +645</li>
                    <li>STR +10, INT +8</li>
                    <li>Max HP +1000</li>
                </ul>
            </div>
            <div class="card-type__">
                Unlock
            </div>
            <div class="card-stats unlock">
                Insight: Ignores monsters' 50% multiplied Def (active when Dmg Increase to big monsters is over 50%)
            </div>
            <div class="card-type__">
                Deposit
            </div>
            <div class="card-stats deposit">
                Insight: Ignores monsters' 50% multiplied Def (active when Dmg Increase to big monsters is over 50%)
            </div>

            <div class="sub-heading clear">
                <h3>Dropped by</h3>
            </div>
            <div class="dropped">
              <div class="monsters row no-gutters" @click="$router.push({name: 'monster', id: 1})">
                  <div class="col-sm-12 col-12">
                      <div class="monster-details">
                          <div class="monster-image undead">
                              <img src="https://www.romcodex.com/icons/face/panda_poring_1.png" alt="Icon">
                          </div>
                      </div>
                      <div class="monster-info">
                          <div class="monster-name">Boitata</div>
                          <div class="monster-attr">
                              <div class="monster-stats_">
                                  Fire<span> · </span>
                                  Brute<span> · </span>
                                  Large
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
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
