<template>
    <div>
      <HeaderBar></HeaderBar>
      <v-fade-transition mode="out-in">
        <router-view />
    </v-fade-transition>
    <FooterBar></FooterBar>
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
    //
  }),
};
</script>
<style lang="scss">
  @import '@/../assets/scss/home.scss';
</style>
