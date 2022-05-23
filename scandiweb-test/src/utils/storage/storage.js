export const loadState = () => {
  try {
    const state = localStorage.getItem("state");
    if (!state) return undefined;
    return JSON.parse(state);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (error) {
    return error;
  }
};
