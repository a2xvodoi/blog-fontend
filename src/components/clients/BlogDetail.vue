<template>
  <div v-if="!isPending">
    <title-content
      :category="dataDetail.blog.summary"
      :title="dataDetail.blog.title"
      :bgSrc="dataDetail.blog.image"
    />
    <section class="section blog-wrap bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-12 mb-5">
                <div class="single-blog-item">
                  <img
                    src=""
                    alt=""
                    class="img-fluid rounded"
                  />

                  <div class="blog-item-content bg-white p-5">
                    <div class="blog-item-meta bg-gray py-1 px-2">
                      <span class="text-muted text-capitalize mr-3"
                        ><i class="ti-pencil-alt mr-2"></i>Creativity</span
                      >
                      <span class="text-muted text-capitalize mr-3"
                        ><i class="ti-comment mr-2"></i>5 Comments</span
                      >
                      <span class="text-black text-capitalize mr-3"
                        ><i class="ti-time mr-1"></i> 28th January</span
                      >
                    </div>

                    <h2 class="mt-3 mb-4">
                      {{ dataDetail.blog.title }}
                    </h2>
                    <div class="content" v-html="dataDetail.blog.content"></div>

                    <div class="tag-option mt-5 clearfix">
                      <ul class="float-left list-inline">
                        <li class="text-capitalize">{{ $t("tags") }}:</li>
                        <li
                          class="list-inline-item"
                          v-for="tag in dataDetail.tags"
                          :key="tag.id"
                        >
                          <router-link
                            :to="{
                              name: 'blog-by-tag',
                              params: { slug: tag.slug },
                            }"
                            >{{ tag.title }}</router-link
                          >
                        </li>
                      </ul>

                      <ul class="float-right list-inline">
                        <li class="list-inline-item">Share:</li>
                        <li class="list-inline-item">
                          <a href="#" target="_blank"
                            ><i class="fab fa-facebook-f" aria-hidden="true"></i
                          ></a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" target="_blank"
                            ><i class="fab fa-twitter" aria-hidden="true"></i
                          ></a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" target="_blank"
                            ><i
                              class="fab fa-pinterest-p"
                              aria-hidden="true"
                            ></i
                          ></a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" target="_blank"
                            ><i
                              class="fab fa-google-plus"
                              aria-hidden="true"
                            ></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-12 mb-5">
                <div
                  class="
                    posts-nav
                    bg-white
                    p-5
                    d-lg-flex d-md-flex
                    justify-content-between
                  "
                >
                  <a class="post-prev align-items-center" href="#">
                    <div class="posts-prev-item mb-4 mb-lg-0">
                      <span class="nav-posts-desc text-color"
                        >- Previous Post</span
                      >
                      <h6 class="nav-posts-title mt-1">
                        Donec consectetuer ligula <br />vulputate sem tristique.
                      </h6>
                    </div>
                  </a>
                  <div class="border"></div>
                  <a class="posts-next" href="#">
                    <div class="posts-next-item pt-4 pt-lg-0">
                      <span
                        class="
                          nav-posts-desc
                          text-lg-right text-md-right text-color
                          d-block
                        "
                        >- Next Post</span
                      >
                      <h6 class="nav-posts-title mt-1">
                        Ut aliquam sollicitudin leo.
                      </h6>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-lg-12 mb-5">
                <div class="comment-area card border-0 p-5">
                  <h4 class="mb-4">2 Comments</h4>
                  <ul class="comment-tree list-unstyled">
                    <li class="mb-5">
                      <div class="comment-area-box">
                        <img
                          alt=""
                          src=""
                          class="img-fluid float-left mr-3 mt-2"
                        />

                        <h5 class="mb-1">Philip W</h5>
                        <span>United Kingdom</span>

                        <div
                          class="
                            comment-meta
                            mt-4 mt-lg-0 mt-md-0
                            float-lg-right float-md-right
                          "
                        >
                          <a href="#"
                            ><i class="icofont-reply mr-2 text-muted"></i>Reply
                            |</a
                          >
                          <span class="date-comm">Posted October 7, 2018 </span>
                        </div>

                        <div class="comment-content mt-3">
                          <p>
                            Some consultants are employed indirectly by the
                            client via a consultancy staffing company, a company
                            that provides consultants on an agency basis.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="comment-area-box">
                        <img
                          alt=""
                          src=""
                          class="mt-2 img-fluid float-left mr-3"
                        />

                        <h5 class="mb-1">Philip W</h5>
                        <span>United Kingdom</span>

                        <div
                          class="
                            comment-meta
                            mt-4 mt-lg-0 mt-md-0
                            float-lg-right float-md-right
                          "
                        >
                          <a href="#"
                            ><i class="icofont-reply mr-2 text-muted"></i>Reply
                            |</a
                          >
                          <span class="date-comm">Posted October 7, 2018</span>
                        </div>

                        <div class="comment-content mt-3">
                          <p>
                            Some consultants are employed indirectly by the
                            client via a consultancy staffing company, a company
                            that provides consultants on an agency basis.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-12">
                <form
                  class="contact-form bg-white rounded p-5"
                  id="comment-form"
                >
                  <h4 class="mb-4">Write a comment</h4>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name:"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          name="mail"
                          id="mail"
                          placeholder="Email:"
                        />
                      </div>
                    </div>
                  </div>

                  <textarea
                    class="form-control mb-3"
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="5"
                    placeholder="Comment"
                  ></textarea>

                  <input
                    class="btn btn-main btn-round-full"
                    type="submit"
                    name="submit-contact"
                    id="submit_contact"
                    value="Submit Message"
                  />
                </form>
              </div>
            </div>
          </div>
          <side-bar />
        </div>
      </div>
    </section>
  </div>
  <loading-icon v-show="isPending"/>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TitleContent from "@/components/clients/TitleContent.vue";
import SideBar from "@/components/clients/SideBar.vue";

export default {
  components: { TitleContent, SideBar },
  setup() {
    const store = useStore();
    const isPending = computed(() => store.state.blog.isPending);
    const dataDetail = computed(() => store.state.blog.item);

    return { isPending, dataDetail };
  },
};
</script>
<style>
</style>
