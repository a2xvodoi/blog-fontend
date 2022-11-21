<template>
  <div class="tab-pane fade show active">
    <form @submit.prevent="handleSubmit">
      <div class="text-center mb-3">
        <p>Sign in with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p>

      <div class="form-group">
        <label for="emailInput">Email</label>
        <input
          type="email"
          class="form-control"
          id="emailInput"
          v-model="state.email"
        />
      </div>
      <div class="form-group">
        <label for="passwordInput">Password</label>
        <input
          type="password"
          class="form-control"
          id="passwordInput"
          autocomplete="password"
          v-model="state.password"
        />
      </div>

      <!-- 2 column grid layout -->
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          <!-- Checkbox -->
          <div class="form-check mb-3 mb-md-0">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="loginCheck"
              checked
            />
            <label class="form-check-label" for="loginCheck">
              Remember me
            </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          <!-- Simple link -->
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">
        Sign in
      </button>
    </form>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { useLogin } from "@/composables/useLogin";

export default {
  setup() {
    const router = useRouter();

    const { state, submitForm } = useLogin();

    const handleSubmit = async () => {
      try {
        const result = await submitForm();
        if (result) {
          router.push({ name: "switch" });
        } else {
          router.push({ name: "home" });
        }
      } catch (error) {
        console.log(error);
      }
    };

    return { state, handleSubmit };
  },
};
</script>
<style>
</style>
