/* eslint-disable */
<template>
  <main class="container">
    <!-- persona profile body -->
    <div class="profile">
      <div class="profile-header">
        <div
          class="persona-icon"
          :style="{ backgroundColor: profileData.details.color }"
        >
          <i
            class="fas fa-user-astronaut"
            style="font-size:2rem;padding-top:10px;"
          ></i>
        </div>
        <div class="persona-name">
          <label for="persona_name" class="persona-label">Persona name </label>
          <input
            class="persona-input"
            id="persona_name"
            :value="profileData.details.name"
            @keyup="onEditName"
          />
        </div>
        <div class="persona-shortname">
          <label for="persona-initial" class="persona-label">Short name </label>
          <input
            id="persona-initial"
            class="persona-input"
            :value="profileData.details.initials"
            @keyup="onEditName"
          />
        </div>
      </div>

      <div class="boards">
        <Board
          :board_id="column.id"
          v-for="column in profileData.columns"
          :key="column.id"
          :class="column.width"
          :fields="profileData.fields"
        />
      </div>
    </div>

    <!-- side panel with draggable elements -->
    <Elements />
  </main>
</template>

<script>
import Board from "./Board.vue";
import Elements from "./Elements.vue";
import { updateName } from "@/functions/helpers";

export default {
  props: ["profileData"],
  components: {
    Board,
    Elements,
  },
  data() {
    return {
      tempValue: null,
    };
  },
  created() {
    this.tempValue = this.$props.profileData.details.initials;
  },
  methods: {
    onEditName(e) {
      updateName(e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_utils.scss";

.container {
  margin-top: $header-height + 30px;
  margin-right: 380px;

  .profile {
    width: 700px;
    margin-top: 30px;
    margin: auto;
    left: 0;
    right: 0;
  }
  .profile-header {
    height: 88px;
    width: 100%;
    border-radius: 2px 2px 0 0;
    background-color: $very-light-gray;
    padding: 16px;
    display: flex;

    .persona-icon {
      width: 56px;
      height: 56px;
      text-align: center;
      vertical-align: middle;
      border-radius: 2px;
    }
    .persona-name {
      width: 416px;
      background-color: #ffffff;
      flex-grow: 2;
      margin: 0 16px;
      padding: 10px 7px 6px 12px;
    }
    .persona-shortname {
      width: 128px;
      background-color: #ffffff;
      margin-left: auto;
      padding: 10px 7px 6px 12px;
    }
    @extend .persona-label;
    @extend .persona-input;
  }
  .boards {
    min-height: 876px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 12px;
    background-color: $light-gray;
    padding: 16px;
  }
}
</style>
