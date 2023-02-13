<template>
  <div class="card h-100">
    <div class="p-3 pb-0 card-header">
      <div class="row">
        <div class="col-md-8 d-flex align-items-center">
          <h6 class="mb-0">Información del usuario</h6>
        </div>
        <div class="col-md-4 text-end">
          <a href="javascript:;">
            <i
              class="text-sm fas fa-user-edit text-primary"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Editar Perfil"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div class="p-3 card-body">
      <p class="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <hr class="my-4 horizontal gray-light" />
      <ul class="list-group">
        <li class="pt-0 text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Nombre:</strong> &nbsp; Edwin Marquez
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Teléfono:</strong> &nbsp; (33) 13 6114 37
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Correo:</strong> &nbsp; emarquez1918@gmail.com
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Ubicación:</strong> &nbsp; Guadalajara, México.
        </li>
        <li class="pb-0 border-0 list-group-item ps-0">
          <strong class="text-sm text-dark">Adicionales:</strong> &nbsp;
          <a
            class="py-0 mb-0 btn btn-facebook btn-simple ps-1 pe-2"
            href="javascript:;"
          >
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a
            class="py-0 mb-0 btn btn-twitter btn-simple ps-1 pe-2"
            href="javascript:;"
          >
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a
            class="py-0 mb-0 btn btn-instagram btn-simple ps-1 pe-2"
            href="javascript:;"
          >
            <i class="fab fa-instagram fa-lg"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
};
</script>
