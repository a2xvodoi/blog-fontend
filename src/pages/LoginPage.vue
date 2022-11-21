<template>
  <div class="bg-auth">
    <div class="w-100 p-4 d-flex justify-content-center pb-4">
      <div style="width: 35rem">
        <!-- Pills navs -->
        <ul class="nav nav-pills nav-justified mb-3">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="active === 'tab-login' ? 'active' : ''"
              id="tab-login"
              @click.prevent="active = 'tab-login'"
              >Login</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="active === 'tab-register' ? 'active' : ''"
              id="tab-register"
              @click.prevent="active = 'tab-register'"
              >Register</a
            >
          </li>
        </ul>
        <!-- Pills navs -->

        <!-- Pills content -->
        <div class="tab-content">
          <component :is="active"></component>
        </div>
        <!-- Pills content -->
      </div>
    </div>
  </div>
</template>
<script>
import TabLogin from "@/components/TabLogin.vue";
import TabRegister from "@/components/TabRegister.vue";
import { ref } from "vue";
export default {
  components: { TabLogin, TabRegister },
  setup() {
    const active = ref("tab-login");
    return { active };
  },
};
</script>
<style>
.bg-auth {
  background: url("@/assets/images/bg/login.webp") no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  min-height: 100vh;
}
.bg-auth .nav {
  --mdb-nav-link-padding-x: 1rem;
  --mdb-nav-link-padding-y: 0.5rem;
  --mdb-nav-link-color: var(--mdb-link-color);
  --mdb-nav-link-hover-color: var(--mdb-link-hover-color);
  --mdb-nav-link-disabled-color: #757575;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.bg-auth .nav-link {
  display: block;
  padding: var(--mdb-nav-link-padding-y) var(--mdb-nav-link-padding-x);
  font-size: var(--mdb-nav-link-font-size);
  font-weight: var(--mdb-nav-link-font-weight);
  color: var(--mdb-nav-link-color);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  cursor: pointer;
}

.bg-auth .nav-pills {
  margin-left: -0.5rem;
  --mdb-nav-pills-border-radius: 0.25rem;
  --mdb-nav-pills-link-active-color: #285192;
  --mdb-nav-pills-link-active-bg: #e3ebf7;
}
.bg-auth .nav-justified .nav-item,
.bg-auth .nav-justified > .nav-link {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.bg-auth .nav-fill .nav-item .nav-link,
.bg-auth .nav-justified .nav-item .nav-link {
  width: auto;
}
.bg-auth .nav-pills .nav-link.active,
.bg-auth .nav-pills .show > .nav-link {
  --mdb-nav-pills-link-active-bg: #e3ebf7;
  --mdb-nav-pills-link-active-color: #285192;
  background-color: var(--mdb-nav-pills-link-active-bg);
  color: var(--mdb-nav-pills-link-active-color);
}
.bg-auth .nav-pills .nav-link {
  background: none;
  border: 0;
  --mdb-nav-pills-link-border-radius: 0.25rem;
  --mdb-nav-pills-link-font-size: 12px;
  --mdb-nav-pills-link-padding-top: 17px;
  --mdb-nav-pills-link-padding-bottom: 16px;
  --mdb-nav-pills-link-padding-x: 29px;
  --mdb-nav-pills-link-line-height: 1;
  --mdb-nav-pills-link-hover-bg: #f7f7f7;
  --mdb-nav-pills-link-font-weight: 500;
  --mdb-nav-pills-link-color: rgba(0, 0, 0, 0.55);
  --mdb-nav-pills-margin: 0.5rem;
  border-radius: var(--mdb-nav-pills-link-border-radius);
  font-size: var(--mdb-nav-pills-link-font-size);
  text-transform: uppercase;
  padding: var(--mdb-nav-pills-link-padding-top)
    var(--mdb-nav-pills-link-padding-x) var(--mdb-nav-pills-link-padding-bottom)
    var(--mdb-nav-pills-link-padding-x);
  line-height: var(--mdb-nav-pills-link-line-height);
  background-color: var(--mdb-nav-pills-link-hover-bg);
  font-weight: var(--mdb-nav-pills-link-font-weight);
  color: var(--mdb-nav-pills-link-color);
  margin: var(--mdb-nav-pills-margin);
}

.bg-auth .btn {
  --mdb-btn-padding-top: 0.625rem;
  --mdb-btn-padding-bottom: 0.5rem;
  --mdb-btn-border-width: 0;
  --mdb-btn-border-color: none;
  --mdb-btn-border-radius: 0.25rem;
  --mdb-btn-box-shadow: 0 4px 9px -4px rgba(0, 0, 0, 0.35);
  --mdb-btn-hover-box-shadow: 0 8px 9px -4px rgba(0, 0, 0, 0.15),
    0 4px 18px 0 rgba(0, 0, 0, 0.1);
  --mdb-btn-focus-box-shadow: 0 8px 9px -4px rgba(0, 0, 0, 0.15),
    0 4px 18px 0 rgba(0, 0, 0, 0.1);
  --mdb-btn-active-box-shadow: 0 8px 9px -4px rgba(0, 0, 0, 0.15),
    0 4px 18px 0 rgba(0, 0, 0, 0.1);
  padding-top: var(--mdb-btn-padding-top);
  padding-bottom: var(--mdb-btn-padding-bottom);
  text-transform: uppercase;
  vertical-align: bottom;
  border: 0;
  border-radius: var(--mdb-btn-border-radius);
  box-shadow: var(--mdb-btn-box-shadow);
}

.bg-auth .btn-block {
  --mdb-btn-margin-top: 0.5rem;
  display: block;
  width: 100%;
}

.bg-auth .btn-primary {
  --mdb-btn-bg: #3b71ca;
  --mdb-btn-color: #fff;
  --mdb-btn-box-shadow: 0 4px 9px -4px #3b71ca;
  --mdb-btn-hover-bg: #386bc0;
  --mdb-btn-hover-color: #fff;
  --mdb-btn-focus-bg: #386bc0;
  --mdb-btn-focus-color: #fff;
  --mdb-btn-active-bg: #3566b6;
  --mdb-btn-active-color: #fff;
}

.bg-auth .btn-check:focus + .btn-primary,
.bg-auth .btn-check:focus-visible + .btn-primary,
.bg-auth .btn-primary:focus {
  box-shadow: 0 8px 9px -4px rgb(59 113 202 / 30%),
    0 4px 18px 0 rgb(59 113 202 / 20%);
  background-color: #386bc0;
}

.bg-auth .btn:hover {
  color: var(--mdb-btn-hover-color);
  background-color: var(--mdb-btn-hover-bg);
  border-color: var(--mdb-btn-hover-border-color);
}
</style>
