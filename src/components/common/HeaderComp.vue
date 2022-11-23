<template>
  <header class="fixed-top">
    <div class="navbar shadow-sm bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-lg-3">
            <a href="/">
              <img v-if="isTransparent" alt="sema-na-sms" src="../../assets/sema-logo.png" class="w-72 mx-auto mb-1">
              <img v-else alt="sema-na-sms" src="../../assets/sema-logo.png" class="w-72 mx-auto mb-1">
            </a>
          </div>
          <div class="col-md-1 col-lg-1"></div>
          <div class="col-md-6 col-lg-6">
            <MenuComp />
          </div>
          <div class="col-md-2 col-lg-2 bold blue-txt float-end"><div class="navbar-nav"><router-link to="/demo/" class="nav-link float-end" aria-current="page"><span class="yellow-bg rb-border-radius">Request Demo</span></router-link></div></div>
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
