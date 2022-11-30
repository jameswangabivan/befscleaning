<template>
  <nav class="navbar navbar-expand-lg float-end">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/home/" class="nav-link blue-txt" aria-current="page">Home</router-link>
        <router-link to="/products/" class="nav-link blue-txt" aria-current="page">Services</router-link>
        <router-link to="/contact-us/" class="nav-link blue-txt" aria-current="page">Contact Us</router-link>
        <router-link to="/our-story/" class="nav-link blue-txt" aria-current="page">Our Story</router-link>
        <router-link to="/login/" class="nav-link login-link" aria-current="page"><span class="oval-b-radius btn-small white-txt red-bg">Login</span></router-link>

      </div>
    </div>
  </div>
</nav>
</template>

<script>

export default {
  name: 'MenuComp',
  components: {
  }
}
</script>
