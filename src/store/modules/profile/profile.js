import axios from "axios";

const personaID = 1;

const state = {
  details: {},
  columns: [],
  fields: [],
};
const mutations = {
  UPDATE_PERSONA_DETAILS(state, payload) {
    state.details = payload;
  },
  UPDATE_PERSONA_COLUMNS(state, payload) {
    state.columns.push(payload);
  },
  UPDATE_PERSONA_FIELDS(state, payload) {
    state.fields.push(payload);
  },
  UPDATE_FIELD_DATA(state, payload) {
    // get the field with wanted ID
    const fieldObj = state.fields.find((field) => field.id == payload.id);
    const fieldObjData = fieldObj.data;
    // update his data value
    state.fields[state.fields.indexOf(fieldObj)].data = payload.data;
    console.log(
      "Field ID ",
      fieldObj.id,
      " has been updated with data",
      payload.data,
      ". Preview data: ",
      fieldObjData
    );
  },
  UPDATE_INITIAL_NAME(state, payload) {
    state.details.name = payload;
  },
  UPDATE_INITIAL_SHORTNAME(state, payload) {
    state.details.initials = payload;
  },
  DELETE_FIELD(state, payload) {
    const fieldObj = state.fields.find((field) => field.id == payload.id);
    state.fields.splice(state.fields.indexOf(fieldObj), 1);
  },
};
const actions = {
  async getPersonaData({ commit }) {
    // fetch the persona data
    try {
      const details = await axios.get(
        `https://private-anon-49c551c5b7-smaplypersonastest.apiary-mock.com/personas/${personaID}`
      );
      const columns = await axios.get(
        `https://private-anon-9e76616a96-smaplypersonastest.apiary-mock.com/personas/${personaID}/columns`
      );
      const fields = await axios.get(
        `https://private-anon-9e76616a96-smaplypersonastest.apiary-mock.com/personas/${personaID}/fields`
      );

      commit("UPDATE_PERSONA_DETAILS", details.data);
      columns.data.forEach((column) =>
        commit("UPDATE_PERSONA_COLUMNS", column)
      );
      fields.data.forEach((field) => commit("UPDATE_PERSONA_FIELDS", field));
    } catch (err) {
      console.error(err);
    }
  },
  addField({ commit }, payload) {
    commit("UPDATE_PERSONA_FIELDS", payload);
    console.log("Total fields ", state.fields);
  },
  updateFieldData({ commit }, payload) {
    commit("UPDATE_FIELD_DATA", payload);
  },
  deleteField({ commit }, payload) {
    commit("DELETE_FIELD", payload);
    console.log("DELTE FIELDS", payload);
  },
  updateProfileDetails({ commit }, payload) {
    commit("UPDATE_INITIAL_NAME", payload.name);
    commit("UPDATE_INITIAL_SHORTNAME", payload.initials);
    console.log("Persona name and shortname has been updated: ", payload);
  },
};
const getters = {
  profileData: (state) => state,
};

const profileModule = {
  state,
  mutations,
  actions,
  getters,
};

export default profileModule;
