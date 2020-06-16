<template>
  <div>
    <div class="content">
         <div class="cards">
            <div class="card-details clearfix" @click="$router.push('/card/1')">
                <div class="image green">
                    <img src="https://www.romcodex.com/pic/cards/card_10084.jpg" alt="Icon">
                </div>
            </div>
            <div class="card-info">
                <div class="card-name" @click="$router.push('/card/1')">2nd Anniversary Card</div>
                <div class="card-attr">
                    <div class="card-type_">
                        Armor Card
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
