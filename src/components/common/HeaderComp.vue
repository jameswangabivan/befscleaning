<template>
  <header class="fixed-top">
    <div class="navbar shadow-sm bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-sm-7 col-xs-7 col-7">
            <a href="/">
              <img v-if="isTransparent" alt="sema-na-sms" src="../../assets/sema-logo.png" class="w-72 mx-auto mb-1">
              <img v-else alt="sema-na-sms" src="../../assets/sema-logo.png" class="w-72 mx-auto mb-1">
            </a>
          </div>
          
          <div class="col-sm-4 d-lg-none d-md-none top-spacing col-xs-5 col-5" aria-current="page"><router-link to="/login/" class="nav-link login-link float-end"><span class="oval-b-radius btn-small white-txt red-bg">Login</span></router-link></div>


          <div class="col-md-6 col-lg-6 col-sm-7 col-7">
            <MenuComp />
          </div>
          <div class="col-md-2 col-lg-2 col-sm-5 col-5 bold blue-txt float-end top-spacing mobile-second-nav"><div class="navbar-nav"><router-link to="/demo/" class="nav-link float-end" aria-current="page float-end"><span class="yellow-bg rb-border-radius float-end"><span class="d-none d-lg-inline-block">Request </span>Demo</span></router-link></div></div>
        </div>
      </div>
    </div>
  </header>

  <section class="header-body-sep"></section>

</template>

<script>
import MenuComp from '@/components/common/MenuComp.vue';

export default {
  name: 'HeaderComp',
  components: {
    MenuComp
  },

  data (){
    return {
      baseClass: ["normal, fixed-top"],
      isTransparent: false,
    }
  },

  watch: {
    $route (){
        this.changeHeader(this.$route.name);
    }
  },
  
  methods: {
    changeHeader(urlName) {
      if (["home", "history", "home2"].includes(urlName)) {
        this.baseClass = ["fixed-top"];
        this.isTransparent = true;
      } else{
        this.baseClass = ["fixed-top"];
        this.isTransparent = false;
      }
    }
  }
}
</script>
