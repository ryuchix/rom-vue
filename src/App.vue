<template>
    <div id="app" style="margin: 0 auto; background-color: #fafafa">
    <v-app id="inspire" width="640">
      <HeaderBar></HeaderBar>
        <v-fade-transition mode="out-in">
          <keep-alive>
          <router-view style="background-color:#fafafa; " />
          </keep-alive>
      </v-fade-transition>
      <FooterBar></FooterBar>
      </v-app>
    </div>
</template>

<script>
import FooterBar from '@/components/Footer.vue';
import HeaderBar from '@/components/Header.vue';
export default {
  name: 'App',
  metaInfo: {
      // all titles will be injected into this template
      titleTemplate: '%s | Ragnarok Mobile - Guide, Quest, Build and Database for Ragnarok M Eternal Love'
  },
  components: {
    FooterBar, HeaderBar
  },

  data: () => ({
    onLine: navigator.onLine,
  }),
  methods: {
    // updateOnlineStatus(e) {
    //     const {
    //         type
    //     } = e;
    //     this.onLine = type === 'online';
    // }
  },
  watch: {
      // onLine(v) {
      //     if (v) {
      //         this.showBackOnline = true;
      //         setTimeout(() => {
      //             this.showBackOnline = false;
      //         }, 1000);
      //     }
      // }
  },
  mounted() {
      // window.addEventListener('online', this.updateOnlineStatus);
      // window.addEventListener('offline', this.updateOnlineStatus);
  },
  beforeDestroy() {
      // window.removeEventListener('online', this.updateOnlineStatus);
      // window.removeEventListener('offline', this.updateOnlineStatus);
  }
};
</script>
<style lang="scss">
  @import '@/../assets/scss/home.scss';
</style>
