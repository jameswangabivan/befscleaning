<template>
  <HeaderComp/>  
  <main>
    <router-view :key="$route.path"> </router-view>
  </main>

  <FooterComp />
</template>

<script>
import FooterComp from '@/components/common/FooterComp.vue'
import HeaderComp from '@/components/common/HeaderComp.vue'
export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
  },

}
</script>
