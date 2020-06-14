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
