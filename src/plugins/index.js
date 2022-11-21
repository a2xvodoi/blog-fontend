import BaseModal from "@/components/BaseModal.vue";
import LoadingIcon from "@/components/LoadingIcon.vue";
import TinyEditor from "@/components/TinyEditor.vue";
import LocaleChange from "@/components/LocaleChange.vue";

const plugins = {
  install(app) {
    app.config.globalProperties.$imageBase = (image) => {
      const base = process.env.VUE_APP_BASE_API_IMAGE || "http://localhost:3000";
      return base + image
    };

    app.config.globalProperties.$fullPath = document.location.href

    app.component("locale-change", LocaleChange);
    app.component("base-modal", BaseModal);
    app.component("loading-icon", LoadingIcon);
    app.component("tiny-editor", TinyEditor);
  },
};

export default plugins;
