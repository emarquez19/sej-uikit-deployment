<template>
  <div
    id="sidenav-collapse-main"
    class="w-auto collapse navbar-collapse nav-side-only"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse nav-text="Tablero Principal" :to="{ name: 'Tablero Principal' }">
          <template #icon>
            <i class="las la-chalkboard"></i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Layouts" :to="{ name: 'Layouts' }">
          <template #icon>
            <i class="las la-columns"></i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="$store.state.isRTL ? 'me-4' : 'ms-0'"
        >PÁGINAS</h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Perfil" :to="{ name: 'Perfil de usuario' }">
          <template #icon>
            <i class="las la-user"></i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Login" :to="{ name: 'Login' }">
          <template #icon>
            <i class="las la-sign-in-alt"></i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Registro" :to="{ name: 'Register' }">
          <template #icon>
            <i class="las la-user-plus"></i>
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <sidenav-card
      :class="cardBg"
      text-primary="¿Buscas los Componentes?"
      link-text="Ver UIKIT"
      icon-class="las la-network-wired"
    />
  </div>
</template>
<script>
import Icon from "@/components/Icon.vue";
import SidenavCollapse from "./SidenavCollapse.vue";
import SidenavCard from "./SidenavCard.vue";

export default {
  name: "SidenavList",
  components: {
    Icon,
    SidenavCollapse,
    SidenavCard,
  },
  props: {
    cardBg: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      title: "SEJ UI KIT Tablero",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>
