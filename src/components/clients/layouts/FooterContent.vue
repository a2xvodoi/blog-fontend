<template>
  <!-- footer Start -->
  <footer class="footer section">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="widget">
            <h4 class="text-capitalize mb-4">Company</h4>

            <ul class="list-unstyled footer-menu lh-35">
              <li>
                <router-link to="">Terms & Conditions</router-link>
              </li>
              <li>
                <router-link to="">Privacy Policy</router-link>
              </li>
              <li>
                <router-link to="">Support</router-link>
              </li>
              <li>
                <router-link to="">FAQ</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="widget">
            <h4 class="text-capitalize mb-4">Quick Links</h4>

            <ul class="list-unstyled footer-menu lh-35">
              <li>
                <router-link :to="{ name: 'about' }">About</router-link>
              </li>
              <li>
                <router-link to="">Services</router-link>
              </li>
              <li>
                <router-link to="">Team</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'contact' }">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="widget">
            <h4 class="text-capitalize mb-4">Subscribe Us</h4>
            <p>Subscribe to get latest news article and resources</p>

            <form action="#" class="sub-form">
              <input
                type="text"
                class="form-control mb-3"
                placeholder="Subscribe Now ..."
              />
              <button @click.prevent="" class="btn btn-main btn-small">
                subscribe
              </button>
            </form>
          </div>
        </div>

        <div class="col-lg-3 ml-auto col-sm-6">
          <div class="widget">
            <div class="logo mb-4">
              <h3>VA<span>log</span></h3>
            </div>
            <h6>
              <a href="mailto:supportvalog@gmail.com">Support@valog.com</a>
            </h6>
            <a href="tel:+84-124-45678"
              ><span class="text-color h4">+84-124-45678</span></a
            >
          </div>
        </div>
      </div>

      <footer-content-copyright />
    </div>
  </footer>
</template>
<script>
import FooterContentCopyright from "./FooterContentCopyright.vue";

export default {
  components: { FooterContentCopyright },
};
</script>
