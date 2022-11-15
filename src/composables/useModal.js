import { ref } from "vue";

const openModal = ref(false);
const openModals = ref([]);

const checkNameModal = (name) => !!name && typeof openModals.value[name] !== "undefined";

const createModal = (params) => {
  openModals.value[params?.name] = false;
};

const hide = (params) => {
  if (checkNameModal(params?.name)) {
    openModals.value[params?.name] = false;
  } else {
    openModal.value = false;
  }
};

const show = (params) => {
  if (checkNameModal(params?.name)) {
    openModals.value[params?.name] = true;
  } else {
    openModal.value = true;
  }
};

const toggle = (params) => {
  if (checkNameModal(params?.name)) {
    openModals.value[params?.name] = !openModals.value[params?.name];
  } else {
    openModal.value = !openModal.value;
  }
};

export function useModal() {
  return {
    openModal,
    openModals,
    createModal,
    hide,
    show,
    toggle,
  };
}
