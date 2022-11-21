import { reactive } from "vue";
import Auth from "@/api/Auth";
import utilsCommon from "@/utils/common";

const defaultState = {
  first_name: "",
  last_name: "",
  user_name: "",
  email: "",
  phone: null,
  password: "",
  birthday: null,
  gender: null,
  job: null,
  describe: null,
  address: null,
};

const state = reactive({ ...defaultState });

const resetState = () => {
  state.first_name = defaultState.first_name;
  state.last_name = defaultState.last_name;
  state.user_name = defaultState.user_name;
  state.email = defaultState.email;
  state.phone = defaultState.phone;
  state.password = defaultState.password;
  state.birthday = defaultState.birthday;
  state.gender = defaultState.gender;
  state.job = defaultState.job;
  state.describe = defaultState.describe;
  state.address = defaultState.address;
};

const submitForm = () => {
  return new Promise((resolve, reject) => {
    Auth.register(state)
      .then((response) => {
        if (!response.code) {
          return reject(response.data.errors);
        }
        response.data.token && utilsCommon.saveStorageData("user", response);
        resetState();
        return resolve(response.data.permissions);
      })
      .catch((error) => {
        return reject(error.message);
      });
  });
};

export function useRegister() {
  return { state, submitForm };
}
