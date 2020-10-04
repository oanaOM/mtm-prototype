<template>
  <div class="draggable-elements">
    <div class="elements-header">
      <span class="add-element">Add element</span>
      <button class="close-elements"><i class="fas fa-times"></i></button>
    </div>
    <div class="elements-body">
      <h2>Add element to persona</h2>
      <div class="elements-body-text">
        <p>
          Click or drag and drop one of the element types below to add it to the
          persona.
        </p>
        <p>
          Click on the <i class="fas fa-cog"></i> icon of each element to edit
          its settings.
        </p>
        <p>You can reorder the elements by dragging them.</p>
      </div>

      <div class="draggable-cards">
        <div
          class="field"
          v-for="field in fields"
          :key="field.field_type"
          draggable
          @dragstart="startDrag($event, field)"
        >
          <div class="field-icon" v-if="field.icon !== ''">
            <i :class="field.icon"></i>
          </div>
          <div :class="field.field_type + ' field-text'" v-else>
            {{ field.text }}
          </div>

          <div class="field-type">{{ stripFieldType(field.field_type) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          field_type: "short_text",
          text: "Abc",
          data: "My short",
          icon: "",
        },
        {
          field_type: "long_text",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          icon: "",
        },
        {
          field_type: "image",
          text: "",
          icon: "fas fa-image",
        },
        {
          field_type: "Image gallery",
          text: "",
          icon: "fas fa-images",
        },
        {
          field_type: "number",
          text: "123",
          icon: "",
        },
      ],
    };
  },
  methods: {
    startDrag(evt, field) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("field_id", JSON.stringify(field));
    },
    stripFieldType: (val) => val.replace("_", " "),
  },
};
</script>

<style lang="scss">
.draggable-elements {
  width: 390px;
  border-radius: 2px 0 0 0;
  background-color: $light-gray;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
  position: fixed;
  right: 0;
  height: calc(100vh - 64px - 16px);
  top: 80px;

  .elements-header {
    color: $very-dark-grayish-cyan;
    font-family: $main-font-family;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.8px;
    line-height: 13px;
    border-radius: 2px 0 0 0;
    background-color: $very-light-gray;
    text-transform: uppercase;
    display: flex;
    flex-direction: rows;
    align-content: space-between;
    .add-element {
      padding: 11px 24px;
    }
    button.close-elements {
      background-color: inherit;
      border: none;
      font-size: 1rem;
      color: $very-dark-grayish-cyan;
      border-left: 1px solid #fff;
      padding: 11px 24px;
      margin-left: auto;
    }
  }
  .elements-body {
    background-color: $light-gray;
    h2 {
      color: #3c4646;
      font-family: $main-font-family;
      font-size: 24px;
      font-weight: 300;
      letter-spacing: 0;
      line-height: 31px;
      margin: 0;
      padding: 0;
      padding: 22px 24px;
    }
    .elements-body-text {
      color: $very-dark-grayish-cyan;
      padding: 12px 24px;
      background-color: $light-grayish-blue;
      p {
        font-family: $main-font-family;
        font-size: 14px;
        font-style: italic;
        letter-spacing: 0;
        line-height: 18px;
        padding: 0;
        margin: 5px;
      }
    }
    .draggable-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 12px;
      min-width: 390px;
      padding: 24px 12px;

      @import "../styles/_field.scss";
      .long_text {
        font-size: 12px;
        line-height: 1.3;
      }
    }
  }
}
</style>
