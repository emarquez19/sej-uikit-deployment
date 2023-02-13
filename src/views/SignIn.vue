<template>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-6 col-md-7 d-flex flex-column">
              <img :src="logo" class="img-logo-login mt-7 mb-2" alt="main_logo" />
              <div class="mt-3 card card-plain bg-white">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-primary text-gradient">¡Bienvenidos!</h3>
                  <p class="mb-0">Ingresa tus datos de acceso para continuar</p>
                </div>
                <div class="card-body">
                  <form role="form" class="text-start">
                    <label class="fs-6">Correo Electrónico</label>
                    <vsud-input type="email" placeholder="Email" name="email" iconDir="left" icon="las la-lock" />
                    <label class="fs-6">Password</label>
                    <vsud-input type="password" placeholder="Password" name="password" iconDir="left" icon="las la-user" />
                    <vsud-switch id="rememberMe" checked class="primary-switch">Recordar cuenta</vsud-switch>
                    <div class="text-center">
                      <vsud-button
                        class="my-4 justify-content-center"
                        variant=""
                        color="primary"
                        full-width
                      >Acceder al Sistema</vsud-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    ¿No tienes cuenta? 
                    <router-link class="text-primary font-weight-bold" :to="'sign-up'">
                     Registro
                    </router-link>
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="mx-auto mt-4 mb-4 text-center col-lg-8">
                  <a
                    href="javascript:;"
                    target="_blank"
                    class="text-black me-xl-4 me-4"
                  >
                    <span class="text-lg fab fa-facebook"></span>
                  </a>
                  <a
                    href="javascript:;"
                    target="_blank"
                    class="text-black me-xl-4 me-4"
                  >
                    <span class="text-lg fab fa-twitter"></span>
                  </a>
                  <a
                    href="javascript:;"
                    target="_blank"
                    class="text-black me-xl-4 me-4"
                  >
                    <span class="text-lg fab fa-instagram"></span>
                  </a>
                  <a
                    href="javascript:;"
                    target="_blank"
                    class="text-black me-xl-4 me-4"
                  >
                    <span class="text-lg fab fa-whatsapp"></span>
                  </a>
                </div>
                <div class="mx-auto text-center col-12">
                    <!-- <p class="mb-2 text-black text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> -->
                    <p class="mb-0 text-black text-sm">
                      Copy © {{ new Date().getFullYear() }} Secretaría de Educación Pública.
                    </p>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <img :src="loginSide" class="img-login-side ms-lg-n8 ms-md-n9 mt-n9 mt-sm-0" alt="main_logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- <app-footer /> -->
</template>

<script>
import AppFooter from "@/examples/PageLayout/Footer.vue";
import VsudInput from "@/components/VsudInput.vue";
import VsudSwitch from "@/components/VsudSwitch.vue";
import VsudButton from "@/components/VsudButton.vue";
import bgImg from "@/assets/img/bg-login.jpg"
import logo from "@/assets/img/logo-brand.png";
import loginSide from "@/assets/img/secretaria.png";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "SigninPage",
  components: {
    AppFooter,
    VsudInput,
    VsudSwitch,
    VsudButton,
  },
  data() {
    return {
      bgImg,
      logo,
      loginSide
    }
  },
  beforeMount() {
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
