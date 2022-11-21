<template>  
  <div class="container">
    <div class="card small-card">
      <div class="card-header">
        <h2 class="title">Register</h2>
      </div>

      <div class="card-body">
        <div v-if="systErrors" class="alert alert-danger">{{ systErrors }}</div>
        <div v-if="success == true" class="alert alert-success">Registration Successful. You can now login</div>
        
        <form v-if="!login" @submit.prevent="registerUser">
          <div class="row">
            <div class="col-md-12 col-lg-12 mb-3">
              <label for="firstName" class="form-label">Name</label>
              <input id="firstName" type="text" class="form-control" name="first_name" placeholder="Enter your first name" required="required" v-model="formData.name">
              <div v-if="errors['first_name']" class="alert-text"><li v-for="(value, key) in errors['first_name']" :key="key">>{{value}}</li></div>
            </div>
            <div class="col-md-12 col-lg-12 mb-3">
              <label for="lastName" class="form-label">Company Name</label>
              <input id="lastName" type="text" class="form-control" name="company_name" placeholder="Enter your Company Name" required="required" v-model="formData.company_name">
              <div v-if="errors['last_name']" class="alert-text"><li v-for="(value, key) in errors['company_name']" :key="key">{{value}}</li></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-lg-12 mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input id="exampleInputEmail1" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter mail address" required="required" v-model="formData.email">
              <div v-if="errors['email']" class="alert-text"><li v-for="(value, key) in errors['email']" :key="key">{{value}}</li></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-6 mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input id="exampleInputPassword1" type="password" class="form-control" name="password" placeholder="Must be at least 8 characters" required="required" v-model="formData.password">
              <div v-if="errors['password']" class="alert-text"><li v-for="(value, key) in errors['password']" :key="key">{{value}}</li></div>
            </div>
            <div class="col-md-6 col-lg-6 mb-3">
              <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
              <input id="exampleInputPassword2" type="password" class="form-control" name="password2" placeholder="Confirm password" required="required" v-model="formData.password2">
            </div>
          </div>
          <button type="submit" class="btn btn-primary">{{submitText}}</button>
        </form>
        <hr class="spacing-hr" />
        <p>Have an account? <a href="" class="text-link bold">Click to login</a></p>
      </div>
    </div>
  </div>
</template>


<script>
const initForm = { email: "", name: "",  company_name: "", password: "", password2: "" };
export default {
  name: "RegisterComp",
  data() {
    return {
      formData: Object.assign({}, initForm),
      loggedIn: "this.$store.state.auth.loggedIn",
      systErrors: "",
      errors: [],
      success: false,
      submitText: "Submit",
    };
  },
  mounted() {
  },
  methods: {
    async RegisterUser() {
      this.submitText = "Submitting";
      this.success = true;
      setTimeout(() => {
          this.$router.push("/login/");
        }, 4000);
    }
  }
};
</script>