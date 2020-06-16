<template>
  <div>
    <div class="content">
         <div class="headwears">
            <div class="card-details clearfix" @click="$router.push('/headwear/1')">
                <div class="image green">
                    <img src="https://www.romcodex.com/icons/item/item_3001401.png" alt="Icon">
                </div>
            </div>
            <div class="card-info">
                <div class="card-name" @click="$router.push('/card/1')">Beast Mask</div>
                <div class="card-attr">
                    <div class="card-type_">
                        Tail
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
                       MDef +2, Max HP +30
                    </div>
                    <div class="card-type__">
                        Deposit
                    </div>
                    <div class="card-stats deposit">
                       Atk +3, MAX HP +30
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
