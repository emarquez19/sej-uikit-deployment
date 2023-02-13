<template>
  <nav aria-label="breadcrumb" class="w-lg-100 ms-4 ms-xl-0">
    <ol
      class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb"
      :class="$store.state.isRTL ? '' : ' me-sm-3 me-md-6'"
    >
      <li class="text-sm breadcrumb-item" :class="textWhite">
        <a :class="textWhite" class="opacity-8" href="#"><i class="las la-home"></i></a>
      </li>
      <!-- <li class="text-sm breadcrumb-item" :class="textWhite">
        <a
          v-if="$store.state.isRTL"
          :class="textWhite"
          class="opacity-5 ps-2"
          href="#"
        ></a>
        <a v-else :class="textWhite" class="opacity-8" href="#">SEJ UI Kit</a>
      </li> -->
      <li
        class="text-sm breadcrumb-item active"
        :class="textWhite ? 'text-white' : 'text-dark'"
        aria-current="page"
      >{{ currentPage }}</li>
    </ol>
    <h5 class="mb-0 font-weight-bolder" :class="textWhite ? 'text-white' : ''">{{ currentPage }}</h5>
  </nav>
</template>

<script>
export default {
  name: "BreadcrumbsComponent",
  props: {
    currentPage: {
      required: true,
      type: String,
      default: ""
    },
    textWhite: {
      type: String,
      default: ""
    },
  },

};
</script>
