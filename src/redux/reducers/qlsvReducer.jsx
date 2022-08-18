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
    case "HANDLE_CHANGE_INPUT": {
      let { id, value } = action;
      state.sinhVien[id] = value;
      state.sinhVien = { ...state.sinhVien };
      return { ...state }; //immutable
    }
    case "HANDLE_SUBMIT": {
      //buoc1 lay du lieu tu action
      let { sinhVien } = action;
      console.log(sinhVien)
      //buoc2 clone state (object,array)
      let arrSinhVienUpdate = [...state.arrSinhVien]
      arrSinhVienUpdate.push(sinhVien)
      //buoc3 cap nhat lai state
      state.arrSinhVien = arrSinhVienUpdate
      return {...state}  
    }
    default:
      return state;
  }
};
