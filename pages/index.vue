<template>
  <div>
    <!-- Content here -->

    <sections-banner v-if="$settings.sections.banner.active" >


    </sections-banner>
    <template class="bg-red-50">
      <sections-textButtomBox class="bg-[#FAF7F0]"></sections-textButtomBox>
    </template>
   
    <sections-collections class="bg-green-500" v-if="$settings.sections.collections.active"></sections-collections>
    <template v-for="i in 5">
      <sections-products :key="i" :data-key="i" v-if="$settings.sections[`products_${i}`].active" :section="$settings.sections[`products_${i}`]"></sections-products>
    </template>
    <sections-facilities></sections-facilities>
    <sections-browseSpace></sections-browseSpace>
    <sections-aboutUs></sections-aboutUs>
    <sections-ourClients></sections-ourClients>
    <sections-gallery></sections-gallery>
    <sections-freeTour></sections-freeTour>
    <sections-locations></sections-locations>
    <sections-howItWorks></sections-howItWorks>
    <sections-testimonials></sections-testimonials>
    <sections-posts v-if="$settings.sections.posts.active"></sections-posts>
    <!-- <sections-services v-if="$settings.sections.services.active"></sections-services> -->
    <!-- <div class="container">
      <si-app-loader  placement="BEFORE_HOME_FOOTER"/>
    </div> -->
  </div>
</template>
<script>
export default {
  async fetch(){
    this.$store.state.seo.title = this.$settings.store_name;
    this.$store.state.seo.description = this.$settings.store_description;
  },
  mounted() {
    this.$tools.call('PAGE_VIEW');
    this.$storeino.fbpx('PageView')
  },
}
</script>
