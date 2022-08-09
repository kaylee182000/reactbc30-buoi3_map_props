import React, { Component } from "react";
import { connect } from "react-redux";

class DemoChangeColor extends Component {
    changerColor = (color) => {
        const action = {
            type: "CHANGE_COLOR",
            imgCar: `./img/products/${color}-car.jpg`
        }
        this.props.dispatch(action)
    }
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Bai tap chon mau</h3>
        <div className="row">
          <div className="col-6">
            <img src={this.props.imgCar} className="w-100" alt="" />
          </div>
          <div className="col-6">
            <button
              className="btn"
              style={{ backgroundColor: "red", color: "#fff" }}
              onClick={() => {
                  this.changerColor('red')
              }}
            >
              Red
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "black", color: "#fff" }}
              onClick={() => {
                  this.changerColor('black')
              }}
            >
              Black
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "silver", color: "#fff" }}
              onClick={() => {
                  this.changerColor('silver')
              }}
            >
              Silver
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "#eee", color: "#fff" }}
              onClick={() => {
                  this.changerColor('steel')
              }}
            >
              Steel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    imgCar: state.imgCar,
  };
};

export default connect(mapStateToProps)(DemoChangeColor);
