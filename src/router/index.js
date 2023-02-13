import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Uikit from "@/views/Uikit.vue";
import AlertHtmlComponent from "@/views/components/Alerts.vue";
import AccordionsHtmlComponent from "@/views/components/Accordions.vue";
import BadgesHtmlComponent from "@/views/components/Badges.vue";
import BreadcrumbHtmlComponent from "@/views/components/Breadcrumbs.vue";
import ButtonsHtmlComponent from "@/views/components/Buttons.vue";
import ButtonsGroupHtmlComponent from "@/views/components/ButtonsGroup.vue";
import CardsHtmlComponent from "@/views/components/CardsInfo.vue";
import CarouselHtmlComponent from "@/views/components/Carousel.vue";
import CollapseHtmlComponent from "@/views/components/Collapse.vue";
import DropdownsHtmlComponent from "@/views/components/Dropdowns.vue";
import ListsGroupsHtmlComponent from "@/views/components/ListsGroups.vue";
import ModalsHtmlComponent from "@/views/components/Modals.vue";
import TabsHtmlComponent from "@/views/components/Tabs.vue";
import FloatingCanvasHtmlComponent from "@/views/components/FloatingCanvas.vue";
import PaginationHtmlComponent from "@/views/components/Paginations.vue";
import PopoversHtmlComponent from "@/views/components/Popovers.vue";
import ProgressHtmlComponent from "@/views/components/Progress.vue";
import LoadersHtmlComponent from "@/views/components/Loaders.vue";
import ToastsHtmlComponent from "@/views/components/Toasts.vue";
import TooltipsHtmlComponent from "@/views/components/Tooltips.vue";
import TablesHtmlComponent from "@/views/components/Tables.vue";
import FormsHtmlComponent from "@/views/components/Forms.vue";
import Profile from "@/views/Profile.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Tablero Principal",
    component: Dashboard,
  },
  {
    path: "/layouts",
    name: "Layouts",
    component: Dashboard,
  },
  {
    path: "/profile",
    name: "Perfil de usuario",
    component: Profile,
  },
  {
    path: "/login",
    name: "Login",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Register",
    component: SignUp,
  },
    {
    path: "/uikit",
    name: "Uikit",
    component: Uikit,
    children: [
      {
        path: "",
        redirect: "/uikit/accordions",
        components: {
          componentsDetail: AccordionsHtmlComponent 
        }
      },
      {
        path: '/uikit/accordions',
        name: "Acordeones",
        components: {
          componentsDetail: AccordionsHtmlComponent 
        }
      },
      {
        path: '/uikit/alerts',
        name: "Alertas",
        components: {
          componentsDetail: AlertHtmlComponent
        }
      },
      {
        path: '/uikit/badges',
        name: "Badges",
        components: {
          componentsDetail: BadgesHtmlComponent
        }
      },
      {
        path: '/uikit/breadcrumbs',
        name: "Breadcrumbs",
        components: {
          componentsDetail: BreadcrumbHtmlComponent
        }
      },
      {
        path: '/uikit/buttons',
        name: "Botones",
        components: {
          componentsDetail: ButtonsHtmlComponent
        }
      },
      {
        path: '/uikit/buttons-gp',
        name: "Grupo de Botones",
        components: {
          componentsDetail: ButtonsGroupHtmlComponent
        }
      },
      {
        path: '/uikit/cards',
        name: "Tarjetas",
        components: {
          componentsDetail: CardsHtmlComponent
        }
      },
      {
        path: '/uikit/carousel',
        name: "Carousel",
        components: {
          componentsDetail: CarouselHtmlComponent
        }
      },
      {
        path: '/uikit/collapse',
        name: "Colapsables",
        components: {
          componentsDetail: CollapseHtmlComponent
        }
      },
      {
        path: '/uikit/dropdowns',
        name: "Dropdowns",
        components: {
          componentsDetail: DropdownsHtmlComponent
        }
      },
      {
        path: '/uikit/listgroups',
        name: "Listas y Grupos",
        components: {
          componentsDetail: ListsGroupsHtmlComponent
        }
      },
      {
        path: '/uikit/modals',
        name: "Modales y Dialogos",
        components: {
          componentsDetail: ModalsHtmlComponent
        }
      },
      {
        path: '/uikit/tabs',
        name: "Tabs",
        components: {
          componentsDetail: TabsHtmlComponent
        }
      },
      {
        path: '/uikit/floating',
        name: "Paneles Flotantes",
        components: {
          componentsDetail: FloatingCanvasHtmlComponent
        }
      },
      {
        path: '/uikit/pagination',
        name: "Paginadores",
        components: {
          componentsDetail: PaginationHtmlComponent
        }
      },
      {
        path: '/uikit/popovers',
        name: "Popovers",
        components: {
          componentsDetail: PopoversHtmlComponent
        }
      },
      {
        path: '/uikit/progress',
        name: "Barras de Progreso",
        components: {
          componentsDetail: ProgressHtmlComponent
        }
      },
      {
        path: '/uikit/loaders',
        name: "Loaders",
        components: {
          componentsDetail: LoadersHtmlComponent
        }
      },
      {
        path: '/uikit/toasts',
        name: "Toasters",
        components: {
          componentsDetail: ToastsHtmlComponent
        }
      },
      {
        path: '/uikit/tooltips',
        name: "Tooltips",
        components: {
          componentsDetail: TooltipsHtmlComponent
        }
      },
      {
        path: '/uikit/tables',
        name: "Tablas y DataTables",
        components: {
          componentsDetail: TablesHtmlComponent
        }
      },
      {
        path: '/uikit/forms',
        name: "Formularios e Inputs",
        components: {
          componentsDetail: FormsHtmlComponent
        }
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

export default router;
