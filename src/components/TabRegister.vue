<template>
  <div class="tab-pane fade show active">
    <form @submit.prevent="submitForm">
      <div class="text-center mb-3">
        <p>Sign up with:</p>
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
        <label for="userNameInput">User name</label>
        <input
          type="text"
          class="form-control"
          id="userNameInput"
          v-model="state.user_name"
        />
      </div>
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
      <div class="form-group">
        <label for="firstNameInput">First name</label>
        <input
          type="text"
          class="form-control"
          id="firstNameInput"
          v-model="state.first_name"
        />
      </div>
      <div class="form-group">
        <label for="lastNameInput">Last name</label>
        <input
          type="text"
          class="form-control"
          id="lastNameInput"
          v-model="state.last_name"
        />
      </div>
      <div class="form-group">
        <label for="birthInput">Birthday</label>
        <input
          type="date"
          class="form-control"
          id="birthInput"
          v-model="state.birthday"
        />
      </div>
      <div class="form-group">
        <label for="phoneInput">Phone</label>
        <input
          type="text"
          class="form-control"
          id="phoneInput"
          v-model="state.phone"
        />
      </div>
      <div class="form-group">
        <div class="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            id="maleCheckbox"
            name="customRadioInline"
            class="custom-control-input"
            value="male"
            v-model="state.gender"
          />
          <label class="custom-control-label" for="maleCheckbox">Male</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            id="femaleCheckbox"
            name="customRadioInline"
            class="custom-control-input"
            value="female"
            v-model="state.gender"
          />
          <label class="custom-control-label" for="femaleCheckbox"
            >Female</label
          >
        </div>
      </div>
      <div class="form-group">
        <label for="jobInput">Job</label>
        <input
          type="text"
          class="form-control"
          id="jobInput"
          v-model="state.job"
        />
      </div>
      <div class="form-group">
        <label for="describeInput">Describe</label>
        <textarea
          id="describeInput"
          class="form-control"
          rows="3"
          v-model="state.describe"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="addressInput">Address</label>
        <input
          type="text"
          class="form-control"
          id="addressInput"
          v-model="state.address"
        />
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-3">
        Sign in
      </button>
    </form>
  </div>
</template>
<script>
import { useRegister } from '@/composables/useRegister';

export default {
  setup() {
    const { state, submitForm } = useRegister();

    return { state, submitForm };
  },
};
</script>
<style>
</style>
