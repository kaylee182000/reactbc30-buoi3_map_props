import React, { Component } from "react";
import ExModel from "./ExModel";
import ExProductList from "./ExProductList";

export default class ExerciseCarStore extends Component {
  state = {
    modalState: {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
  };

  showImg = (sanPhamClick) => {
      this.setState({
        modalState : sanPhamClick
      })
  }
  render() {
    return (
      <div className="container">
        <h3>Exercise</h3>
        <ExModel modalState = {this.state.modalState} />
        <ExProductList showImg = {this.showImg}/>
      </div>
    );
  }
}
