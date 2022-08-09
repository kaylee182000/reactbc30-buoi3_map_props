import React, { Component } from "react";
//ket noi redux
import { connect } from "react-redux";

class DemoTangGiamSoLuong extends Component {
  render() {
    return (
      <div>
        <h3>Demo tang giam so luong</h3>
        <p>Number: {this.props.number}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            const action = {
              type: "TANG_SO_LUONG", //thuoc tinh bat buoc
              newNumber: this.props.number + 1,
            };
            //su dung ham this.props.dispatch de gui du lieu len redux
            this.props.dispatch(action);
          }}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            const action = {
              type: "GIAM_SO_LUONG", //thuoc tinh bat buoc
              newNumber: this.props.number - 1,
            };
            //su dung ham this.props.dispatch de gui du lieu len redux
            this.props.dispatch(action);
          }}
        >
          -
        </button>
      </div>
    );
  }
}
//HOC
/*
Chuyen state cua Redux ve thanh props cua component
*/
const mapStateToProps = (rootReducer) => {
  return {
    number: rootReducer.number,
  };
};
//component chua state cua redux = connect()(DemoTangGiamSoLuong)
export default connect(mapStateToProps)(DemoTangGiamSoLuong);
