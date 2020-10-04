<template>
  <div class="field" draggable @dragstart="startDrag($event, field)">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    field: Object,
  },
  methods: {
    startDrag(evt, field) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("field_id", JSON.stringify(field));
    },
  },
};
</script>
