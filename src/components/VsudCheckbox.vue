<template>
  <div class="form-check">
    <input :id="id" class="form-check-input" type="checkbox" :name="name" :checked="checked" />
    <label :for="id" class="custom-control-label text-mdl">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "VsudCheckbox",
  props: {
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    checked: {
      type: String,
      default: ""
    },
  },
};
</script>
