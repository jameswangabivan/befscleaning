<template>  
  <div class="container">
    <div class="card small-card">
      <div class="card-header">
        <h2 class="title">Login</h2>
      </div>

      <div class="card-body">
        <div v-if="systErrors" class="alert alert-danger">{{ systErrors["detail"] }}</div>        
        <form @submit.prevent="loginUser">
          <div class="mb-3">
            <label for="userName" class="form-label">Enter username</label>
            <input id="userName" type="text" class="form-control" name="username" placeholder="Enter your username" required="required" v-model="formData.username">
            <div v-if="errors['username']" class="alert-text"><li v-for="(value, key) in errors['username']" :key="key">{{value}}</li></div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input id="exampleInputPassword1" type="password" class="form-control" name="password" placeholder="Enter your password" required="required" v-model="formData.password">
            <div v-if="errors['password']" class="alert-text"><li v-for="(value, key) in errors['password']" :key="key">{{value}}</li></div>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <hr class="spacing-hr" />
        <p>No account? <router-link to="/register/" class="text-link bold">Click to Register</router-link></p>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "LoginComp",
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