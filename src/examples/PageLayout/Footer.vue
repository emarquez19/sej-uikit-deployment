<template>
    <!-- -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->
  <footer class="py-4 footer">
    <div class="container">
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
      </div>
      <div class="row">
        <div class="mx-auto text-center col-8">
          <p class="mb-2 text-black text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p class="mb-0 text-black text-sm">
            Copy © {{ new Date().getFullYear() }} Secretaría de Educación Pública.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
