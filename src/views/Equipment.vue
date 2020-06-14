<template>
  <div>    
    <div class="content">
        <div class="single equipment">
            <div class="single-row">
                <div class="image-container">
                    <div class="image">
                        <img src="https://cdn.romwiki.net/uploads/items/elegant-doram-shoes-2190.png" alt="Icon">
                    </div>
                </div>
                <div class="title-container">
                    <div class="title-container-inner">
                        <div class="item-title">
                            <h2>Advanced Fox Grass [1]</h2>
                        </div>
                        <div class="item-title-info">
                            <div class="type">
                                Weapon - Staff
                            </div>
                        </div>
                        <div class="item-tags">
                            <div class="tag disable">
                                <i class="material-icons">check</i> Tradable
                            </div>
                            <div class="tag enable">
                                <i class="material-icons">close</i> Slotted
                            </div>
                            <div class="tag">
                                <i class="material-icons">close</i> Upgradable
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
            <div class="attributes">
              <ul>
                <li>Def +35</li>
                <li>Move Spd +9%</li>
                <li>Agi +6</li>
                <li>Max HP +500</li>
                <li>Advanced Sack Teddy Shoes + Cat's Blessing VI + Blueeve Cape IV: Strength + 5, Attack Spd + 5%</li>
                <li>Flamberge X + Advanced Sack Teddy Shoes IV + Undershirt VIII + Beast Heart VIII: +3% Atk, +3% Crit.Dmg, +5% Atk SPD, +10% Max HP</li>
              </ul>
            </div>

            <div class="clear"></div>
            <div class="attr">
              <dl>
                  <dt>Upgradable from</dt>
                  <dd class="single-row">
                    <div class="image">
                      <img src="https://cdn.romwiki.net/uploads/items/elegant-doram-shoes-2190.png" alt="Icon">
                    </div>
                    <a href="javascript:void(0)">Ninja Suit Sakura</a></dd>
              </dl>
              <dl>
                  <dt>Upgradable to</dt>
                  <dd class="single-row">              
                    <div class="image">
                      <img src="https://cdn.romwiki.net/uploads/items/elegant-doram-shoes-2190.png" alt="Icon">
                    </div>
                    <a href="javascript:void(0)">Ninja Clothes Cold Night Song</a></dd>
              </dl>
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
              <div class="monsters row no-gutters" @click="$router.push({name: 'monster', id: 1})">
                  <div class="col-sm-12 col-12">
                      <div class="monster-details">
                          <div class="monster-image mvp">
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
                <h3>Jobs</h3>
            </div>
            <div class="jobs">
              <ul class="pill">
                <li>Warlock</li>
                <li>Super novice</li>
                <li>Assassin</li>
                <li>Knight</li>
              </ul>
            </div>
            <div class="clear"></div>
            <div class="sub-heading">
                <h3>Set effect</h3>
            </div>
            <div class="set-effect">
              <v-expansion-panels accordion class="accordion" flat="true">
                <v-expansion-panel>
                  <v-expansion-panel-header>[Set 1] Ninja Suit Sakura + Calder Dagger</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>

              </v-expansion-panels>
            </div>

            <div class="clear"></div>
            <div class="sub-heading">
                <h3>Item tier</h3>
            </div>
            <div class="tiers">
              <v-expansion-panels accordion class="accordion" flat="true">
                <v-expansion-panel>
                  <v-expansion-panel-header>LUK +1, Def +13</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>STR +1, Def +13</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>

              </v-expansion-panels>
            </div>

            <div class="clear"></div>
            <div class="sub-heading">
                <h3>Upgrade</h3>
            </div>
            <div class="tiers">
              <v-expansion-panels accordion class="accordion" flat="true">
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
