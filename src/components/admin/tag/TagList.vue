<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ title }}</td>
    <td>
      <img alt="Avatar" class="table-avatar w-25" :src="image" />
    </td>
    <td>{{ describe }}</td>
    <td>{{ follow }}</td>
    <td>{{ parentTag }}</td>
    <td class="project-actions text-right text-capitalize">
      <a class="btn btn-primary btn-sm" href="#">
        <i class="fas fa-folder"> </i>
        {{ $t("view") }}
      </a>
      <router-link
        class="btn btn-info btn-sm mx-1"
        :to="{ name: 'tag-edit', params: { id: id } }"
      >
        <i class="fas fa-pencil-alt"> </i>
        {{ $t("edit") }}
      </router-link>
      <button
        class="btn btn-danger btn-sm text-capitalize"
        @click.prevent="$emit('showModal', id)"
      >
        <i class="fas fa-trash"> </i>
        {{ $t("delete") }}
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    image: String,
    describe: String,
    follow: Number,
    parentTag: String,
  },
};
</script>
