<template>
<section class="yellow-header"></section>
  <div class="container">
    <div class="card small-card">
      <div class="card-header text-center">
        <h2 class="title">Demo Request</h2>
      </div>

      <div class="card-body text-center">
        <div v-if="systErrors" class="alert alert-danger">{{ systErrors["detail"] }}</div>        
        <form @submit.prevent="loginUser">
          <div class="mb-3">
            <input id="name" type="text" class="form-control" name="name" placeholder="Your Name" required="required" v-model="formData.name">
            <div v-if="errors['name']" class="alert-text"><li v-for="(value, key) in errors['name']" :key="key">{{value}}</li></div>
          </div>

          <div class="mb-3">
            <input id="name" type="email" class="form-control" name="email" placeholder="Your Email" required="required" v-model="formData.email">
            <div v-if="errors['email']" class="alert-text"><li v-for="(value, key) in errors['email']" :key="key">{{value}}</li></div>
          </div>
          <div class="mb-3">
            <textarea id="comment" class="form-control" name="password" placeholder="Comment" v-model="formData.comment"></textarea>
            <div v-if="errors['comment']" class="alert-text"><li v-for="(value, key) in errors['comment']" :key="key">{{value}}</li></div>
          </div>
          <button type="submit" class="btn btn-primary">Request QUick Demo</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "DemoReq",
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