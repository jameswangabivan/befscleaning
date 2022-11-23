<template>
  <section class="home-page-carousel"><CarouselSec /></section>
  <CustomerTicker />
</template>
<script>
import CarouselSec from "@/components/section-components/CarouselSec.vue";
import CustomerTicker from "@/components/section-components/CustomerTicker.vue";

export default {
  name: 'HomeComp',
  components: {
    CarouselSec,
    CustomerTicker,
  }
}
</script>
