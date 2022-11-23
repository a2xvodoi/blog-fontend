<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link :to="{ path: '#' }" class="brand-link">
      <img
        src="@/assets/images/logo/logo-admin.jpg"
        alt="VAdmin Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">VAdmin</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="@/assets/images/team/team-3.jpg"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <span class="d-block text-light">{{ user.user_name }}</span>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <router-link :to="{ name: 'dashboard' }" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>{{ $t("dashboard") }}</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'tag-manager' }" class="nav-link">
              <i class="nav-icon fa fa-tags"></i>
              <p>{{ $t("tag management") }}</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'blog-manager' }" class="nav-link">
              <i class="nav-icon fa fa-blog"></i>
              <p>{{ $t("blog management") }}</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import utilsCommon from '@/utils/common';
import { computed } from 'vue';

export default {
  setup() {
    const user = computed(() => utilsCommon.getStorageDataByKey("user"));

    return { user }
  }
};
</script>
