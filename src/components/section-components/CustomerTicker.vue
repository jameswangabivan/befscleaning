<template>

  <div class="ticker-wrap">
    <div class="ticker">
      <div class="ticker__item"><img alt="sema-na-sms" src="../../assets/images/airtel-logo-vector.png" class="customer-image" /></div>
      <div class="ticker__item"><img alt="sema-na-sms" src="../../assets/images/safaricom-logo.png" class="customer-image" /></div>
      <div class="ticker__item"><img alt="sema-na-sms" src="../../assets/images/telkom-kenya.png" class="customer-image" /></div>
      <div class="ticker__item"><img alt="sema-na-sms" src="../../assets/images/salhiya-logo.png" class="customer-image" /></div>
      <div class="ticker__item"><img alt="sema-na-sms" src="../../assets/images/22-bet.png" class="customer-image" /></div>
      <div class="ticker__item"><img alt="sema-na-sms" src="../../assets/images/karen-hospital.png" class="customer-image" /></div>
    </div>
  </div>
</template>


<script>

export default {
  name: "CustomerTicker",
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