const stateDefault = {
  arrSinhVien: [
    { id: 1, name: "kay" },
    { id: 2, name: "lee" },
  ],
  sinhVien: {
    id: "",
    name: "",
  },
};
export const qlsvReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
