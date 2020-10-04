import store from "@/store/store";

export const updateName = (e) => {
  let value = e.target.value;
  let initial = value.substring(0, 3).toUpperCase();
  const data = {
    name:
      e.target.id == "persona-initial"
        ? store.getters.profileData.details.name
        : value,
    initials: initial,
  };
  e.target.style.backgroundColor = value.length === 0 ? "red" : "inherit";

  console.log(e);
  store.dispatch("updateProfileDetails", data);
};
