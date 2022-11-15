import BaseModal from "@/components/BaseModal.vue";
import LoadingIcon from "@/components/LoadingIcon.vue";
import TinyEditor from "@/components/TinyEditor.vue";
import LocaleChange from "@/components/LocaleChange.vue";

const plugins = {
  install(app) {

    app.component("locale-change", LocaleChange);
    app.component("base-modal", BaseModal);
    app.component("loading-icon", LoadingIcon);
    app.component("tiny-editor", TinyEditor);
  },
};

export default plugins;
