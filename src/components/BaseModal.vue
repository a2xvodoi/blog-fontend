<template>
  <div
    class="modal fade show"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    v-show="open"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="title"></slot>
        </div>
        <div class="modal-body"><slot></slot></div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped>
.modal {
  display: block;
}
</style>
