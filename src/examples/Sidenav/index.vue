<template>
  <aside
    id="sidenav-main"
    class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl bg-white force-white-bg"
    :class="$store.state.isRTL ? 'me-3 rotate-caret' : 'ms-3'"
    :data-color="sidenavActiveBgColors"
  >
    <div class="sidenav-header">
      <a
        id="iconNavbarSidenavMenuVertical"
        href="javascript:void(0);"
        class="p-0 nav-link text-body d-xl-none d-flex align-items-center toggler-menu-mobile"
        @click="toggleSidebar"
      >
        <div class="sidenav-toggler-inner">
          <i class="las la-angle-left"></i>
        </div>
      </a>
      <i
        id="iconSidenav"
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
      ></i>
      <a class="m-0 navbar-brand" href="/">
        <img :src="logo" class="navbar-brand-img h-100" alt="main_logo" />
      </a>
    </div>
    <hr class="mt-0 horizontal dark" />
    <sidenav-list :card-bg="customClass" />
  </aside>
</template>
<script>
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/img/logo-brand.png";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "IndexComponent",
  components: {
    SidenavList,
  },
  props: {
    customClass: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      logo,
      sidenavActiveBgColors: 'primary'
    };
  },
   methods: {
    ...mapMutations(["navbarMinimize"]),
    ...mapActions(["toggleSidebarColor"]),

    toggleSidebar() {
      this.toggleSidebarColor("bg-white");
      this.navbarMinimize();
    },

    someEvent() {
      alert("Ejecutamos algún evento");
      console.log("some event");
    },
  },
};
</script>
