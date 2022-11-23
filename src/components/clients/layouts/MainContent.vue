<template>
  <div>
    <!-- your content here -->
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>
<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const getTags = () => {
      store.dispatch("tag/getTags");
    };

    const getLatest = () => {
      store.dispatch("blog/latest");
    };
    getTags();
    getLatest();
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
