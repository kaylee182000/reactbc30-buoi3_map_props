import React, { Component } from "react";
import { connect } from "react-redux";
import SanPhamRedux from "./SanPhamRedux";

class DanhSachSanPhamRedux extends Component {
  render() {
    return (
      <div className="danh-sach-san-pham">
        <div className="row">
          <div className="col-4">
            <SanPhamRedux />
          </div>
          <div className="col-4">
            <SanPhamRedux />
          </div>
          <div className="col-4">
            <SanPhamRedux />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(DanhSachSanPhamRedux);
