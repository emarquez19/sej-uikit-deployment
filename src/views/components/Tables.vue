<template>
  <div class="mb-3 container-fluid components-fluid-area">
    <div class="row">
      <div class="col-12">
        <div class="documentation-block">
          <h5 class="text-white titlesub">
            <i class="lab la-bootstrap"></i> Tablas y DataTables
          </h5>
          <h6 class="mt-3 titlesub">¿Cómo funcionan?</h6>
          <p class="p-3 mb-0 pb-2 text-sm">
            Due to the widespread use of <code>table</code> elements across
            third-party widgets like calendars and date pickers, Bootstrap’s
            tables are opt-in. Add the base class .table to any
            <code>table</code>, then extend with our optional modifier classes
            or custom styles.
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-2">
        <h6 class="mt-3"><i class="las la-bolt"></i> Ejemplo en vivo</h6>
      </div>
      <div class="col-12">
        <!-- <div class="documentation-block"></div> -->

        <!--Tabla demo #1-->
        <div class="card mb-4">
          <div class="card-header pb-0">
            <h6>Demo de una Tabla</h6>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table
                class="table align-items-center justify-content-center mb-0"
              >
                <thead>
                  <tr>
                    <th
                      class="
                        text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        opacity-7
                      "
                    >
                      Project
                    </th>
                    <th
                      class="
                        text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        opacity-7
                        ps-2
                      "
                    >
                      Budget
                    </th>
                    <th
                      class="
                        text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        opacity-7
                        ps-2
                      "
                    >
                      Status
                    </th>
                    <th
                      class="
                        text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        text-center
                        opacity-7
                        ps-2
                      "
                    >
                      Completion
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2">
                        <div>
                          <img
                            src="../../assets/img/small-logos/logo-invision.svg"
                            class="avatar avatar-sm rounded-circle me-2"
                            alt="spotify"
                          />
                        </div>
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">Spotify</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">$2,500</p>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">working</span>
                    </td>
                    <td class="align-middle text-center">
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="me-2 text-xs font-weight-bold">60%</span>
                        <div>
                          <vsud-progress
                            color="info"
                            variant="gradient"
                            percentage="60"
                          />
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <button class="btn btn-link text-secondary mb-0">
                        <i
                          class="fa fa-ellipsis-v text-xs"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2">
                        <div>
                          <img
                            src="../../assets/img/small-logos/logo-invision.svg"
                            class="avatar avatar-sm rounded-circle me-2"
                            alt="invision"
                          />
                        </div>
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">Invision</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">$5,000</p>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">done</span>
                    </td>
                    <td class="align-middle text-center">
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="me-2 text-xs font-weight-bold">100%</span>
                        <div>
                          <vsud-progress
                            color="success"
                            variant="gradient"
                            percentage="100"
                          />
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <button
                        class="btn btn-link text-secondary mb-0"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i
                          class="fa fa-ellipsis-v text-xs"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2">
                        <div>
                          <img
                            src="../../assets/img/small-logos/logo-jira.svg"
                            class="avatar avatar-sm rounded-circle me-2"
                            alt="jira"
                          />
                        </div>
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">Jira</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">$3,400</p>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">canceled</span>
                    </td>
                    <td class="align-middle text-center">
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="me-2 text-xs font-weight-bold">30%</span>
                        <div>
                          <vsud-progress
                            color="danger"
                            variant="gradient"
                            percentage="30"
                          />
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <button
                        class="btn btn-link text-secondary mb-0"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i
                          class="fa fa-ellipsis-v text-xs"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2">
                        <div>
                          <img
                            src="../../assets/img/small-logos/logo-slack.svg"
                            class="avatar avatar-sm rounded-circle me-2"
                            alt="slack"
                          />
                        </div>
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">Slack</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">$1,000</p>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">canceled</span>
                    </td>
                    <td class="align-middle text-center">
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="me-2 text-xs font-weight-bold">0%</span>
                        <div>
                          <vsud-progress
                            color="success"
                            variant="gradient"
                            percentage="0"
                          />
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <button
                        class="btn btn-link text-secondary mb-0"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i
                          class="fa fa-ellipsis-v text-xs"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2">
                        <div>
                          <img
                            src="../../assets/img/small-logos/logo-invision.svg"
                            class="avatar avatar-sm rounded-circle me-2"
                            alt="webdev"
                          />
                        </div>
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">Webdev</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">$14,000</p>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">working</span>
                    </td>
                    <td class="align-middle text-center">
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="me-2 text-xs font-weight-bold">80%</span>
                        <div>
                          <vsud-progress
                            color="info"
                            variant="gradient"
                            percentage="80"
                          />
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <button
                        class="btn btn-link text-secondary mb-0"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i
                          class="fa fa-ellipsis-v text-xs"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2">
                        <div>
                          <img
                            src="../../assets/img/small-logos/logo-xd.svg"
                            class="avatar avatar-sm rounded-circle me-2"
                            alt="xd"
                          />
                        </div>
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">Adobe XD</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">$2,300</p>
                    </td>
                    <td>
                      <span class="text-xs font-weight-bold">done</span>
                    </td>
                    <td class="align-middle text-center">
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="me-2 text-xs font-weight-bold">100%</span>
                        <div>
                          <vsud-progress
                            color="success"
                            variant="gradient"
                            percentage="100"
                          />
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <button
                        class="btn btn-link text-secondary mb-0"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i
                          class="fa fa-ellipsis-v text-xs"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!--Tabla demo #2-->
        <div class="card mb-4">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6>Titulo de la tabla</h6>
                <p class="text-sm mb-0">
                  <i class="las la-award text-primary fs-6"></i>
                  <span class="font-weight-bold ms-1">Título o Línea</span>
                  estadística
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
                    <i
                      class="fa fa-ellipsis-v text-dark"
                      aria-hidden="true"
                    ></i>
                  </a>

                  <ul
                    class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                    aria-labelledby="dropdownTable"
                  >
                    <li>
                      <a
                        class="
                          dropdown-item
                          border-radius-md
                          links-action-detailed
                        "
                        href="javascript:;"
                        ><i class="las la-file-export text-success"></i
                        >&nbsp;&nbsp;Exportar</a
                      >
                    </li>
                    <li>
                      <a
                        class="
                          dropdown-item
                          border-radius-md
                          links-action-detailed
                        "
                        href="javascript:;"
                        ><i class="las la-file-import text-info"></i
                        >&nbsp;&nbsp;Importar</a
                      >
                    </li>
                    <li>
                      <a
                        class="
                          dropdown-item
                          border-radius-md
                          links-action-detailed
                        "
                        href="javascript:;"
                        ><i class="las la-trash-alt text-primary"></i
                        >&nbsp;&nbsp;Eliminar</a
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
                      class="
                        text-uppercase text-black text-xs
                        font-weight-bolder
                        
                      "
                    >
                      Columna #1
                    </th>
                    <th
                      class="
                        text-uppercase text-black text-xs
                        font-weight-bolder
                        
                        ps-2
                      "
                    >
                      Columna #2
                    </th>
                    <th
                      class="
                        text-center text-uppercase text-black text-xs
                        font-weight-bolder
                        
                      "
                    >
                      Columna #3
                    </th>
                    <th
                      class="
                        text-center text-uppercase text-black text-xs
                        font-weight-bolder
                        
                      "
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
                          <vsud-avatar
                            :img="img2"
                            size="sm"
                            class="me-3 rounded-circle"
                            alt="Alan Parrish"
                          />
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
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
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
                          <vsud-avatar
                            :img="img1"
                            size="sm"
                            class="me-3 rounded-circle"
                            alt="Rowena Ravenclaw"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Rowena Ravenclaw</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div
                        class="btn-group-holder d-flex justify-content-start"
                      >
                        <a
                          class="
                            btn btn-table-actions btn-action-success
                            outline-only
                            small-action
                            me-1
                            mb-0
                          "
                          href="javascript:void(0);"
                          role="button"
                          ><i class="las la-phone-volume"></i
                        ></a>
                        <a
                          class="
                            btn btn-table-actions btn-action-warning
                            small-action
                            me-1
                            mb-0
                          "
                          href="javascript:void(0);"
                          role="button"
                          ><i class="las la-envelope-open-text"></i
                        ></a>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge rounded-pill bg-warning text-dark"
                        >Pendiente</span
                      >
                    </td>
                    <td class="align-middle">
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
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
                          <vsud-avatar
                            :img="img3"
                            size="sm"
                            class="me-3 rounded-circle"
                            alt="Tony Stark"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Tony Stark</h6>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <div
                        class="d-flex align-items-center justify-content-start"
                      >
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
                      <span class="badge rounded-pill bg-success text-dark"
                        >Activo</span
                      >
                    </td>
                    <td>
                      <div class="btn-group-holder d-flex justify-content-end">
                        <a
                          class="btn btn-table-actions small-action me-1 mb-0"
                          href="javascript:void(0);"
                          role="button"
                          ><i class="las la-eye"></i
                        ></a>
                        <a
                          class="btn btn-table-actions small-action me-1 mb-0"
                          href="javascript:void(0);"
                          role="button"
                          ><i class="las la-edit"></i
                        ></a>
                        <a
                          class="btn btn-table-actions small-action me-1 mb-0"
                          href="javascript:void(0);"
                          role="button"
                          ><i class="las la-trash-alt"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <vsud-avatar
                            :img="img4"
                            size="sm"
                            class="me-3 rounded-circle"
                            alt="Rick Grimes"
                          />
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
                      <span class="badge rounded-pill bg-light text-dark"
                        >Culminado</span
                      >
                    </td>
                    <td class="align-middle">
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
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
                          <vsud-avatar
                            :img="img3"
                            size="sm"
                            class="me-3 rounded-circle"
                            alt="Tony Stark"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Tony Stark</h6>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <div
                        class="d-flex align-items-center justify-content-start"
                      >
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
                      <span class="badge rounded-pill bg-success text-dark"
                        >Activo</span
                      >
                    </td>
                    <td>
                      <div class="btn-group-holder d-flex justify-content-end">
                        <a
                          class="btn btn-table-actions small-action me-1 mb-0"
                          href="javascript:void(0);"
                          role="button"
                          ><i class="las la-address-book"></i
                        ></a>
                        <a
                          class="btn btn-table-actions small-action me-1 mb-0"
                          href="javascript:void(0);"
                          role="button"
                          ><i class="las la-laptop-code"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <!--Tabla simple-->
        <div class="card mb-4">
          <div class="card-body p-3">
            <div class="table-responsive">
                <table class="table table-hover full-borders">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>

        </div>

        <!--Tabla de color combinada-->
        <div class="card mb-4">
          <div class="card-body p-3">
            <div class="table-responsive">
                <table class="table table-striped full-borders">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="code-viewer-toolbar">
          <h6 class="text-md">Código de muestra</h6>
          <button @click="copyToClipboard(1)" class="copy-to-clip">
            <i class="las la-clipboard"></i>
          </button>
        </div>
        <pre class="code-viewer">
          <code id="textToBecopied1">
            {{codeSample1}}
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<script>
import VsudProgress from "@/components/VsudProgress.vue";
import VsudAvatar from "@/components/VsudAvatar.vue";
import img1 from "../../assets/img/team-1.jpg";
import img2 from "../../assets/img/team-2.jpg";
import img3 from "../../assets/img/team-3.jpg";
import img4 from "../../assets/img/team-4.jpg";
export default {
  name: "TablesHtmlComponent",
  components: {},
  data() {
    return {
      codeSample1: `
<!--Tabla demo #1-->
<div class="card mb-4">
    <div class="card-header pb-0">
    <h6>Demo de una Tabla</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
    <div class="table-responsive p-0">
        <table
        class="table align-items-center justify-content-center mb-0"
        >
        <thead>
            <tr>
            <th
                class="
                text-uppercase text-secondary text-xxs
                font-weight-bolder
                opacity-7
                "
            >
                Project
            </th>
            <th
                class="
                text-uppercase text-secondary text-xxs
                font-weight-bolder
                opacity-7
                ps-2
                "
            >
                Budget
            </th>
            <th
                class="
                text-uppercase text-secondary text-xxs
                font-weight-bolder
                opacity-7
                ps-2
                "
            >
                Status
            </th>
            <th
                class="
                text-uppercase text-secondary text-xxs
                font-weight-bolder
                text-center
                opacity-7
                ps-2
                "
            >
                Completion
            </th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>
                <div class="d-flex px-2">
                <div>
                    <img
                    src="../../assets/img/small-logos/logo-invision.svg"
                    class="avatar avatar-sm rounded-circle me-2"
                    alt="spotify"
                    />
                </div>
                <div class="my-auto">
                    <h6 class="mb-0 text-sm">Spotify</h6>
                </div>
                </div>
            </td>
            <td>
                <p class="text-sm font-weight-bold mb-0">$2,500</p>
            </td>
            <td>
                <span class="text-xs font-weight-bold">working</span>
            </td>
            <td class="align-middle text-center">
                <div
                class="d-flex align-items-center justify-content-center"
                >
                <span class="me-2 text-xs font-weight-bold">60%</span>
                <div>
                    <vsud-progress
                    color="info"
                    variant="gradient"
                    percentage="60"
                    />
                </div>
                </div>
            </td>
            <td class="align-middle">
                <button class="btn btn-link text-secondary mb-0">
                <i
                    class="fa fa-ellipsis-v text-xs"
                    aria-hidden="true"
                ></i>
                </button>
            </td>
            </tr>
            <tr>
            <td>
                <div class="d-flex px-2">
                <div>
                    <img
                    src="../../assets/img/small-logos/logo-invision.svg"
                    class="avatar avatar-sm rounded-circle me-2"
                    alt="invision"
                    />
                </div>
                <div class="my-auto">
                    <h6 class="mb-0 text-sm">Invision</h6>
                </div>
                </div>
            </td>
            <td>
                <p class="text-sm font-weight-bold mb-0">$5,000</p>
            </td>
            <td>
                <span class="text-xs font-weight-bold">done</span>
            </td>
            <td class="align-middle text-center">
                <div
                class="d-flex align-items-center justify-content-center"
                >
                <span class="me-2 text-xs font-weight-bold">100%</span>
                <div>
                    <vsud-progress
                    color="success"
                    variant="gradient"
                    percentage="100"
                    />
                </div>
                </div>
            </td>
            <td class="align-middle">
                <button
                class="btn btn-link text-secondary mb-0"
                aria-haspopup="true"
                aria-expanded="false"
                >
                <i
                    class="fa fa-ellipsis-v text-xs"
                    aria-hidden="true"
                ></i>
                </button>
            </td>
            </tr>
            <tr>
            <td>
                <div class="d-flex px-2">
                <div>
                    <img
                    src="../../assets/img/small-logos/logo-jira.svg"
                    class="avatar avatar-sm rounded-circle me-2"
                    alt="jira"
                    />
                </div>
                <div class="my-auto">
                    <h6 class="mb-0 text-sm">Jira</h6>
                </div>
                </div>
            </td>
            <td>
                <p class="text-sm font-weight-bold mb-0">$3,400</p>
            </td>
            <td>
                <span class="text-xs font-weight-bold">canceled</span>
            </td>
            <td class="align-middle text-center">
                <div
                class="d-flex align-items-center justify-content-center"
                >
                <span class="me-2 text-xs font-weight-bold">30%</span>
                <div>
                    <vsud-progress
                    color="danger"
                    variant="gradient"
                    percentage="30"
                    />
                </div>
                </div>
            </td>
            <td class="align-middle">
                <button
                class="btn btn-link text-secondary mb-0"
                aria-haspopup="true"
                aria-expanded="false"
                >
                <i
                    class="fa fa-ellipsis-v text-xs"
                    aria-hidden="true"
                ></i>
                </button>
            </td>
            </tr>
            <tr>
            <td>
                <div class="d-flex px-2">
                <div>
                    <img
                    src="../../assets/img/small-logos/logo-slack.svg"
                    class="avatar avatar-sm rounded-circle me-2"
                    alt="slack"
                    />
                </div>
                <div class="my-auto">
                    <h6 class="mb-0 text-sm">Slack</h6>
                </div>
                </div>
            </td>
            <td>
                <p class="text-sm font-weight-bold mb-0">$1,000</p>
            </td>
            <td>
                <span class="text-xs font-weight-bold">canceled</span>
            </td>
            <td class="align-middle text-center">
                <div
                class="d-flex align-items-center justify-content-center"
                >
                <span class="me-2 text-xs font-weight-bold">0%</span>
                <div>
                    <vsud-progress
                    color="success"
                    variant="gradient"
                    percentage="0"
                    />
                </div>
                </div>
            </td>
            <td class="align-middle">
                <button
                class="btn btn-link text-secondary mb-0"
                aria-haspopup="true"
                aria-expanded="false"
                >
                <i
                    class="fa fa-ellipsis-v text-xs"
                    aria-hidden="true"
                ></i>
                </button>
            </td>
            </tr>
            <tr>
            <td>
                <div class="d-flex px-2">
                <div>
                    <img
                    src="../../assets/img/small-logos/logo-invision.svg"
                    class="avatar avatar-sm rounded-circle me-2"
                    alt="webdev"
                    />
                </div>
                <div class="my-auto">
                    <h6 class="mb-0 text-sm">Webdev</h6>
                </div>
                </div>
            </td>
            <td>
                <p class="text-sm font-weight-bold mb-0">$14,000</p>
            </td>
            <td>
                <span class="text-xs font-weight-bold">working</span>
            </td>
            <td class="align-middle text-center">
                <div
                class="d-flex align-items-center justify-content-center"
                >
                <span class="me-2 text-xs font-weight-bold">80%</span>
                <div>
                    <vsud-progress
                    color="info"
                    variant="gradient"
                    percentage="80"
                    />
                </div>
                </div>
            </td>
            <td class="align-middle">
                <button
                class="btn btn-link text-secondary mb-0"
                aria-haspopup="true"
                aria-expanded="false"
                >
                <i
                    class="fa fa-ellipsis-v text-xs"
                    aria-hidden="true"
                ></i>
                </button>
            </td>
            </tr>
            <tr>
            <td>
                <div class="d-flex px-2">
                <div>
                    <img
                    src="../../assets/img/small-logos/logo-xd.svg"
                    class="avatar avatar-sm rounded-circle me-2"
                    alt="xd"
                    />
                </div>
                <div class="my-auto">
                    <h6 class="mb-0 text-sm">Adobe XD</h6>
                </div>
                </div>
            </td>
            <td>
                <p class="text-sm font-weight-bold mb-0">$2,300</p>
            </td>
            <td>
                <span class="text-xs font-weight-bold">done</span>
            </td>
            <td class="align-middle text-center">
                <div
                class="d-flex align-items-center justify-content-center"
                >
                <span class="me-2 text-xs font-weight-bold">100%</span>
                <div>
                    <vsud-progress
                    color="success"
                    variant="gradient"
                    percentage="100"
                    />
                </div>
                </div>
            </td>
            <td class="align-middle">
                <button
                class="btn btn-link text-secondary mb-0"
                aria-haspopup="true"
                aria-expanded="false"
                >
                <i
                    class="fa fa-ellipsis-v text-xs"
                    aria-hidden="true"
                ></i>
                </button>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>
</div>

<!--Tabla demo #2-->
<div class="card mb-4">
    <div class="card-header pb-0">
    <div class="row">
        <div class="col-lg-6 col-7">
        <h6>Titulo de la tabla</h6>
        <p class="text-sm mb-0">
            <i class="las la-award text-primary fs-6"></i>
            <span class="font-weight-bold ms-1">Título o Línea</span>
            estadística
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
            <i
                class="fa fa-ellipsis-v text-dark"
                aria-hidden="true"
            ></i>
            </a>

            <ul
            class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
            aria-labelledby="dropdownTable"
            >
            <li>
                <a
                class="
                    dropdown-item
                    border-radius-md
                    links-action-detailed
                "
                href="javascript:;"
                ><i class="las la-file-export text-success"></i
                >&nbsp;&nbsp;Exportar</a
                >
            </li>
            <li>
                <a
                class="
                    dropdown-item
                    border-radius-md
                    links-action-detailed
                "
                href="javascript:;"
                ><i class="las la-file-import text-info"></i
                >&nbsp;&nbsp;Importar</a
                >
            </li>
            <li>
                <a
                class="
                    dropdown-item
                    border-radius-md
                    links-action-detailed
                "
                href="javascript:;"
                ><i class="las la-trash-alt text-primary"></i
                >&nbsp;&nbsp;Eliminar</a
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
                class="
                text-uppercase text-black text-xs
                font-weight-bolder
                
                "
            >
                Columna #1
            </th>
            <th
                class="
                text-uppercase text-black text-xs
                font-weight-bolder
                
                ps-2
                "
            >
                Columna #2
            </th>
            <th
                class="
                text-center text-uppercase text-black text-xs
                font-weight-bolder
                
                "
            >
                Columna #3
            </th>
            <th
                class="
                text-center text-uppercase text-black text-xs
                font-weight-bolder
                
                "
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
                    <vsud-avatar
                    :img="img2"
                    size="sm"
                    class="me-3 rounded-circle"
                    alt="Alan Parrish"
                    />
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
                <div
                class="d-flex align-items-center justify-content-center"
                >
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
                    <vsud-avatar
                    :img="img1"
                    size="sm"
                    class="me-3 rounded-circle"
                    alt="Rowena Ravenclaw"
                    />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Rowena Ravenclaw</h6>
                </div>
                </div>
            </td>
            <td>
                <div
                class="btn-group-holder d-flex justify-content-start"
                >
                <a
                    class="
                    btn btn-table-actions btn-action-success
                    outline-only
                    small-action
                    me-1
                    mb-0
                    "
                    href="javascript:void(0);"
                    role="button"
                    ><i class="las la-phone-volume"></i
                ></a>
                <a
                    class="
                    btn btn-table-actions btn-action-warning
                    small-action
                    me-1
                    mb-0
                    "
                    href="javascript:void(0);"
                    role="button"
                    ><i class="las la-envelope-open-text"></i
                ></a>
                </div>
            </td>
            <td class="align-middle text-center text-sm">
                <span class="badge rounded-pill bg-warning text-dark"
                >Pendiente</span
                >
            </td>
            <td class="align-middle">
                <div
                class="d-flex align-items-center justify-content-center"
                >
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
                    <vsud-avatar
                    :img="img3"
                    size="sm"
                    class="me-3 rounded-circle"
                    alt="Tony Stark"
                    />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Tony Stark</h6>
                </div>
                </div>
            </td>
            <td class="align-middle">
                <div
                class="d-flex align-items-center justify-content-start"
                >
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
                <span class="badge rounded-pill bg-success text-dark"
                >Activo</span
                >
            </td>
            <td>
                <div class="btn-group-holder d-flex justify-content-end">
                <a
                    class="btn btn-table-actions small-action me-1 mb-0"
                    href="javascript:void(0);"
                    role="button"
                    ><i class="las la-eye"></i
                ></a>
                <a
                    class="btn btn-table-actions small-action me-1 mb-0"
                    href="javascript:void(0);"
                    role="button"
                    ><i class="las la-edit"></i
                ></a>
                <a
                    class="btn btn-table-actions small-action me-1 mb-0"
                    href="javascript:void(0);"
                    role="button"
                    ><i class="las la-trash-alt"></i
                ></a>
                </div>
            </td>
            </tr>
            <tr>
            <td>
                <div class="d-flex px-2 py-1">
                <div>
                    <vsud-avatar
                    :img="img4"
                    size="sm"
                    class="me-3 rounded-circle"
                    alt="Rick Grimes"
                    />
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
                <span class="badge rounded-pill bg-light text-dark"
                >Culminado</span
                >
            </td>
            <td class="align-middle">
                <div
                class="d-flex align-items-center justify-content-center"
                >
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
                    <vsud-avatar
                    :img="img3"
                    size="sm"
                    class="me-3 rounded-circle"
                    alt="Tony Stark"
                    />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Tony Stark</h6>
                </div>
                </div>
            </td>
            <td class="align-middle">
                <div
                class="d-flex align-items-center justify-content-start"
                >
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
                <span class="badge rounded-pill bg-success text-dark"
                >Activo</span
                >
            </td>
            <td>
                <div class="btn-group-holder d-flex justify-content-end">
                <a
                    class="btn btn-table-actions small-action me-1 mb-0"
                    href="javascript:void(0);"
                    role="button"
                    ><i class="las la-address-book"></i
                ></a>
                <a
                    class="btn btn-table-actions small-action me-1 mb-0"
                    href="javascript:void(0);"
                    role="button"
                    ><i class="las la-laptop-code"></i
                ></a>
                </div>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>

</div>

<!--Tabla simple-->
<div class="card mb-4">
    <div class="card-body p-3">
    <div class="table-responsive">
        <table class="table table-hover full-borders">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>

</div>

<!--Tabla de color combinada-->
<div class="card mb-4">
    <div class="card-body p-3">
    <div class="table-responsive">
        <table class="table table-striped full-borders">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</div>
      `,
      codeSample2: `
      `,
      VsudProgress,
      VsudAvatar,
      img1,
      img2,
      img3,
      img4
    };
  },
  methods: {
    copyToClipboard(number) {
      let idOfText = "textToBecopied" + number;
      const copyText = document.getElementById(idOfText).textContent;
      const textArea = document.createElement("textarea");
      textArea.className = "contextual-component";
      textArea.textContent = copyText;
      document.body.append(textArea);
      textArea.select();
      document.execCommand("copy");
      alert("Copiado!");
    },
  },
  mounted() {},
};
</script>
