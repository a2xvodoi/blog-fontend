<template>
  <form class="card" @submit.prevent="submitForm">
    <blog-form
      v-if="title"
      v-model:title="title"
      v-model:published="published"
      v-model:summary="summary"
      v-model:content="content"
      v-model:image="image"
      v-model:selected="selected"
      :error="error"
    />
  </form>
</template>
<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
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
    const image = ref("");
    const selected = ref([]);
    const error = ref("");

    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const { toastSuccess } = useToast();

    const id = computed(() => route.params.id);
    const blog = computed(() => store.state.blog.item);
    store.dispatch("blog/get", id.value);

    watch(blog, () => {
      title.value = blog.value.title;
      published.value = !!blog.value.published;
      summary.value = blog.value.summary;
      content.value = blog.value.content;
      image.value = blog.value.image;
      selected.value = blog.value.tags;
    });

    watch([title, published, summary, content, selected, image], () => {
      error.value = "";
    });

    const submitForm = async () => {
      try {
        if (!error.value) {
          await store.dispatch("blog/update", {
            id: id.value,
            title: title.value,
            published: published.value,
            summary: summary.value,
            content: content.value,
            image: image.value,
            tags: selected.value.length
              ? selected.value.map((item) => item.id).join(", ")
              : "",
          });
          toastSuccess({ title: i18n.global.t("edit-success") });
          router.push({ name: "blog-manager" });
        }
      } catch (err) {
        error.value = err.message;
      }
    };

    return { title, published, summary, content, image, selected, error, submitForm };
  },
};
</script>
<style>
</style>
