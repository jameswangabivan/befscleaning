<template>
  <div class="carousel-1-content">
    <div class="container relative-pos">
      <div class="carousel-spotlight">
        <h3>Business Redefined</h3>
        <div class="business-highlighting">Redefine your business with Mobile Services to reach greater heights</div>
        <hr/>
        <p class="blue-txt">SMS, USSD, Shortcodes<br/>Promotions, Whatsapp Marketing<br/>And many more</p>
      </div>
     </div> 
    <img alt="sema-na-sms" src="../../assets/images/carousel-1.jpg" class="carousel-image" />
  </div>
</template>


<script>

export default {
  name: "CarouselSec",
  data() {
    return {
      formData: "Object.assign({}, initForm)",
      loggedIn: "this.$store.state.auth.loggedIn",
      systErrors: "",
      errors: [],

    };
  },
  mounted() {
  },
  methods: {

  }
};
</script>