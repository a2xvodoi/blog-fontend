<template>
  <header-content />
  <div class="main-wrapper">
    <main-content />
    <footer-content />
  </div>
</template>
<script>
import HeaderContent from "@/components/clients/layouts/HeaderContent.vue";
import MainContent from "@/components/clients/layouts/MainContent.vue";
import FooterContent from "@/components/clients/layouts/FooterContent.vue";

export default {
  components: { HeaderContent, MainContent, FooterContent },
};
</script>
<style scoped>
@import url("@/assets/plugins/themify/css/themify-icons.css");
@import url("@/assets/plugins/magnific-popup/dist/magnific-popup.css");
@import url("@/assets/plugins/megakit-2/style.css");
</style>
