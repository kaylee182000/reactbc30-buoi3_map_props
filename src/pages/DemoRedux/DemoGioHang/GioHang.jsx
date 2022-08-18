import React, { Component } from 'react'
import { connect } from 'react-redux'

class GioHang extends Component {
  render() {
    return (
      <div>
          <h3>Gio Hang</h3>
          <table className='table'>
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
                <tr>
                    <td>1</td>
                    <td><img src="https://picsum.photos/id/50/50/50" alt=".."  width={50}/></td>
                    <td>iphone</td>
                    <td>1</td>
                    <td>1000</td>
                    <td>1000</td>
                    <td>
                        <button className='btn btn-danger mx-2'>Xoa</button>
                        <button className='btn btn-primary'>Sua</button>
                    </td>
                </tr>
            </tbody>
          </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(GioHang)