<template>
  <div class="col-lg-6 col-md-6 mb-5">
    <div class="blog-item">
      <img :src="$imageBase(image)" alt="" class="img-fluid rounded" />

      <div class="blog-item-content bg-white p-4">
        <div class="blog-item-meta py-1 px-2">
          <span class="text-muted text-capitalize mr-3"
            ><i class="ti-pencil-alt mr-2"></i>
            <router-link
              v-for="tag in tags"
              :key="tag.id"
              :to="{ name: 'blog-by-tag', params: { slug: tag.slug } }"
              >{{ tag.title }} &nbsp;</router-link
            >
          </span>
        </div>

        <h3 class="mt-3 mb-3 title">
          <router-link :to="{ name: 'blog-detail', params: { slug: slug } }">{{
            title
          }}</router-link>
        </h3>
        <p class="mb-4 summary">
          {{ summary }}
        </p>

        <router-link
          class="btn btn-small btn-main btn-round-full"
          :to="{ name: 'blog-detail', params: { slug: slug } }"
          >{{ $t("more") }}</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tags: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.title,
.summary {
  word-break: break-all;
}
</style>
