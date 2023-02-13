<template>
  <!-- <div class="py-4 mb-3 container-fluid"> -->
  <div class="py-3 mb-3 container-fluid">
    <div class="row">
      <div class="col-xl-3 col-sm-6 mb-xl-0">
        <card
          :title="stats.info1.title"
          :value="stats.info1.value"
          :percentage="stats.info1.percentage"
          :icon-class="stats.info1.iconClass"
          :icon-background="stats.iconBackground"
          direction-reverse
        ></card>
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0">
        <card
          :title="stats.info2.title"
          :value="stats.info2.value"
          :percentage="stats.info2.percentage"
          :icon-class="stats.info2.iconClass"
          :icon-background="stats.iconBackground"
          direction-reverse
        ></card>
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0">
        <card
          :title="stats.info3.title"
          :value="stats.info3.value"
          :percentage="stats.info3.percentage"
          :icon-class="stats.info3.iconClass"
          :icon-background="stats.iconBackground"
          direction-reverse
        ></card>
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0">
        <card
          :title="stats.info4.title"
          :value="stats.info4.value"
          :percentage="stats.info4.percentage"
          :icon-class="stats.info4.iconClass"
          :percentage-color="stats.info4.percentageColor"
          :icon-background="stats.iconBackground"
          direction-reverse
        ></card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-5 mb-lg-0">
        <div class="card z-index-2 mb-3">
          <div class="p-3 card-body">
                        <!-- <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
    </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"><i class="las la-file-export text-success"></i>&nbsp;&nbsp;Acción #1</a></li>
                <li><a class="dropdown-item" href="#"><i class="las la-file-import text-info"></i>&nbsp;&nbsp;Acción #2</a></li>
                <li><a class="dropdown-item" href="#"><i class="las la-trash-alt text-primary"></i>&nbsp;&nbsp;Acción #3</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Acción #4</a></li>
            </ul> -->
            <!-- chart -->
            <active-users-chart />
          </div>
        </div>
      </div>
      <div class="col-lg-7 pb-3">
        <!-- line chart -->
        <div class="card z-index-2 mb-3 h-100">
          <gradient-line-chart />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 col-md-6 mb-md-0">
        <projects-card />
      </div>
      <div class="col-lg-4 col-md-6">
        <Orders-card />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7 mb-lg-0 mb-3">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex flex-column h-100">
                  <p class="mb-1 pt-2 text-bold">GOBTEAMS</p>
                  <h5 class="font-weight-bolder">Liberación #2 Programada</h5>
                  <p class="mb-5 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua.
                  </p>
                  <a
                    class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                    href="javascript:;"
                  >
                    Ver detalles
                    <i
                      class="fas fa-arrow-right text-sm ms-1"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                <div class="border-radius-lg h-100 bg-notice-type-2" v-bind:style="{ 'background-image': 'url(' + imgBgAnuncioType2 + ')' }">
                  <div
                    class="position-relative d-flex align-items-center justify-content-center h-100"
                  >
                    <img
                      class="w-100 position-relative z-index-2 pt-4 img-notify-helper"
                      src="../assets/img/campana.png" alt="Notificación" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card h-100 p-3">
          <div
            class="overflow-hidden position-relative border-radius-lg bg-cover h-100" v-bind:style="{ 'background-image': 'url(' + imgBgAnuncioType1 + ')' }">
            <div
              class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3"
            >
              <h5 class="text-white font-weight-bolder mb-4 pt-2">
                Título de la Notificación
              </h5>
              <p class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                class="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                href="javascript:;"
              >
                Ver detalles
                <i
                  class="fas fa-arrow-right text-sm ms-1"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imgBgAnuncioType1 from "../assets/img/bg-anuncio.jpg";
import imgBgAnuncioType2 from "../assets/img/bg-anuncio2.jpg";
import Card from "@/examples/Cards/Card.vue";
import ActiveUsersChart from "@/examples/Charts/ActiveUsersChart.vue";
import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import OrdersCard from "./components/OrdersCard.vue";
import ProjectsCard from "./components/ProjectsCard.vue";

export default {
  name: "DashboardDefault",
  components: {
    Card,
    ActiveUsersChart,
    GradientLineChart,
    ProjectsCard,
    OrdersCard,
  },
  data() {
    return {
      stats: {
        // iconBackground: "bg-gradient-primary",
        iconBackground: "bg-primary",
        info1: {
          title: "Título Estadística",
          value: "$4,500",
          percentage: "+08%",
          iconClass: "las la-wallet",
        },
        info2: {
          title: "Título Estadística",
          value: "300",
          percentage: "",
          iconClass: "las la-user-tie",
        },
        info3: {
          title: "Título Estadística",
          value: "+3,462",
          percentage: "",
          iconClass: "las la-book-open",
        },
        info4: {
          title: "Título Estadística",
          value: "$15,200",
          percentage: "-15%",
          iconClass: "las la-shopping-cart",
          percentageColor: "text-danger",
        },
      },
      imgBgAnuncioType1,
      imgBgAnuncioType2
    };
  },
};
</script>
