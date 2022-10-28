<template>
  <header-content />
  <div class="main-wrapper">
    <main-content />
    <footer-content />
  </div>
</template>
<script>
import HeaderContent from "./HeaderContent.vue";
import MainContent from "./MainContent.vue";
import FooterContent from "./FooterContent.vue";
export default {
  components: { HeaderContent, MainContent, FooterContent },
};
</script>
<style>
@import url("@/assets/plugins/themify/css/themify-icons.css");
@import url("@/assets/plugins/fontawesome/css/all.css");
@import url("@/assets/plugins/magnific-popup/dist/magnific-popup.css");
@import url("@/assets/plugins/megakit-2/style.css");
</style>
