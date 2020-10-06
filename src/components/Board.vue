<template>
  <section>
    <div
      class="board"
      @drop="onDrop($event, $props.board_id)"
      @dragover.prevent
      @dragenter.prevent
    >
      <Field
        v-for="field in fieldsArray"
        :id="field.id"
        :key="field.id"
        :field="field"
        :parentBoard="$props.board_id"
        :type="field.field_type"
        draggable
        @dragstart="startDrag($event, field)"
      >
        <label class="field-label">
          {{ field.title }}
        </label>
        <button @click="deleteField" class="field-settings">
          <i class="fa fa-trash"></i>
        </button>
        <textarea
          v-if="field.field_type == 'long_text'"
          class="field-input"
          :value="field.data"
          @blur="updateFieldInput"
        />
        <input
          class="field-input"
          v-else
          :value="field.data"
          @blur="updateFieldInput"
        />
      </Field>
    </div>
  </section>
</template>

<script>
import Field from "./Field.vue";

export default {
  props: ["fields", "board_id"],
  components: {
    Field,
  },
  computed: {
    fieldsArray() {
      const board_id = this.$props.board_id;
      return Array.from(this.$props.fields).filter((field) => {
        return field.column_id == board_id;
      });
    },
  },
  methods: {
    onDrop(evt, column_id) {
      const field_data = evt.dataTransfer.getData("field_id");
      const { field_type, data } = JSON.parse(field_data);
      const storeFieldsLength = this.$props.fields.length

      // get the id of the last item in store fields
      let field_id = this.$props.fields[storeFieldsLength-1].id + 1;
      const prevID = this.$props.fields.filter(field=>field.column_id==column_id)

      let body = {
        column_id: column_id,
        data: data,
        field_type: field_type,
        id: field_id,
        next_id: 0,
        prev_id: prevID.length > 0 ? prevID[prevID.length-1].id : 0,
        title: field_type.replace("_", " "),
      };
      console.log(
        "Persona fields: ",
        this.$props.fields,
        "  has been updated with",
        body
      );
      this.$store.dispatch("addField", body);
    },
    deleteField(e) {
      const field = {
        id: e.target.parentNode.parentNode.id,
      };
      this.$store.dispatch("deleteField", field);
    },
    updateFieldInput(e) {
      const field = {
        id: e.target.parentNode.id,
        data: e.target.value,
      };
      this.$store.dispatch("updateFieldData", field);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_utils.scss";

.board {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .field {
    background-color: #ffffff;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin-bottom: 16px;
    padding: 7px 12px 10px 7px;
    &-label {
      @extend .persona-label;
      grid-area: 1 / 1 / 2 / 2;
    }
    &-settings {
      border: none;
      background-color: inherit;
      grid-area: 1 / 2 / 2 / 3;
      text-align: right;
      color: $light-label-gray;
    }
    &-input {
      @extend .persona-input;
      grid-area: 2 / 1 / 3 / 3;
      width: 100%;
      padding: 5px0;
      margin: 5px;
    }
  }
}
</style>
