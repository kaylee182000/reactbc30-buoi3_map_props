import React, { Component } from "react";
import { connect } from "react-redux";

class GioHang extends Component {
  render() {
    return (
      <div>
        <h3>Gio Hang</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Ma san pham</th>
              <th>Hinh anh</th>
              <th>Ten san pham</th>
              <th>So luong</th>
              <th>Gia ban</th>
              <th>Thanh tien</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((spGH, index) => {
              return (
                <tr key={index}>
                  <td>1</td>
                  <td>
                    <img src={spGH.hinhAnh} alt=".." width={50} />
                  </td>
                  <td>{spGH.tenSP}</td>
                  <td>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => {
                        const action = {
                          type: "TANG_GIAM_SO_LUONG",
                          payload: {
                            maSP: spGH.maSP,
                            soLuong: 1,
                          },
                        };
                        this.props.dispatch(action);
                      }}
                    >
                      +
                    </button>
                    {spGH.soLuong}
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => {
                        const action = {
                          type: "TANG_GIAM_SO_LUONG",
                          payload: {
                            maSP: spGH.maSP,
                            soLuong: -1,
                          },
                        };
                        this.props.dispatch(action);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>{spGH.giaBan}</td>
                  <td>{spGH.giaBan * spGH.soLuong}</td>
                  <td>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => {
                        const action = {
                          type: "XOA_GIO_HANG",
                          payload: {
                            maSPClick: spGH.maSP,
                          },
                        };
                        this.props.dispatch(action);
                      }}
                    >
                      Xoa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gioHang: state.demoGioHangReducer.gioHang,
});

export default connect(mapStateToProps)(GioHang);
