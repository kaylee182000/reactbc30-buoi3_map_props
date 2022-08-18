import React, { Component } from "react";
import { connect } from "react-redux";
import DanhSachSanPhamRedux from "./DanhSachSanPhamRedux";
import GioHang from "./GioHang";

class DemoGioHang extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Bai Tap Gio Hang</h1>
        <GioHang />
        <DanhSachSanPhamRedux />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(DemoGioHang);
