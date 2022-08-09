const stateDefault = "./img/products/red-car.jpg"

export const carReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHANGE_COLOR": {
            state = action.imgCar
            return state
        }
      default:
        return state;
    }
  }