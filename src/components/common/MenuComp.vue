<template>
  <nav class="navbar navbar-expand-lg bg-light float-end">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/home/" class="nav-link active" aria-current="page">Home</router-link>
        <router-link to="/register/" class="nav-link" aria-current="page">Register</router-link>
        <a href="" class="nav-link" aria-current="page">Login</a>
        <router-link to="/pricing/" class="nav-link" aria-current="page">Pricing</router-link>
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
