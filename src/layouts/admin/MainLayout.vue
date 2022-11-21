<template>
  <navbar-content />
  <side-bar-content />
  <main-content />
  <footer-content />
</template>
<script>
import NavbarContent from "@/components/admin/dashboard/NavbarContent.vue";
import SideBarContent from "@/components/admin/dashboard/SideBarContent.vue";
import MainContent from "@/components/admin/dashboard/MainContent.vue";
import FooterContent from "@/components/admin/dashboard/FooterContent.vue";
export default {
  components: { NavbarContent, SideBarContent, MainContent, FooterContent },
};
</script>
<style scoped>
@import url("@/assets/plugins/adminlte/adminlte.min.css");
</style>
