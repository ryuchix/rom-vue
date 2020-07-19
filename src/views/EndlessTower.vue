<template>
  <div id="privacy">
    <v-app>
      <div class="content">
        <h1 class="mb-3">Endless Tower</h1>
        <p>Endless Tower resets every Monday at 6PM GMT+8 on SEA and Global Server. Selected floors consists of MVPS and Mini bosses and they are based on the last digit of the channel you are in. Example, if you are in PH25, all channels that ends in 5 like 5, 15, 25, 35 etc will have the same monsters.</p>
        <img :src="result.et" alt="Endless Tower MVP">
        <img :src="result.etmini" alt="Endless Tower Mini">
        <br><br>
        <h1 class="mb-3">Valhalla Ruins Maps</h1>
        <p>This page is updated weekly. Valhalla Ruins or Guild Ruins VR/GR is a dungeon quest for all members of the guild. The ruins consist of 5 doors, by default the portals are closed and you need Silver Medal to open it. Your need to reach a certain level to enter the dungeon, level 40, 60, 80, 100 and 120. Each door needs 40 silver medals. Unlike Endless Tower the VR/GR maps are the same across all Guilds in all channels.</p>
        <img :src="result.vr" alt="Valhalla Ruins Maps">
        <br><br>
        <p>Images are not ours. Credits to orignal uploader. Thanks</p>
      </div>
    </v-app>
  </div>
</template>
<script>
import axios from "axios";
import { constant } from "../router/Constant";

export default {
  name: "EndlessTower",
  metaInfo() {
    let title_ = "Endless Tower | Ragnarok Mobile - Guide, Quest, Build and Database for Ragnarok M Eternal Love"
    let url_ = 'https://www.ragnarokmobile.net/endless-tower'
    let keywords_ = 'ragnarok mobile privacy policy, ROM, ROM Exchange price, market finance, Ragnarok, online, RO, ragnarok mobile, ragnarok m, ragnarok eternal love, database, guide, job, quest, headgear quest, monster drops, item information, skill description, skill simulator, stat calculator, ragnarok tools, ragnarok mobile english'
    let description_ = 'Endless Tower Floor Monsters List, Endless Tower SEA Global MVP, Endless Tower Mini. Endless Tower resets every Monday at 6PM GMT+8 on SEA Server.'
    return {
      title: title_,
      meta: [
        { vmid: 'description', name: 'description', content: description_ },
        { vmid: 'keywords', name: 'keywords', content: keywords_ },
        { property: 'og:title', content: title_ }, 
        { property: 'og:description', content: description_ }, 
        { property: 'og:url', content: url_ }, 

        { property: 'twitter:description', content: description_ }, 
        { property: 'twitter:title', content: title_ }, 

        { itemprop: 'name', content: title_ },
        { itemprop: 'description', content: description_},
        { itemprop: 'image', content: 'https://www.ragnarokmobile.net/img/louyang.webp' }
      ],
      link: [
        { rel: 'canonical', href: url_ }
      ]
    };
  },
  data() {
    return {
        loading: true,
        result: [],
    }
  },
  mounted() {
    this.getResults();
  },
  methods: {
    getResults() {
      this.loading = true;
      axios
        .get(constant.getWeeklies)
        .then(response => {
          this.result = response.data;
        })
        .catch(error => console.log(error))
        .finally(() => (this.loading = false));
    },
  }
};
</script>