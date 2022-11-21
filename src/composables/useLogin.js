import { reactive } from "vue";
import Auth from "@/api/Auth";
import utilsCommon from "@/utils/common";

const defaultState = {
  email: "",
  password: "",
};

const state = reactive({ ...defaultState });

const resetState = () => {
  state.email = defaultState.email;
  state.password = defaultState.password;
};

const submitForm = () => {
  return new Promise((resolve, reject) => {
    Auth.login(state)
      .then((response) => {
        if (!response.code) {
          return reject(response.data.errors);
        }
        response.data.token && utilsCommon.saveStorageData("user", response.data);
        resetState();
        return resolve(response.data.permissions);
      })
      .catch((error) => {
        return reject(error.message);
      });
  });
};

export function useLogin() {
  return { state, submitForm };
}
