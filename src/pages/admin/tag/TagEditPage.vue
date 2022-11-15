<template>
  <form class="card" @submit.prevent="submitForm">
    <tag-form
      v-model:title="title"
      v-model:describe="describe"
      v-model:parent-id="parentId"
      :error="error"
    />
  </form>
</template>
<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import i18n from '@/i18n';
import { useToast } from "@/composables/useToast";
import TagForm from "@/components/admin/tag/TagForm.vue";

export default {
  components: { TagForm },
  setup() {
    const title = ref("");
    const describe = ref("");
    const parentId = ref(0);
    const error = ref("");

    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const { toastSuccess } = useToast();

    const id = computed(() => route.params.id);
    const tag = computed(() => store.state.tag.item);
    store.dispatch("tag/getTag", id.value);
    watch(tag, () => {
      title.value = tag.value.title;
      describe.value = tag.value.describe;
      parentId.value = tag.value.parent_id;
    })

    watch([title, describe, parentId], () => {
      error.value = "";
    });

    const submitForm = async () => {
      try {
        if (!error.value) {
          await store.dispatch("tag/update", {
            id: id.value,
            title: title.value,
            describe: describe.value,
            parent_id: parentId.value,
          });
          toastSuccess({ title: i18n.global.t("edit-success") });
          router.push({ name: "tag-manager" });

        }
      } catch (err) {
        error.value = err.message;
      }
    };

    return { title, describe, parentId, error, submitForm };
  },
};
</script>
<style>
</style>
