<template>
  <div class="container-fluid">
    <div
      class="mt-4 page-header min-height-200 border-radius-xl"
      :style="{
        backgroundImage:`url(${bgImg})`,

        backgroundPositionY: '50%',
      }"
    >
      <!-- <span class="mask bg-gradient-success opacity-6"></span> -->
    </div>
    <div class="mx-2 mx-sm-2 mx-md-3 mx-lg-4 overflow-hidden card card-body blur shadow-blur mt-n3 mt-sm-n5 mt-md-n5 mt-xl-n6">
      <div class="row gx-4">
        <div class="col-auto d-flex align-items-center">
          <div class="avatar avatar-xl position-relative">
            <img
              :src="avatar"
              alt="Edwin Marquez"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1 bolder">Edwin Marquez</h5>
            <p class="mb-0 text-sm font-weight-bold">Diseñador UX/UI</p>
          </div>
        </div>
        <div
          class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
        >
          <div class="btn-group-holder d-flex justify-content-end">
            <a class="btn btn-table-actions outline-only large-action static-actions me-2 mb-0" href="javascript:void(0);" role="button"><i class="las la-phone-volume"></i></a>
            <a class="btn btn-table-actions large-action static-actions me-2 mb-0" href="javascript:void(0);" role="button"><i class="las la-envelope-open-text"></i></a>
            <a class="btn btn-table-actions large-action static-actions me-2 mb-0" href="javascript:void(0);" role="button"><i class="la la-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-3 row">
      <div class="col-12 col-md-6 col-xl-4">
        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-0">Configuraciones</h6>
          </div>
          <div class="p-3 card-body">
            <h6 class="text-xs text-uppercase text-body font-weight-bolder">
              Cuenta
            </h6>
            <ul class="list-group">
              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault"
                  class="ps-0"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  input-class="ms-auto"
                  checked
                  >Lorem ipsum dolor sit amet, consectetur.</vsud-switch
                >
              </li>
              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault1"
                  class="ps-0"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  input-class="ms-auto"
                  >Duis aute irure dolor in reprehenderit</vsud-switch
                >
              </li>

              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault2"
                  class="ps-0"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  input-class="ms-auto"
                  checked
                  >Lorem ipsum dolor sit amet, consectetur.</vsud-switch
                >
              </li>
            </ul>
            <h6
              class="mt-4 text-xs text-uppercase text-body font-weight-bolder"
            >
              Permisos
            </h6>
            <ul class="list-group">
              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault3"
                  class="ps-0"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  input-class="ms-auto"
                  >Excepteur sint occaecat cupidatat</vsud-switch
                >
              </li>
              <li class="px-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault4"
                  class="ps-0"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  input-class="ms-auto"
                  checked
                  >Excepteur sint</vsud-switch
                >
              </li>
              <li class="px-0 pb-0 border-0 list-group-item">
                <vsud-switch
                  id="flexSwitchCheckDefault5"
                  class="ps-0"
                  label-class="mb-0 text-body ms-3 text-truncate w-80"
                  input-class="ms-auto"
                  >Nostrud exercitation ullamco</vsud-switch
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 col-12 col-md-6 col-xl-4 mt-md-0">
        <profile-card />
      </div>
      <div class="mt-4 col-12 col-xl-4 mt-xl-0">
        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <div class="row">
              <div class="col-md-8 d-flex align-items-center">
                <h6 class="mb-0">Últimos Mensajes</h6>
              </div>
              <div class="col-md-4 text-end">
                <a href="javascript:;">
                  <i
                    class="text-sm fas fa-comments text-primary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Ver Mensajes"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div class="p-3 card-body">
            <ul class="list-group">
              <li
                class="px-0 mb-2 border-0 list-group-item d-flex align-items-center"
              >
                <vsud-avatar
                  class="me-3"
                  :img="tauriel"
                  alt="Tauriel"
                  border-radius="lg"
                  shadow="regular"
                />
                <div
                  class="d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="mb-0 text-sm">Tauriel Silvana</h6>
                  <p class="mb-0 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
                <a
                  class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                  href="javascript:;"
                  >Enviar</a
                >
              </li>
              <li
                class="px-0 mb-2 border-0 list-group-item d-flex align-items-center"
              >
                <vsud-avatar
                  class="me-3"
                  :img="marie"
                  alt="kal"
                  border-radius="lg"
                  shadow="regular"
                />
                <div
                  class="d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="mb-0 text-sm">Anne Marie</h6>
                  <p class="mb-0 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
                <a
                  class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                  href="javascript:;"
                  >Enviar</a
                >
              </li>
                            <li
                class="px-0 mb-2 border-0 list-group-item d-flex align-items-center"
              >
                <vsud-avatar
                  class="me-3"
                  :img="norin"
                  alt="Norin Rad"
                  border-radius="lg"
                  shadow="regular"
                />
                <div
                  class="d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="mb-0 text-sm">Norin Rad</h6>
                  <p class="mb-0 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
                <a
                  class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                  href="javascript:;"
                  >Enviar</a
                >
              </li>
              <li
                class="px-0 mb-2 border-0 list-group-item d-flex align-items-center"
              >
                <vsud-avatar
                  class="me-3"
                  :img="ivana"
                  alt="Ivanna Smith"
                  border-radius="lg"
                  shadow="regular"
                />
                <div
                  class="d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="mb-0 text-sm">Ivanna Smith</h6>
                  <p class="mb-0 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
                <a
                  class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                  href="javascript:;"
                  >Enviar</a
                >
              </li>
              <li
                class="px-0 border-0 list-group-item d-flex align-items-center"
              >
                <vsud-avatar
                  class="me-3"
                  :img="peter"
                  alt="Peter Parker"
                  border-radius="lg"
                  shadow="regular"
                />
                <div
                  class="d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="mb-0 text-sm">Peter Parker</h6>
                  <p class="mb-0 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
                <a
                  class="mb-0 btn btn-link pe-3 ps-0 ms-auto"
                  href="javascript:;"
                  >Enviar</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <div class="mb-4 card">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-1">Mis Proyectos</h6>
            <p class="text-sm">Actualmente estas colaborando en <b>3 proyectos</b> ¡Exitos!</p>
          </div>
          <div class="p-3 card-body">
            <div class="row">
              <div class="mb-4 col-xl-3 col-md-6 mb-xl-0">
                <projects-card
                  :img="img1"
                  :number="1"
                  title="Plataforma Gobteams"
                  description="Duis aute irure dolor in reprehenderit in voluptate velit essecillum."
                  :img-team1="tauriel"
                  title-team1="Tauriel Silvana"
                  :img-team2="peter"
                  title-team2="Peter Parker"
                  :img-team3="marie"
                  title-team3="Marie Smith"
                  :img-team4="norin"
                  title-team4="Norin Rad"
                />
              </div>
              <div class="mb-4 col-xl-3 col-md-6 mb-xl-0">
                <projects-card
                  :img="img2"
                  :number="2"
                  title="Portal 200 Años"
                  description="Duis aute irure dolor in reprehenderit in voluptate velit essecillum."
                  :img-team1="tauriel"
                  title-team1="Tauriel Silvana"
                  :img-team2="peter"
                  title-team2="Peter Parker"
                  :img-team3="marie"
                  title-team3="Marie Smith"
                  :img-team4="norin"
                  title-team4="Norin Rad"
                />
              </div>
              <div class="mb-4 col-xl-3 col-md-6 mb-xl-0">
                <projects-card
                  :img="img3"
                  :number="3"
                  title="Minimalismo 2023"
                  description="Duis aute irure dolor in reprehenderit in voluptate velit essecillum."
                  :img-team1="tauriel"
                  title-team1="Tauriel Silvana"
                  :img-team2="peter"
                  title-team2="Peter Parker"
                  :img-team3="marie"
                  title-team3="Marie Smith"
                  :img-team4="norin"
                  title-team4="Norin Rad"
                />
              </div>
              <div class="mb-4 col-xl-3 col-md-6 mb-xl-0">
                <div class="border card h-100 card-plain">
                  <div
                    class="text-center card-body d-flex flex-column justify-content-center"
                  >
                    <a href="javascript:;">
                      <i class="mb-3 fa fa-plus text-3xl text-primary"></i>
                      <h5 class="text-dark">Nuevo Proyecto</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VsudSwitch from "@/components/VsudSwitch.vue";
import ProfileCard from "./components/ProfileCard.vue";
import VsudAvatar from "../components/VsudAvatar.vue";
import avatar from "@/assets/img/edwin-marquez.jpg";
import tauriel from "@/assets/img/kal-visuals-square.jpg";
import marie from "@/assets/img/marie.jpg";
import ivana from "@/assets/img/ivana-square.jpg";
import norin from "@/assets/img/team-4.jpg";
import nick from "@/assets/img/edwin-marquez.jpg";
import img1 from "@/assets/img/project-1.jpg";
import img2 from "@/assets/img/project-2.jpg";
import img3 from "@/assets/img/project-3.jpg";
import team1 from "@/assets/img/team-1.jpg";
import peter from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/edwin-marquez.jpg";
import team4 from "@/assets/img/team-4.jpg";
import bgImg from "@/assets/img/bg-perfil.jpg"
import ProjectsCard from "./components/ProjectOverviewCard.vue";

// import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "ProfileOverview",
  components: {
    VsudSwitch,
    ProfileCard,
    VsudAvatar,
    ProjectsCard,
  },
  data() {
    return {
      showMenu: false,
      tauriel,
      avatar,
      marie,
      ivana,
      norin,
      nick,
      img1,
      team1,
      peter,
      team3,
      team4,
      img2,
      img3,
      bgImg
    };
  },

  mounted() {
    // this.$store.state.isAbsolute = false;
    // this.$store.state.isNavFixed = true;
    // setNavPills();
    setTooltip();
  },
  beforeUnmount() {
    // this.$store.state.isAbsolute = true;
  },
};
</script>
