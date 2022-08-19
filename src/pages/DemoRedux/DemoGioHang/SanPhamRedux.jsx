import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sp } = this.props;
    return (
      <div className="card">
        <img src={sp.hinhAnh} alt=".." height={350} />
        <div className="card-body">
          <p>{sp.tenSP}</p>
          <p>{sp.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              const action = {
                type: "THEM_GIO_HANG",
                payload: {
                  sanPhamClick: sp,
                },
              };
              this.props.dispatch(action);
            }}
          >
            Them gio hang
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(SanPhamRedux);
