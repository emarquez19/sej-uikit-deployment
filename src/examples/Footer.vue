<template>
  <footer class="pb-3 footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="mb-4 col-lg-6 mb-lg-0">
          <img :src="logoJalisco" alt="Jalisco" class="logo-jalisco me-3">
          <img :src="logoEducacion" alt="Jalisco" class="logo-educacion-footer">
        </div>
        <div class="col-lg-6">
          <ul
            class="nav nav-footer justify-content-center justify-content-lg-end"
          >
            <li class="nav-item">
              <a
                href="#"
                class="nav-link text-muted"
                target="_blank"
                >Preguntas Frecuentes</a
              >
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link text-muted"
                target="_blank"
                >Aviso de privacidad</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import logoJalisco from "@/assets/img/jalisco_escudo.png";
import logoEducacion from "@/assets/img/logo-footer.png";
export default {
  name: "AppFooter",
  data() {
    return {
      logoJalisco,
      logoEducacion
    };
  },
};
</script>
