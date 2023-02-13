<template>
  <div class="mb-3 card">
    <div class="card-header pb-0">
      <div class="row">
        <div class="col-lg-6 col-7">
          <h6>Titulo de la tabla</h6>
          <p class="text-sm mb-0">
            <i class="las la-award text-primary fs-6"></i>
            <span class="font-weight-bold ms-1">Título o Línea</span> estadística
          </p>
        </div>
        <div class="col-lg-6 col-5 my-auto text-end">
          <div class="dropdown float-lg-end pe-4">
            <a
              id="dropdownTable"
              class="cursor-pointer"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa fa-ellipsis-v text-dark" aria-hidden="true"></i>
            </a>
            <ul
              class="dropdown-menu px-2 py-2 ms-sm-n4 ms-n5"
              aria-labelledby="dropdownTable"
            >
              <li>
                <a class="dropdown-item border-radius-md links-action-detailed" href="javascript:;"
                  ><i class="las la-file-export text-success"></i>&nbsp;&nbsp;Exportar</a
                >
              </li>
              <li>
                <a class="dropdown-item border-radius-md links-action-detailed" href="javascript:;"
                  ><i class="las la-file-import text-info"></i>&nbsp;&nbsp;Importar</a
                >
              </li>
              <li>
                <a class="dropdown-item border-radius-md links-action-detailed" href="javascript:;"
                  ><i class="las la-trash-alt text-primary"></i>&nbsp;&nbsp;Eliminar</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body px-0 pb-2">
      <div class="table-responsive">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7"
              >
                Columna #1
              </th>
              <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"
              >
                Columna #2
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7"
              >
                Columna #3
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7"
              >
                Columna #4
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar :img="img2" size="sm" class="me-3 rounded-circle" alt="Alan Parrish" />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Alan Parrish</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="avatar-group mt-2">
                  <a
                    href="javascript:;"
                    class="avatar avatar-xs rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-original-title="Tony Stark"
                  >
                    <img :src="img3" rounded-circle alt="Tony Stark" />
                  </a>
                  <a
                    href="javascript:;"
                    class="avatar avatar-xs rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-original-title="Rowena Ravenclaw"
                  >
                    <img :src="img1" alt="Rowena Ravenclaw" />
                  </a>
                  <a
                    href="javascript:;"
                    class="avatar avatar-xs rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-original-title="Rick Grimes"
                  >
                    <img :src="img4" alt="Rick Grimes" />
                  </a>
                </div>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-xs font-weight-bold">$11,520</span>
              </td>
              <td class="align-middle">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="text-xs font-weight-bold mx-2">30%</span>
                  <div>
                    <vsud-progress
                      color="primary"
                      class="mx-auto"
                      variant="gradient"
                      percentage="30"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar :img="img1" size="sm" class="me-3 rounded-circle" alt="Rowena Ravenclaw" />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Rowena Ravenclaw</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="btn-group-holder d-flex justify-content-start">
                  <a class="btn btn-table-actions btn-action-success outline-only small-action me-1 mb-0" href="javascript:void(0);" role="button"><i class="las la-phone-volume"></i></a>
                  <a class="btn btn-table-actions btn-action-warning small-action me-1 mb-0" href="javascript:void(0);" role="button"><i class="las la-envelope-open-text"></i></a>
                </div>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge rounded-pill bg-warning text-dark">Pendiente</span>
              </td>
              <td class="align-middle">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="text-xs font-weight-bold mx-2">80%</span>
                  <div>
                    <vsud-progress
                      color="success"
                      class="mx-auto"
                      variant="gradient"
                      percentage="80"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar :img="img3" size="sm" class="me-3 rounded-circle" alt="Tony Stark" />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Tony Stark</h6>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <div class="d-flex align-items-center justify-content-start">
                  <span class="text-xs font-weight-bold mx-2">80%</span>
                  <div>
                    <vsud-progress
                      color="success"
                      class="mx-auto"
                      variant="gradient"
                      percentage="80"
                    />
                  </div>
                </div>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge rounded-pill bg-success text-dark">Activo</span>
              </td>
              <td>
                <div class="btn-group-holder d-flex justify-content-end">
                  <a class="btn btn-table-actions small-action me-1 mb-0" href="javascript:void(0);" role="button"><i class="las la-eye"></i></a>
                  <a class="btn btn-table-actions small-action me-1 mb-0" href="javascript:void(0);" role="button"><i class="las la-edit"></i></a>
                  <a class="btn btn-table-actions small-action me-1 mb-0" href="javascript:void(0);" role="button"><i class="las la-trash-alt"></i></a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar :img="img4" size="sm" class="me-3 rounded-circle" alt="Rick Grimes" />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Rick Grimes</h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-sm">Lorem ipsum dolor sit amet.</span>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge rounded-pill bg-light text-dark">Culminado</span>
              </td>
              <td class="align-middle">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="text-xs font-weight-bold mx-2">100%</span>
                  <div>
                    <vsud-progress
                      color="success"
                      class="mx-auto"
                      variant="gradient"
                      percentage="100"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar :img="img3" size="sm" class="me-3 rounded-circle" alt="Tony Stark" />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Tony Stark</h6>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <div class="d-flex align-items-center justify-content-start">
                  <span class="text-xs font-weight-bold mx-2">22%</span>
                  <div>
                    <vsud-progress
                      color="darnger"
                      class="mx-auto"
                      variant="gradient"
                      percentage="22"
                    />
                  </div>
                </div>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge rounded-pill bg-success text-dark">Activo</span>
              </td>
              <td>
                <div class="btn-group-holder d-flex justify-content-end">
                  <a class="btn btn-table-actions small-action me-1 mb-0" href="javascript:void(0);" role="button"><i class="las la-address-book"></i></a>
                  <a class="btn btn-table-actions small-action me-1 mb-0" href="javascript:void(0);" role="button"><i class="las la-laptop-code"></i></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import setTooltip from "@/assets/js/tooltip.js";
import VsudAvatar from "@/components/VsudAvatar.vue";
import VsudProgress from "@/components/VsudProgress.vue";
import img1 from "../../assets/img/team-1.jpg";
import img2 from "../../assets/img/team-2.jpg";
import img3 from "../../assets/img/team-3.jpg";
import img4 from "../../assets/img/team-4.jpg";

export default {
  name: "ProjectsCard",
  components: {
    VsudAvatar,
    VsudProgress,
  },
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
    };
  },
  mounted() {
    setTooltip();
  },
};
</script>
