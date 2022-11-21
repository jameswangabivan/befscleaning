<template>
  <section class="home-page-carousel"><CarouselSec /></section>

  <section class="intro-section text-center basic-block blue-bg-section shadow-sm">
    <div class="container">
      <h3>Grow Your Business</h3>
      <p>We develop integrated turn-key <b>Mobile Solutions</b> <br/>that creates positive impact on businesses and  our customers’ lives.<br/><span class="underline">Get Free SMS Test Credits on Sign-Up</span></p>
    </div>
  </section>
  <section class="sec-header text-center basic-block"><div class="container"><h3 class="block title">Products</h3></div></section>
    <section class="products-section basic-block">    
      <div class="container">
        <div class="row">
        <div class="col-md-4 col-lg-4 col-xs-12 block text-center">
            <h4 class="product-title">Sms Marketing</h4>
            <img src="../assets/images/sms.jpg" class="products-image" />
            <p>Market your product with instant& reliable messaging where customers can identify you through custom sender ID i.e Tuskys</p>
          </div>


        <div class="col-md-4 col-lg-4 col-xs-12 block text-center">
          <h4 class="product-title">Short codes</h4>
            <img src="../assets/images/short-code.png" class="products-image" />
          <p>Increase engagement with your customers using a 5-digit short code number that can send & receive messages from customers i.e. two-way engagement.</p>
        </div>

        <div class="col-md-4 col-lg-4 col-xs-12 block text-center">
          <h4 class="product-title">USSDs</h4>
            <img src="../assets/images/ussd.jpeg" class="products-image" />
          <p>Increase engagement with your customers where they can interact directly with your product from their mobile phones by making various selections from various menus.</p>
        </div>
        <div class="col-md-4 col-lg-4 col-xs-12 block text-center">
          <h4 class="product-title">Promotions</h4>
            <img src="../assets/images/promotions.png" class="products-image" />
          <p>Improve brand loyalty by rewarding your loyal customer through reward schemes i.e. bulk airtime awards, data bundles & discount coupons redeemed via SMS.</p>
        </div>

        <div class="col-md-4 col-lg-4 col-xs-12 block text-center">
          <h4 class="product-title">Payments</h4>
            <img src="../assets/images/payments.jpg" class="products-image" />
          <p>Our integrated mass marketing Bulk SMS Solution platform offers a wide range of enriched SMS  technology to enable you to connect effectively with your customers.</p>
        </div>

        <div class="col-md-4 col-lg-4 col-xs-12 block text-center">
          <h4 class="product-title">Chat Bots</h4>
            <img src="../assets/images/chat-bot.png" class="products-image" />
          <p>Sell your products and services 24/7, even when you’re are not there. The AI and natural language engine will do the heavy lifting to get more sales, speed up customer query resolutions.</p>
        </div>

        <div class="col-md-4 col-lg-4 col-xs-12 block text-center">
          <h4 class="product-title">Surveys</h4>
            <img src="../assets/images/surveys.jpg" class="products-image" />
          <p>Get Real-time customer feedback and insights to understand your customers better than your competition. Know how often your customers buy & spend.</p>
        </div>

        <div class="col-md-4 col-lg-4 col-xs-12 block text-center">
          <h4 class="product-title">WhatsApp Marketing</h4>
            <img src="../assets/images/whatsapp-marketing.jpg" class="products-image" />
          <p>Communicate with customers through the most downloaded App in the world using messages, pictures, videos, audios & many more.</p>
        </div>
      </div>
      </div>
    </section>

    <section class="basic-block blue-bg-section text-center relative-pos">
      <h3>Happy Clients</h3>
      <p>Our Partners & Clients, We made them Happy.</p>
      <div class="bottom-rounded-direction blue-bg-section"></div>
    </section>
    <section class="clients basic-block">
      <div class="container text-center">
        
          <CustomerTicker />
      </div>
    </section>
    <section class="contacts-section basic-block">
      <div class="container">
        <div class="intro-title-block">
          <h3 class="title basic-title blue-txt">Contact Us</h3>
          <p>Can we help with your Growth Journey? Let us have coffee sometime. Get in touch with us for a no obligation consultation.</p>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xs-12">
            <p class="big-txt"><b>Phone:</b> To be shared later</p>
            <p class="big-txt"><b>Email:</b> info@semanasms.com</p>
            <p class="big-txt"><b>Location:</b> Nairobi – 5th Floor, Consolidated Bank Building, Koinange Street, Nairobi Kenya</p>
          </div>
          <div class="col-md-6 col-lg-6 col-xs-12">
          <p class="big-txt"><b>Skype:</b> Sema na SMS</p>
          <p class="big-txt"><b>Twitter:</b> @semanasms_</p>
          <p class="big-txt"><b>Facebook:</b> Sema na Sms</p>
          <p class="big-txt"><b>Instagram:</b> @semana_sms</p>
          <p class="big-txt"><b>LinkedIn:</b> @semanasms</p>
          </div>
        </div>
      </div>
    </section>
    <section class="about bg-light basic-block shadow-sm">
    <div class="container">
      <h3 class="blue-txt">Our Story</h3>
        <h4>About us</h4>
        <div class="row">
        <div class="col-md-6 col-xs-12">
          <p>Sema na SMS is a leading Premium Rate Service Provider (PRSP) company. We provide turn-key mobility solutions and platforms in the telecoms, finance, government & entertainment sectors. We are a team of restless and curious, creative and passionate people looking to reimagine what is possible when technology & passion meet.</p>
        </div>
        <div class="col-md-6 col-xs-12">
          <p><b>Our Mission:</b> Creating meaningful and intuitive mobile & media solutions Globally.</p>
          <p><b>Our Vision:</b> To be the Leading company of choice for PRSP solutions in Africa</p>
          <p><b>Core Competencies:</b> Creativity, Innovation</p>
        </div>
        </div>
    </div>
  </section>
  <section>
    <div class="container basic-block text-center blue-txt">
      <h4>Core Values</h4>
      <p>Integrity, Leadership</p>
    </div>
    <img src="../assets/images/core-values.jpg" class="" />
  </section>
</template>
<script>
import CarouselSec from "@/components/section-components/CarouselSec.vue";
import CustomerTicker from "@/components/section-components/CustomerTicker.vue";
export default {
  name: 'HomeComp',
  components: {
    CarouselSec,
    CustomerTicker,
  }
}
</script>
