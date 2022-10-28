<template>
  <div>
    <title-content category="Blogs" title="Blogs" bgSrc="" />
    <section class="section blog-wrap bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-6 col-md-6 mb-5">
                <div class="blog-item">
                  <img src="" alt="" class="img-fluid rounded" />

                  <div class="blog-item-content bg-white p-4">
                    <div class="blog-item-meta py-1 px-2">
                      <span class="text-muted text-capitalize mr-3"
                        ><i class="ti-pencil-alt mr-2"></i>Creativity</span
                      >
                    </div>

                    <h3 class="mt-3 mb-3">
                      <a href="blog-single.html"
                        >Improve design with typography?</a
                      >
                    </h3>
                    <p class="mb-4">
                      Non illo quas blanditiis repellendus laboriosam minima
                      animi. Consectetur accusantium pariatur repudiandae!
                    </p>

                    <a
                      href="blog-single.html"
                      class="btn btn-small btn-main btn-round-full"
                      >Learn More</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 mb-5">
                <div class="blog-item">
                  <img src="" alt="" class="img-fluid rounded" />

                  <div class="blog-item-content bg-white p-4">
                    <div class="blog-item-meta py-1 px-2">
                      <span class="text-muted text-capitalize mr-3"
                        ><i class="ti-pencil-alt mr-2"></i>Design</span
                      >
                    </div>

                    <h3 class="mt-3 mb-3">
                      <a href="blog-single.html"
                        >Interactivity connect consumer</a
                      >
                    </h3>
                    <p class="mb-4">
                      Non illo quas blanditiis repellendus laboriosam minima
                      animi. Consectetur accusantium pariatur repudiandae!
                    </p>

                    <a
                      href="blog-single.html"
                      class="btn btn-small btn-main btn-round-full"
                      >Learn More</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 mb-5">
                <div class="blog-item">
                  <img src="" alt="" class="img-fluid rounded" />

                  <div class="blog-item-content bg-white p-4">
                    <div class="blog-item-meta py-1 px-2">
                      <span class="text-muted text-capitalize mr-3"
                        ><i class="ti-pencil-alt mr-2"></i>Community</span
                      >
                    </div>

                    <h3 class="mt-3 mb-3">
                      <a href="blog-single.html"
                        >Marketing Strategy to bring more affect</a
                      >
                    </h3>
                    <p class="mb-4">
                      Non illo quas blanditiis repellendus laboriosam minima
                      animi. Consectetur accusantium pariatur repudiandae!
                    </p>

                    <a
                      href="blog-single.html"
                      class="btn btn-small btn-main btn-round-full"
                      >Learn More</a
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 mb-5">
                <div class="blog-item">
                  <img src="" alt="" class="img-fluid rounded" />

                  <div class="blog-item-content bg-white p-4">
                    <div class="blog-item-meta py-1 px-2">
                      <span class="text-muted text-capitalize mr-3"
                        ><i class="ti-pencil-alt mr-2"></i>Marketing</span
                      >
                    </div>

                    <h3 class="mt-3 mb-3">
                      <a href="blog-single.html"
                        >Marketing Strategy to bring more affect</a
                      >
                    </h3>
                    <p class="mb-4">
                      Non illo quas blanditiis repellendus laboriosam minima
                      animi. Consectetur accusantium pariatur repudiandae!
                    </p>

                    <a
                      href="blog-single.html"
                      class="btn btn-small btn-main btn-round-full"
                      >Learn More</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <side-bar />
        </div>
        <div class="row mt-5">
          <div class="col-lg-8">
            <nav class="navigation pagination py-2 d-inline-block">
              <div class="nav-links">
                <a class="prev page-numbers" href="#">Prev</a>
                <span aria-current="page" class="page-numbers current">1</span>
                <a class="page-numbers" href="#">2</a>
                <a class="next page-numbers" href="#">Next</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import TitleContent from "@/components/clients/TitleContent.vue";
import SideBar from "@/components/clients/SideBar.vue";
export default {
  components: { TitleContent, SideBar },
};
</script>
<style>
</style>
