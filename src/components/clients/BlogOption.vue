<template>
  <div class="tag-option mt-5 clearfix">
    <ul class="float-left list-inline">
      <li class="text-capitalize">{{ $t("tags") }}:</li>
      <li class="list-inline-item" v-for="tag in tags" :key="tag.id">
        <router-link
          :to="{
            name: 'blog-by-tag',
            params: { slug: tag.slug },
          }"
          >{{ tag.title }}</router-link
        >
      </li>
    </ul>

    <ul class="float-right list-inline">
      <li class="list-inline-item">Share:</li>
      <li class="list-inline-item">
        <share-network
          network="facebook"
          :url="$fullPath"
          :title="title"
          :description="summary"
          :quote="title"
          hashtags="vuejs"
        >
          <i class="fab fa-facebook-f" aria-hidden="true"></i>
        </share-network>
      </li>
      <li class="list-inline-item">
        <share-network
          network="twitter"
          :url="$fullPath"
          :title="title"
          :description="summary"
          :quote="title"
          hashtags="vuejs"
        >
          <i class="fab fa-twitter" aria-hidden="true"></i>
        </share-network>
      </li>
      <li class="list-inline-item">
        <share-network
          network="pinterest"
          :url="$fullPath"
          :title="title"
          :description="summary"
          :quote="title"
          hashtags="vuejs"
        >
          <i class="fab fa-pinterest-p" aria-hidden="true"></i>
        </share-network>
      </li>
    </ul>
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
  },
};
</script>
<style>
</style>
