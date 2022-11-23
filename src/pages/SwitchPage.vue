<template>
  <div class="d-flex align-items-center switch-container">
    <div class="container-fluid">
      <div class="row">
        <!-- <a href="/" target="_blank" class="offset-1 col-4 box box-client">
          <div class="h2 text-center w-100">Go to your blog website</div>
        </a>
        <a href="/admin" target="_blank" class="offset-1 col-4 box box-admin">
          <div class="h2 text-center w-100">Go to dashboard</div>
        </a> -->
        <router-link to="/" class="offset-1 col-4 box box-client">
          <div class="h2 text-center w-100">Go to your blog website</div>
        </router-link>
        <router-link to="/admin" class="offset-1 col-4 mr-auto box box-admin">
          <div class="h2 text-center w-100">Go to dashboard</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.switch-container {
  height: 100vh;
  background: url("@/assets/images/bg/switch.jfif") no-repeat;
  background-position: center;
  background-size: cover;
  .box {
    text-transform: uppercase;
    font-weight: 500;
    color: rgb(91, 141, 216);
    min-height: 400px;
    border: 1px solid rgb(197, 197, 197);
    border-radius: 0.25rem;
    padding: 1rem;
    box-shadow: -2px -2px 15px 2px rgb(217, 239, 248), 2px 2px 15px 2px rgb(201, 201, 231);
    transition: all 0.5s ease;
    opacity: 0.8;
    display: flex;
    align-items: center;
    text-decoration: underline;
    text-shadow: 0 13.36px 8.896px #c4b59d,0 -2px 1px #fff;
    &:hover {
      cursor: pointer;
      outline: 1px dashed rgb(155, 215, 226);
      outline-offset: -1rem;
      opacity: 1;
    }
  }
  .box-client {
    background: url("@/assets/images/bg/blog-bg.png") no-repeat;
    background-position: center;
    background-size: cover;
  }
  .box-admin {
    background: url("@/assets/images/bg/admin-bg.webp")  no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>
