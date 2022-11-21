<template>
  <editor :api-key="getEnv('VUE_APP_TINY_API_KEY')" :init="intTiny" />
</template>
<script>
import { ref } from "vue";
import Editor from "@tinymce/tinymce-vue";
import { getEnv } from "@/utils/helper";

export default {
  components: {
    Editor,
  },
  setup() {
    const intTiny = ref({
      plugins:
        "preview powerpaste casechange importcss searchreplace autolink toc  directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable export",
      toolbar:
        "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview print | insertfile image media pageembed link anchor codesample | a11ycheck ltr rtl | showcomments addcomment | code toc",
      tinycomments_mode: "embedded",
      content_style: "body { font-family: Roboto, sans-serif; font-size:14px }",
      height: 600,
      images_upload_handler: (blobInfo, success) => {
            const img = 'data:image/jpeg; base64,' + blobInfo.base64()
            success(img)
          }
    });
    return { intTiny, getEnv };
  },
};
</script>
<style>
</style>
