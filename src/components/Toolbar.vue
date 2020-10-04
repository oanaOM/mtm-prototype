/* eslint-disable */
<template>
  <header>
    <div class="persona-info">
      <i class="far fa-user"></i>
      <label>Persona</label>
      <input
        :model="personaName.name"
        :value="personaName.name"
        type="text"
        @keyup="editName"
      />
      <button class="far fa-edit"></button>
    </div>

    <div class="toolbar">
      <div class="toolbar-link" v-for="tool in tools" :key="tool.name">
        <button @click="updatePersonaProfile">
          <i :class="tool.fontAwesomIcon"></i>
        </button>
        <div>{{ tool.name }}</div>
      </div>
    </div>
  </header>
</template>

<script>
import { updateName } from "@/functions/helpers";

export default {
  props: ["personaName"],
  data() {
    return {
      tools: [
        { fontAwesomIcon: "far fa-save", name: "Save persona" },
        { fontAwesomIcon: "fas fa-plus-square", name: "Add element" },
        { fontAwesomIcon: "far fa-file", name: "Export" },
        { fontAwesomIcon: "far fa-copy", name: "Duplicate" },
        { fontAwesomIcon: "fas fa-arrow-right", name: "Move" },
        { fontAwesomIcon: "fas fa-question-circle", name: "Help" },
        { fontAwesomIcon: "fas fa-ellipsis-h", name: "More actions" },
      ],
    };
  },
  computed: {},
  methods: {
    editName(e) {
      e.target.style.backgroundColor =
        e.target.value.length === 0 ? "red" : "inherit";
      e.target.style.width = e.target.value.length + "ch";
      updateName(e);
    },
    updatePersonaProfile() {
      // TO BE ADDED
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  color: #3c4646;
  font-size: 1.5rem;
  background-color: $light-gray;
  background: linear-gradient(180deg, #ffffff 0, $light-gray 100%);
  padding: 15px 26px;
  @media (max-width: $small-device-screen) {
    padding: 15px;
  }
  position: fixed;
  top: 0;
  width: 100%;
  max-height: 64px;
  display: flex;
  justify-content: space-between;
  .persona-info {
    * {
      margin-right: 10px;
    }
    button {
      font-size: 0.85rem;
      line-height: 1.5rem;
      vertical-align: middle;
      border: none;
      background-color: inherit;
    }
    input {
      width: 80px;
      border: none;
      background: inherit;
      color: #3c4646;
      font-family: $main-font-family;
      font-size: 20px;
      font-weight: 300;
      letter-spacing: 0;
      line-height: 24px;
      font-weight: bold;
      min-width: 50px;
    }
  }

  .toolbar {
    margin-right: 0;
    text-align: center;
    right: 0;

    div.toolbar-link {
      display: inline-block;
      text-decoration: none;
      color: $very-dark-grayish-cyan;
      font-family: $main-font-family;
      font-size: 12px;
      letter-spacing: 0;
      line-height: 8px;
      @media (max-width: $small-device-screen) {
        margin: 0 10px;
      }
      margin: 0 20px;
      button {
        background-color: inherit;
        border: none;
        font-size: 20px;
        margin-bottom: 5px;
        color: $very-dark-grayish-cyan;
      }
    }
  }
}
</style>
