<template>
  <div>
    <Content></Content>
  </div>
</template>

<script>
//import axios from 'axios'
import Content from '@/components/Content.vue';

export default {
  name: 'Home',
  components: {
    Content
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
