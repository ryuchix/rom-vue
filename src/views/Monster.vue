<template>
  <div>    
    <div class="content">
        <div class="single monster">
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
                                <a href="javascript:void(0)">Water</a><span> · </span>
                                <a href="javascript:void(0)">Plant</a><span> · </span>
                                <a href="javascript:void(0)">Medium</a>
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
                <h3>Monster info</h3>
            </div>
            <div class="basic">
                <div class="attr">
                    <dl class="full">
                        <dt>Level</dt>
                        <dd>147</dd>
                    </dl>
                    <dl>
                        <dt>Type</dt>
                        <dd><a href="#">Mini</a></dd>
                    </dl>
                    <dl>
                        <dt>Race</dt>
                        <dd>Formless</dd>
                    </dl>
                    <dl>
                        <dt>Element</dt>
                        <dd>Ghost</dd>
                    </dl>
                    <dl>
                        <dt>Size</dt>
                        <dd>Large</dd>
                    </dl>
                    <dl>
                        <dt>Base exp</dt>
                        <dd>80,222</dd>
                    </dl>
                    <dl>
                        <dt>Job exp</dt>
                        <dd>40,222</dd>
                    </dl>
                </div>
            </div>
            <div class="clear"></div>
            <div class="sub-heading">
                <h3>Stats/Attributes</h3>
            </div>
            <div class="basic">
                <div class="attr">
                    <dl>
                        <dt>Str</dt>
                        <dd>84</dd>
                    </dl>
                    <dl style="border-top: none;">
                        <dt>Dex</dt>
                        <dd>44</dd>
                    </dl>
                    <dl>
                        <dt>Agi</dt>
                        <dd>55</dd>
                    </dl>
                    <dl>
                        <dt>Luk</dt>
                        <dd>22</dd>
                    </dl>
                    <dl>
                        <dt>Atk</dt>
                        <dd>2,204</dd>
                    </dl>
                    <dl>
                        <dt>Def</dt>
                        <dd>432</dd>
                    </dl>
                    <dl>
                        <dt>M.Atk</dt>
                        <dd>10,222</dd>
                    </dl>
                    <dl>
                        <dt>M.Def</dt>
                        <dd>445</dd>
                    </dl>
                    <dl>
                        <dt>Hit</dt>
                        <dd>53</dd>
                    </dl>
                    <dl>
                        <dt>Flee</dt>
                        <dd>222</dd>
                    </dl>
                    <dl>
                        <dt>Move Spd</dt>
                        <dd>222</dd>
                    </dl>
                    <dl>
                        <dt>ASPD</dt>
                        <dd>234</dd>
                    </dl>
                </div>
            </div>
            <div class="clear"></div>
            <div class="sub-heading">
                <h3>Drops</h3>
            </div>
            <div class="drops">
              <div class="attr">
                    <dl>
                        <dt>
                            <div class="item-info">
                                <div class="image is-24x24">
                                    <img src="https://cdn.romwiki.net/uploads//items/zeny-6.png" alt="Item Image">
                                </div>
                                <div class="item-name">
                                    Zeny
                                </div>
                                <span>&nbsp; x3100</span>
                            </div>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <div class="item-info">
                                <div class="image is-24x24">
                                    <img src="https://cdn.romwiki.net/uploads/items/honey-100.png" alt="Item Image">
                                </div>
                                <div class="item-name">
                                    Hill Wind Transformation Scroll
                                </div>
                                <span>&nbsp; x1</span>
                            </div>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <div class="item-info">
                                <div class="image is-24x24">
                                    <img src="https://cdn.romwiki.net/uploads/items/honey-100.png" alt="Item Image">
                                </div>
                                <div class="item-name">
                                    Honey
                                </div>
                                <span>&nbsp; x1</span>
                            </div>
                        </dt>
                    </dl>
                </div>
            </div>
            <div class="clear"></div>
            <div class="sub-heading">
                <h3>Location</h3>
            </div>
            <div class="location">
                <ul>
                    <li><a href="javascript:void(0)">Underwater cave</a></li>
                    <li><a href="javascript:void(0)">South Gate</a></li>
                    <li><a href="javascript:void(0)">Izlude</a></li>
                </ul>
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
