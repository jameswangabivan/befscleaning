<template>  
  <div class="container">
    <div class="card big-card">
      <div class="card-header">
        <h2 class="title">Login</h2>
      </div>

      <div class="card-body">
        <h4>This is History</h4>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "HistoryComp",
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