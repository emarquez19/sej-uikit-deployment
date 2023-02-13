<template>
  <div class="py-4 mb-3 container-fluid mark-as-divider">
    <div class="row">
        <div class="col-12 mb-3 d-flex align-items-center justify-content-between">
            <h5><i class="las la-book-open"></i> Lista de Componentes disponibles</h5>
            <h6 class="text-sm">(21) Encontrados</h6>
        </div>
        <div class="col-xl-3 col-sm-12 mb-xl-0 mb-4 components-scroll-list">
            <div class="row">
                <div class="col-12">
                    <router-link to="/uikit/accordions" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Acordeones'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/alerts" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Alertas'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/badges" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Badges'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/breadcrumbs" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Breadcrumb'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/buttons" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Botones'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/buttons-gp" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Grupo de botones'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/cards" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Tarjetas'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/carousel" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Carruseles'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/collapse" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Colapsables'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/dropdowns" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Dropdrowns'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/forms" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Formularios & Inputs'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/listgroups" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Listas & Grupos'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/modals" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Modales'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/tabs" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Tabs'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/floating" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Paneles Flotantes'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/pagination" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Paginadores'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/popovers" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Popovers'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/progress" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Barras de Progreso'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/loaders" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Loaders'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/tables" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Tablas'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/toasts" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Toasters'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
                <div class="col-12">
                    <router-link to="/uikit/tooltips" @click="returnScrollToTop">
                        <card
                            :title="'Comp. Bootstrap'"
                            :value="'Tooltips'"
                            :icon-class="'lab la-bootstrap'"
                            :icon-background="stats.iconBackground"
                            direction-reverse
                        ></card>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="col-xl-9 col-sm-12 mb-xl-0 mb-4 components-scroll-list-detail" ref="componentsScrollListDetail">
            <router-view name="componentsDetail" />
        </div>
    </div>
  </div>
</template>
<script>

import imgBgAnuncioType1 from "../assets/img/bg-anuncio.jpg";
import imgBgAnuncioType2 from "../assets/img/bg-anuncio2.jpg";
import Card from "@/examples/Cards/Card.vue";

export default {
  name: "Uikit",
  components: {
    Card,
  },
  data() {
    return {
      stats: {
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
  methods: {
    returnScrollToTop() {
        this.$refs.componentsScrollListDetail.scrollTop = 0;
    }
  },
};
</script>
