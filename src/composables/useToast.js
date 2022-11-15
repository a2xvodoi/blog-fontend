import Swal from "sweetalert2";

const toast = Swal.mixin({
  toast: true,
  icon: "success",
  title: "",
  position: "top-right",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
});

const toastSuccess = (params) => {
  toast.fire({
    icon: "success",
    ...params,
  });
};

const toastError = (params) => {
  toast.fire({
    icon: "error",
    ...params,
  });
};

const toastWarning = (params) => {
  toast.fire({
    icon: "warning",
    ...params,
  });
};

const toastInfo = (params) => {
  toast.fire({
    icon: "info",
    ...params,
  });
};

const toastQuestion = (params) => {
  toast.fire({
    icon: "question",
    ...params,
  });
};

export function useToast() {
  return {
    toast,
    toastSuccess,
    toastError,
    toastWarning,
    toastInfo,
    toastQuestion,
  };
}
