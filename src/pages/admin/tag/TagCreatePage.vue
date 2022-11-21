<template>
  <form class="card" @submit.prevent="submitForm">
    <tag-form
      v-model:title="title"
      v-model:describe="describe"
      v-model:image="image"
      v-model:parent-id="parentId"
      :error="error"
    />
  </form>
</template>
<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import i18n from "@/i18n";
import { useToast } from "@/composables/useToast";
import TagForm from "@/components/admin/tag/TagForm.vue";

export default {
  components: { TagForm },
  setup() {
    const title = ref("");
    const describe = ref("");
    const image = ref("");
    const parentId = ref(0);
    const error = ref("");

    const router = useRouter();
    const store = useStore();
    const { toastSuccess } = useToast();

    watch([title, describe, parentId, image], () => {
      error.value = "";
    });

    const submitForm = async () => {
      try {
        if (!error.value) {
          await store.dispatch("tag/store", {
            title: title.value,
            describe: describe.value,
            image: image.value,
            parent_id: parentId.value,
          });
          toastSuccess({ title: i18n.global.t("create-success") });
          router.push({ name: "tag-manager" });
        }
      } catch (err) {
        error.value = err.message;
      }
    };

    return { title, describe, image, parentId, error, submitForm };
  },
};
</script>
<style>
</style>
