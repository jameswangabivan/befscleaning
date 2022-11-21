<template>
  <header class="text-center">
    <div class="navbar bg-light shadow-sm">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-lg-3">
            <a href="/"><img alt="sema-na-sms" src="../../assets/sema-logo.png" class="w-72 mx-auto mb-1"></a>
          </div>
          
          <div class="col-md-9 col-lg-9">
            <MenuComp />
          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
import MenuComp from '@/components/common/MenuComp.vue'

export default {
  name: 'HeaderComp',
  components: {
    MenuComp
  }
}
</script>
