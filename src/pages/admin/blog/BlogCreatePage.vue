<template>
  <form class="card" @submit.prevent="submitForm">
    <blog-form
      v-model:title="title"
      v-model:published="published"
      v-model:summary="summary"
      v-model:content="content"
      v-model:selected="selected"
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
import BlogForm from "@/components/admin/blog/BlogForm.vue";

export default {
  components: { BlogForm },
  setup() {
    const title = ref("");
    const published = ref(false);
    const summary = ref("");
    const content = ref("");
    const selected = ref([]);
    const error = ref("");

    const router = useRouter();
    const store = useStore();
    const { toastSuccess } = useToast();

    watch([title, published, summary, content], () => {
      error.value = "";
    });

    const submitForm = async () => {
      const data = {
        title: title.value,
        published: published.value,
        summary: summary.value,
        content: content.value,
        tags: selected.value.length
          ? selected.value.map((item) => item.id).join(", ")
          : "",
      };
      try {
        if (!error.value) {
          await store.dispatch("blog/store", data);
          toastSuccess({ title: i18n.global.t("create-success") });
          router.push({ name: "blog-manager" });
        }
      } catch (err) {
        error.value = err.message;
      }
    };

    return { title, published, summary, content, selected, error, submitForm };
  },
};
</script>
<style>
</style>
