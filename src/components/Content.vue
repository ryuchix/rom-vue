<template>
    <div class="content">
        <div class="card_ shadow border-0 mb-3">
            <div class="card-body">
                <div class="row">
                    <div class="monsters row no-gutters" @click="$router.push('monster/1')">
                        <div class="col-sm-12 col-12">
                            <div class="monster-details">
                                <div class="monster-image">
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
                                    <div class="monster-stats">
                                        Lv: <strong>85</strong> <span> · </span> HP: <strong>175,395,500</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card_ shadow border-0 mb-3">
            <div class="card-body">
                <div class="row">
                    <div class="monsters row no-gutters" @click="$router.push('monster/1')">
                        <div class="col-sm-12 col-12">
                            <div class="monster-details">
                                <div class="monster-image">
                                    <img src="https://www.romcodex.com/icons/face/kobold_r.png" alt="Icon">
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
                                    <div class="monster-stats">
                                        Lv: <strong>85</strong> <span> · </span> HP: <strong>175,395,500</strong>
                                    </div>
                                </div>
                            </div>
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
  name: 'Content',
  components: {
    //
  },
  data() {
    return {
        loading: false,
        items: [
            {name: 'Arial', id: 1}, 
            {name: 'Arial', id: 1}, 
            {name: 'Arial', id: 1}],

    }
  },
  methods: {
    //
  },
}
</script>
<style lang="scss">
    //
</style>
