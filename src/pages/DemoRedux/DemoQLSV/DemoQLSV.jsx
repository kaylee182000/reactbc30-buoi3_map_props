import React, { Component } from "react";
import { connect } from "react-redux";

class DemoQLSV extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const action = {
      type: "HANDLE_SUBMIT",
      sinhVien: {...this.props.qlsvReducer.sinhVien},
    };
    this.props.dispatch(action);
  };
  render() {
    let { arrSinhVien, sinhVien } = this.props.qlsvReducer;
    return (
      <div className="container">
        <ul>
          {arrSinhVien.map((sv, index) => {
            return (
              <li key={index}>
                {sv.id} - {sv.name}
              </li>
            );
          })}
        </ul>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <p>id</p>
            <input
              id="id"
              className="form-control"
              value={sinhVien.id}
              onChange={(e) => {
                const action = {
                  type: "HANDLE_CHANGE_INPUT",
                  id: e.target.id,
                  value: e.target.value,
                };
                this.props.dispatch(action);
              }}
            />
          </div>
          <div className="form-group">
            <p>name</p>
            <input
              id="name"
              className="form-control"
              value={sinhVien.name}
              onChange={(e) => {
                const action = {
                  type: "HANDLE_CHANGE_INPUT",
                  id: e.target.id,
                  value: e.target.value,
                };
                this.props.dispatch(action);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <button className="btn btn-success">
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  qlsvReducer: state.qlsvReducer,
});

export default connect(mapStateToProps)(DemoQLSV);
