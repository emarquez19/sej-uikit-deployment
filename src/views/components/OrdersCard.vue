<template>
  <div class="mb-3 card pb-4">
    <div class="card-header pb-0">
      <h6>{{ title }}</h6>
      <p class="text-sm">
        <i class="fa fa-arrow-up text-success me-2" aria-hidden="true"></i>
        <span class="font-weight-bold me-2">54%</span>
        {{ text }}
      </p>
    </div>
    <div class="card-body p-3">
      <div class="timeline timeline-one-side">
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="las la-brain text-xl text-success text-gradient"></i>
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">Análisis y discusión</h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">02 Ene 2023</p>
          </div>
        </div>
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="las la-palette text-xl text-info text-gradient"></i>
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">Solicitud de Recursos Gráficos</h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">04 Ene 2023</p>
          </div>
        </div>
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="lab la-html5 text-xl text-danger text-gradient"></i>
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">Solicitud de HTML</h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">11 Ene 2023</p>
          </div>
        </div>
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="las la-code text-xl text-warning text-gradient"></i>
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">Integración con Backend</h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">24 Ene 2023 / Pendiente</p>
          </div>
        </div>
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="las la-laptop-code text-xl text-primary text-gradient"></i>
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">Pruebas y Rendimiento</h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">30 Ene 2023 / Pendiente</p>
          </div>
        </div>
        <div class="timeline-block">
          <span class="timeline-step">
            <i class="las la-users text-xl text-dark text-gradient"></i>
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">Envio a Producción</h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">02 Feb 2023 / Pendiente</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersCard",
  props: {
    title: {
      type: String,
      default: "Gobteams: Despliegue #2",
    },
    text: {
      type: String,
      default: "Enero 2023",
    },
  },
};
</script>
