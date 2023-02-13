<template>
  <div class="py-3 mb-3 bg-alternative border-radius-lg pe-1">
    <div class="chart">
      <canvas id="chart-bars" class="chart-canvas" height="170"></canvas>
    </div>
  </div>
  <h6 class="mt-4 mb-0 ms-2">Usuarios Registrados</h6>
  <p class="text-sm ms-2">
    (<span class="font-weight-bolder">+5%</span>) que la quincena pasada
  </p>
  <div class="container border-radius-lg">
    <div class="row">
      <div class="py-3 col-3 ps-0">
        <div class="mb-2 d-flex">
          <p class="mt-1 mb-0 text-xs font-weight-bold">Usuarios<br>Registrados</p>
        </div>
        <h4 class="font-weight-bolder">3,600</h4>
        <div class="progress w-75">
          <div
            class="progress-bar bg-dark w-60"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="py-3 col-3 ps-0">
        <div class="mb-2 d-flex">
          <p class="mt-1 mb-0 text-xs font-weight-bold">Tickets<br>Resueltos</p>
        </div>
        <h4 class="font-weight-bolder">298</h4>
        <div class="progress w-75">
          <div
            class="progress-bar bg-dark w-90"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="py-3 col-3 ps-0">
        <div class="mb-2 d-flex">
          <p class="mt-1 mb-0 text-xs font-weight-bold">Tickets<br>Pendientes</p>
        </div>
        <h4 class="font-weight-bolder">37</h4>
        <div class="progress w-75">
          <div
            class="progress-bar bg-dark w-30"
            role="progressbar"
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="py-3 col-3 ps-0">
        <div class="mb-2 d-flex">
          <p class="mt-1 mb-0 text-xs font-weight-bold">Proyectos<br>en Puerta</p>
        </div>
        <h4 class="font-weight-bolder">11</h4>
        <div class="progress w-75">
          <div
            class="progress-bar bg-dark w-50"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "ActiveUsersChart",
  mounted() {
    var ctx = document.getElementById("chart-bars").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        datasets: [
          {
            label: "Usuarios Registrados",
            tension: 0.9,
            borderWidth: 0,
            borderRadius: 10,
            borderSkipped: true,
            backgroundColor: "#fff",
            data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
            maxBarThickness: 7,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 500,
              beginAtZero: true,
              padding: 10,
              font: {
                size: 14,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
              color: "#fff",
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  },
};
</script>
